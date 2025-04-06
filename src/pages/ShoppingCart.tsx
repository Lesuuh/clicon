import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowRight } from "lucide-react";

const ShoppingCart = () => {
  return (
    <section className="my-10 mx-auto w-full max-w-[1400px] px-5 md:px-20">
      <div>
        <h2>Shopping Cart</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col w-full">
            <div className="flex flex-row sm:flex-row w-full gap-2 p-4 border border-gray-200">
              <img
                src="/images/04.png"
                alt="Product"
                className="w-24 h-24 object-cover"
              />
              <div className="flex flex-col justify-between items-start">
                <div>
                  <p className="text-[.8rem]">
                    2000mAh Dual Output Fast charging Portable Powerbank
                  </p>
                  <p className="text-[.7rem] text-gray">Order 162887278</p>
                </div>
                <div>
                  <span className="bg-green-500 rounded-xs text-white p-1 text-[.6rem]">
                    Delivered
                  </span>
                  <p className="text-gray text-[.7rem]">On 13-02-2024</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full">
            <div className="flex flex-col sm:flex-row w-full gap-2 p-4 border border-gray-200">
              <img
                src="/images/04.png"
                alt="Product"
                className="w-24 h-24 object-cover"
              />
              <div className="flex flex-col justify-between items-start">
                <div>
                  <p className="text-[.8rem]">
                    2000mAh Dual Output Fast charging Portable Powerbank
                  </p>
                  <p className="text-[.7rem] text-gray">Order 162887278</p>
                </div>
                <div>
                  <span className="bg-green-500 rounded-xs text-white p-1 text-[.6rem]">
                    Delivered
                  </span>
                  <p className="text-gray text-[.7rem]">On 13-02-2024</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full">
            <div className="flex flex-col sm:flex-row w-full gap-2 p-4 border border-gray-200">
              <img
                src="/images/04.png"
                alt="Product"
                className="w-24 h-24 object-cover"
              />
              <div className="flex flex-col justify-between items-start">
                <div>
                  <p className="text-[.8rem]">
                    2000mAh Dual Output Fast charging Portable Powerbank
                  </p>
                  <p className="text-[.7rem] text-gray">Order 162887278</p>
                </div>
                <div>
                  <span className="bg-green-500 rounded-xs text-white p-1 text-[.6rem]">
                    Delivered
                  </span>
                  <p className="text-gray text-[.7rem]">On 13-02-2024</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full">
            <div className="flex flex-col sm:flex-row w-full gap-2 p-4 border border-gray-200">
              <img
                src="/images/04.png"
                alt="Product"
                className="w-24 h-24 object-cover"
              />
              <div className="flex flex-col justify-between items-start">
                <div>
                  <p className="text-[.8rem]">
                    2000mAh Dual Output Fast charging Portable Powerbank
                  </p>
                  <p className="text-[.7rem] text-gray">Order 162887278</p>
                </div>
                <div>
                  <span className="bg-green-500 rounded-xs text-white p-1 text-[.6rem]">
                    Delivered
                  </span>
                  <p className="text-gray text-[.7rem]">On 13-02-2024</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full">
            <div className="flex flex-col sm:flex-row w-full gap-2 p-4 border border-gray-200">
              <img
                src="/images/04.png"
                alt="Product"
                className="w-24 h-24 object-cover"
              />
              <div className="flex flex-col justify-between items-start">
                <div>
                  <p className="text-[.8rem]">
                    2000mAh Dual Output Fast charging Portable Powerbank
                  </p>
                  <p className="text-[.7rem] text-gray">Order 162887278</p>
                </div>
                <div>
                  <span className="bg-green-500 rounded-xs text-white p-1 text-[.6rem]">
                    Delivered
                  </span>
                  <p className="text-gray text-[.7rem]">On 13-02-2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3>Cart Totals</h3>
        <div>
          <div>
            <p>Sub-total</p>
            <p>$320</p>
          </div>
          <div>
            <p>Shipping</p>
            <p>Free</p>
          </div>
          <div>
            <p>Discount</p>
            <p>$20</p>
          </div>
          <div>
            <p>Tax</p>
            <p>$61.99</p>
          </div>
        </div>
        <Separator />
        <div>
          <p>Total</p>
          <p>$3334</p>
        </div>
        <Button>
          PROCEED TO CHECKOUT <ArrowRight />
        </Button>
      </div>
    </section>
  );
};

export default ShoppingCart;
