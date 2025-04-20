import { ProductTypes } from "@/lib/types";
import { HeartIcon } from "../icons/HeartIcon";
import CartIcon from "../icons/CartIcon";
import { EyeIcon } from "../icons/EyeIcon";
import { FaStar } from "react-icons/fa6";
// import { truncateText } from "@/lib/utils";
import { useCartStore } from "@/store/cartStore";
import { useWishlistStore } from "@/store/wishlistStore";

const ProductCard = ({ item }: { item: ProductTypes }) => {
  const addToCart = useCartStore((state) => state.addToCart);
  const addToWishlist = useWishlistStore((state) => state.addToWishlist);
  return (
    <div
      key={item.id}
      className="group relative border border-gray-200 p-4  flex flex-col items-center justify-between transition-all duration-300 ease-in-out hover:shadow-lg "
    >
      {/* badges */}
      {item.soldOut ? (
        <p className=" absolute top-3 left-2 text-[.5rem] text-white font-light rounded-sm bg-gray-600 px-2 py-1 z-30">
          SOLD OUT
        </p>
      ) : item.hot ? (
        <p className=" absolute top-3 left-2 text-[.5rem] text-white font-light rounded-sm bg-red-600 px-2 py-1 z-30">
          HOT
        </p>
      ) : null}

      <p
        className={` absolute top-3 right-2 text-[.5rem] text-black font-bold rounded-sm bg-warning px-2 py-1 ${
          item.soldOut && "opacity-0"
        } z-30`}
      >
        {item.discount && `${item.discount}% OFF`}
      </p>

      <div className="relative w-full">
        <img
          src={item?.images[0]}
          alt=""
          className="h-40 w-full object-contain transition-transform duration-300 ease-in-out group-hover:scale-110"
        />
        <span className="group-hover:flex hidden w-full h-full absolute justify-center items-center gap-4 space-x-3 md:gap-1 top-0 z-20">
          <div className="absolute inset-0 bg-[#00000050] rounded-sm"></div>
          <span onClick={() => addToWishlist(item)}>
            <HeartIcon className="text-black hover:text-white bg-white hover:bg-primary z-30 opacity-100 rounded-full w-8 px-2 h-8 cursor-pointer" />
          </span>
          <span onClick={() => addToCart(item)}>
            <CartIcon className="text-black hover:text-white bg-white hover:bg-primary z-30 opacity-100 rounded-full w-8 px-2 h-8 cursor-pointer" />
          </span>
          <span>
            <EyeIcon className="text-black hover:text-white bg-white hover:bg-primary z-30 opacity-100 rounded-full w-8 px-2 h-8 cursor-pointer" />
          </span>
        </span>
      </div>

      <div className="space-y-2 mt-2">
        <div className="star-ratings flex items-center">
          <FaStar className="text-yellow-300 w-3" />
          <FaStar className="text-yellow-300 w-3" />
          <FaStar className="text-yellow-300 w-3" />
          <FaStar className="text-yellow-300 w-3" />
          <FaStar className="text-yellow-300 w-3" />
          <p className="text-[.7rem] text-gray ml-1">(52,677)</p>
        </div>
        <p className="text-xs line-clamp-2">{item.description}</p>
        <p className="text-secondary-500 text-xs font-medium">${item.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
