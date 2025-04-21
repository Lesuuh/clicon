import { db } from "@/services/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

export async function deleteFromDb(userId: string, productId) {
  const cartRef = doc(db, "users", userId, "cart", "userCart");
  const snapShot = await getDoc(cartRef);

  if (!snapShot.exists) return;

  const existingCart = snapShot.data()?.cart;

  const updatedCart = existingCart.filter((item) => item.id !== productId);
  await setDoc(cartRef, { updatedCart });
}
