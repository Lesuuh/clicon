export const fetchProducts =()=> {
 const snapshot = getdocs(collections(db, "products"))

const products = snapshot.docs.map((doc)=> id:doc.id, doc.data())
return products
}