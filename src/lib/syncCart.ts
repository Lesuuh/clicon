import { db } from "@/services/firebase";
import { useCartStore } from "@/store/cartStore";
import { doc, getDoc, setDoc } from "firebase/firestore";

export async function syncCart(userId: string) {
  const isMerged = useCartStore.getState();
  if (!userId && isMerged) return;

  try {
    const cartRef = doc(db, "users", userId, "cart", "userCart");
    const snapShot = await getDoc(cartRef);

    const localCart = useCartStore.getState().cart;
    if (!snapShot.exists() && localCart.length > 0) {
      await setDoc(cartRef, { cart: localCart });
      useCartStore.setState({ isMerged: true });
      return;
    }

    const firebaseCart = snapShot.exists() ? snapShot.data().cart || [] : [];
    const currentLocalCart = useCartStore.getState().cart;

    // Merge local cart with Firestore cart
    const mergedCart = mergeCarts(currentLocalCart, firebaseCart);

    // Save merged cart to Firestore
    await setDoc(cartRef, { cart: mergedCart });

    // Update Zustand store with merged cart
    useCartStore.setState({ cart: mergedCart, isMerged: true });

    console.log("Cart successfully synced!");
  } catch (error) {
    console.error("Error syncing cart to Firestore:", error);
  }
}

function mergeCarts(local: any[], remote: any[]) {
  const map = new Map();

  // Merge remote (Firestore) cart items into the map
  for (const item of remote) {
    map.set(item.product.id, item);
  }

  // Merge local cart items, updating quantity if the item already exists
  for (const item of local) {
    if (map.get(item.product.id)) {
      const old = map.get(item.product.id);
      map.set(item.product.id, {
        ...old,
        quantity: item.quantity,
      });
    } else {
      map.set(item.product.id, item); // Add new item
    }
  }

  // Return the merged cart as an array
  return Array.from(map.values());
}
