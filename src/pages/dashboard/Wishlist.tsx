import ClipLoaderSpinner from "@/components/icons/ClipLoaderSpinner";
import ProductCard from "@/components/products/ProductCard";
import { ProductTypes } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";

const wishlist = [
  { id: 1, productId: 2 },
  { id: 2, productId: 1 },
];
const fetchProducts = async () => {
  const response = await fetch("http://localhost:8000/products");
  const data = await response.json();
  return data;
};

const Wishlist = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  if (isLoading) {
    return (
      <div className="w-full justify-center items-center flex-h my-10">
        <ClipLoaderSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full justify-center items-center flex-h my-10">
        <p className="text-red-500">Error fetching products</p>
      </div>
    );
  }

  const wishlistIds = wishlist.map((item) => item.productId);

  const wishlistProducts = data.filter((product: ProductTypes) =>
    wishlistIds.includes(product.id)
  );

  console.log(data);

  console.log(wishlistProducts);
  return (
    <div className="w-full">
      <h2 className="w-full bg-gray-200 py-1 rounded-xs px-3 text-[.8rem]">
        WISHLIST (8)
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {wishlistProducts.map((item: ProductTypes) => (
            <Link key={item.id} to={`products/${item.id}`}>
              <ProductCard item={item} />
            </Link>
          ))}
        </div>
      </h2>
    </div>
  );
};

export default Wishlist;
