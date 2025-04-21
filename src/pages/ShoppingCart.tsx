import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { deleteFromDb } from "@/lib/deleteCartInDb";
import { useAuthStore } from "@/store/authStore";
import { useCartStore } from "@/store/cartStore";
import { ArrowRight, Trash2 } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";

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
  const user = useAuthStore((state) => state.user);
  const cart = useCartStore((state) => state.cart);
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
  const deleteFromCart = useCartStore((state) => state.deleteFromCart);
  const handleDelete = (productId: number) => {
    deleteFromCart(productId);
    deleteFromDb(user.uid, productId);
  };
  const navigate = useNavigate();

  return (
    <section className="my-10 mx-auto w-full h-auto max-w-[1400px] px-5 md:px-20 flex flex-col sm:flex-row flex-wrap items-start  gap-10">
      <div className="flex-2 w-full">
        <h2>Shopping Cart</h2>
        <div className="grid grid-cols-1 mt-2 w-full">
          {cart.length > 0 ? (
            cart.map((cartItem, index: number) => (
              <div key={index} className="flex flex-row w-full ">
                <div className="flex relative rounded-xs sm:flex-row w-full gap-2 p-4 border border-gray-200">
                  <Trash2
                    onClick={() => handleDelete(cartItem.product.id)}
                    className="text-red-600 absolute top-2 right-2 cursor-pointer"
                    size={16}
                  />
                  <img
                    src={cartItem.product.images[0]}
                    alt="Product"
                    className="w-24 h-24 object-cover"
                  />
                  <div className="flex w-full flex-col justify-between items-start">
                    <div>
                      <p className="text-[.7rem] font-semibold mr-2">
                        {cartItem.product.title}
                      </p>
                    </div>
                    <div className="flex justify-between items-center w-full">
                      <p className="text-black text-[.9rem] font-semibold">
                        {cartItem.product.price}
                      </p>
                      <div className="flex items-center gap-4 bg-white border border-gray-200 rounded-xs">
                        <button
                          onClick={() => decreaseQuantity(cartItem.product.id)}
                          className="px-2 py-1 bg-transparent rounded-xs cursor-pointer"
                        >
                          -
                        </button>
                        <span className="text-[.7rem]">
                          {cartItem.quantity}
                        </span>
                        <button
                          onClick={() => increaseQuantity(cartItem.product.id)}
                          className="px-2 py-1 bg-transparent rounded-xs cursor-pointer"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="flex w-full flex-col h-full items-center text-[.8rem] font-semibold justify-center">
              <p>No Products in Cart</p>
              <Button
                onClick={() => navigate("/products")}
                className="uppercase  text-white rounded-xs mt-2 cursor-pointer text-[.7rem]"
              >
                Go Shopping
              </Button>
            </div>
          )}
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
        <div>
          {cart.length === 0 ? (
            <Button
              onClick={() => toast.error("Please add an item to cart, biko")}
              className="text-white bg-primary py-1 rounded-xs flex items-center w-full justify-center mt-3 gap-2 text-[.7rem]"
            >
              PROCEED TO CHECKOUT <ArrowRight />
            </Button>
          ) : (
            <Link
              to={"/checkout"}
              className="text-white bg-primary py-1 rounded-xs flex items-center w-full justify-center mt-3 gap-2 text-[.7rem]"
            >
              PROCEED TO CHECKOUT <ArrowRight />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default ShoppingCart;
