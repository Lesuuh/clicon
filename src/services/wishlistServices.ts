import { db } from "./firebase";
import { doc, setDoc } from "firebase/firestore";

export const saveWishlistToFirebase = async (
  userId: string,
  wishlist: any[]
) => {
  try {
    const docRef = doc(db, "users", userId, "wishlist", "userWishlist");
    await setDoc(docRef, { items: wishlist });
  } catch (error) {
    console.error("Error saving wishlist", error);
  }
};
