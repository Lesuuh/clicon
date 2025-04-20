import { db } from "@/services/firebase";
import { useCartStore } from "@/store/cartStore";
import { doc, getDoc, setDoc } from "firebase/firestore";

export async function syncCart(userId: string) {
  const isMerged = useCartStore.getState().isMerged;
  if (!userId && isMerged) return; // No userId, no syncing

  try {
    const cartRef = doc(db, "users", userId, "cart", "userCart");
    const snapShot = await getDoc(cartRef);

    // If cart doesn't exist in Firestore, start with an empty cart
    const firebaseCart = snapShot.exists() ? snapShot.data().cart || [] : [];

    const localCart = useCartStore.getState().cart;

    // Log for debugging, optional
    console.log("Firebase Cart:", firebaseCart);
    console.log("Local Cart:", localCart);

    // Merge local cart with Firestore cart
    const mergedCart = mergeCarts(localCart, firebaseCart);

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
        quantity: old.quantity + item.quantity, // Increase quantity if item exists
      });
    } else {
      map.set(item.product.id, item); // Add new item
    }
  }

  // Return the merged cart as an array
  return Array.from(map.values());
}
