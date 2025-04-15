import {db} from "firebase"
import {collections, getDocs} from "firebase/firestore"

export const fetchProducts = async()=> {
 const snapshot = await getdocs(collections(db, "products"))

const products = snapshot.docs.map((doc)=> id:doc.id, doc.data())
return products
}