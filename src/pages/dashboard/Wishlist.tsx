import ClipLoaderSpinner from "@/components/icons/ClipLoaderSpinner";
import ProductCard from "@/components/products/ProductCard";
import { ProductTypes } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";
// import { useEffect, useState } from "react";
import { Link } from "react-router";

// const wishlist = [
//   { id: 1, productId: 2 },
//   { id: 2, productId: 1 },
// ];
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

  // const wishlistProducts: ProductTypes[] = [];
  // // const wishlistIds = wishlist.map((id) => id.productId);

  // wishlist.forEach((wishlistItem) => {
  //   const matchingProduct = data?.find(
  //     (product: ProductTypes) => product.id === wishlistItem.productId
  //   );
  //   if (matchingProduct) {
  //     wishlistProducts.push(matchingProduct);
  //   }
  // });

  // console.log(wishlistProducts);

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

  return (
    <div className="w-full">
      <h2 className="w-full bg-gray-200 py-1 rounded-xs px-3 text-[.8rem]">
        WISHLIST (8){" "}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {data &&
          data.map((item: ProductTypes) => (
            <Link key={item.id} to={`products/${item.id}`}>
              <ProductCard item={item} />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Wishlist;
