import { getDocs, collection } from "firebase/firestore";
import { db } from "./firebase";

export const fetchProducts = async () => {
  const snapshot = await getDocs(collection(db, "Products"));

  const products = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return products;
};
