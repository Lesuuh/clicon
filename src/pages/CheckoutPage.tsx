import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

const CheckoutPage = () => {
  return (
    <section className="my-10 mx-auto w-full h-auto max-w-[1400px] px-5 md:px-20 flex flex-wrap items-start  gap-10">
      <div className="flex-2">
        <h2>Billign Information</h2>
      </div>
      <div className="w-full flex-1 border p-4 border-gray-300">
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

export default CheckoutPage;
