import ProductCard from "@/components/products/ProductCard";
import { Button } from "@/components/ui/button";
import { ProductTypes } from "@/lib/types";
import { useWishlistStore } from "@/store/wishlistStore";
import { useState } from "react";
import { Link, useNavigate } from "react-router";

const Wishlist = () => {
  const wishlist = useWishlistStore((state) => state.wishlist);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // if (error) {
  //   return (
  //     <div className="w-full justify-center items-center flex-h my-10">
  //       <p className="text-red-500">Error fetching products</p>
  //     </div>
  //   );
  // }
  if (loading) {
    return (
      <p className="flex justify-center items-center flex-row w-full">
        Loading...
      </p>
    );
  }

  return (
    <div className="w-full">
      <h2 className="w-full bg-gray-200 py-1 rounded-xs px-3 text-[.8rem]">
        WISHLIST ({wishlist.length})
      </h2>
      {wishlist.length !== 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
          {wishlist.map((item: ProductTypes) => (
            <Link key={item.id} to={`/products/${item.id}`}>
              <ProductCard item={item} />
            </Link>
          ))}
        </div>
      ) : (
        <div className="flex w-full flex-col h-full items-center text-[.8rem] font-semibold justify-center">
          <div className="flex w-full items-center justify-center flex-col">
            <p>No Products in Wishlist, add your favourites</p>
            <Button
              onClick={() => navigate("/products")}
              className="uppercase  text-white rounded-xs mt-2 cursor-pointer text-[.7rem]"
            >
              Go Shopping
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Wishlist;
