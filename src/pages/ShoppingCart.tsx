import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useCartStore } from "@/store/cartStore";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

// interface CartProps {
//   title: string;
//   image: string;
//   orderNumber: string;
//   price: number;
// }

// const cart = [
//   {
//     title: " 2000mAh Dual Output Fast charging Portable Powerbank",
//     image: "/images/04.png",
//     orderNumber: "162887278",
//     price: 300,
//   },
//   {
//     title: " 2000mAh Dual Output Fast charging Portable Powerbank",
//     image: "/images/04.png",
//     orderNumber: "162887278",
//     price: 300,
//   },
//   {
//     title: " 2000mAh Dual Output Fast charging Portable Powerbank",
//     image: "/images/04.png",
//     orderNumber: "162887278",
//     price: 300,
//   },
// ];

const ShoppingCart = () => {
  const cart = useCartStore((state) => state.cart);
  return (
    <section className="my-10 mx-auto w-full h-auto max-w-[1400px] px-5 md:px-20 flex flex-wrap items-start  gap-10">
      <div className="flex-2">
        <h2>Shopping Cart</h2>
        <div className="grid grid-cols-1 mt-2">
          {cart.map((cartItem, index: number) => (
            <div key={index} className="flex flex-row w-full">
              <div className="flex sm:flex-row w-full gap-2 p-4 border border-gray-200">
                <img
                  src={cartItem.product.images[0]}
                  alt="Product"
                  className="w-24 h-24 object-cover"
                />
                <div className="flex w-full flex-col justify-between items-start">
                  <div>
                    <p className="text-[.7rem] font-semibold">
                      {cartItem.product.title}
                    </p>
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-black text-[.9rem] font-semibold">
                      {cartItem.product.price}
                    </p>
                    <div className="flex items-center gap-4 bg-white border border-gray-200 rounded-xs">
                      <button className="px-2 py-1 bg-transparent rounded">
                        -
                      </button>
                      <span>0</span>
                      <button className="px-2 py-1 bg-transparent rounded">
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex-1 border p-4 border-gray-300 rounded-xs">
        <h3 className="text-[.9rem] font-semibold">Order Summary</h3>
        <div>
          <div className="flex items-center w-full justify-between text-[.8rem] py-1">
            <p>Sub-total</p>
            <p>$320</p>
          </div>
          <div className="flex items-center w-full justify-between text-[.8rem] py-1">
            <p>Shipping</p>
            <p>Free</p>
          </div>
          <div className="flex items-center w-full justify-between text-[.8rem] py-1">
            <p>Discount</p>
            <p>$20</p>
          </div>
          <div className="flex items-center w-full justify-between text-[.8rem] py-1">
            <p>Tax</p>
            <p>$61.99</p>
          </div>
        </div>
        <Separator className="w-full my-2 border-t border-gray-300" />
        <div className="flex items-center w-full justify-between text-[.9rem] py-1">
          <p>Total</p>
          <p>$3334</p>
        </div>
        <Link
          to={"/checkout"}
          className="text-white bg-primary py-1 rounded-xs flex items-center w-full justify-center mt-3 gap-2 text-[.8rem]"
        >
          PROCEED TO CHECKOUT <ArrowRight />
        </Link>
      </div>
    </section>
  );
};

export default ShoppingCart;
