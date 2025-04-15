
import SuccessCheck from "@/components/icons/SuccessCheck";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router";

const CheckoutSuccessPage = () => {
  return (
    <section className="my-10 mx-auto w-full h-auto max-w-[1400px] px-5 md:px-20 flex flex-col justify-center items-center text-center space-y-3 ">
      <SuccessCheck className="animate-pulse" />
      <h3 className="text-xl font-semibold">
        Your order is successfully place
      </h3>
      <p className="texty-[.8rem] text-gray">
        Pellentesque sed lectus nec tortor tristique accumsan quis dictum risus.
        Donec volutpat mollis nulla non facilisis.
      </p>
      <div className="flex justify-center items-center flex-col md:flex-row gap-2 mt-2 w-full">
        <Link to={"/profile"}>
          <Button
            variant={"outline"}
            className=" cursor-pointer text-primary text-[.7rem] rounded-xs"
          >
            <ArrowLeft /> GO TO DASHBOARD
          </Button>
        </Link>
        <Link to="/">
          <Button className="w-32 cursor-pointer text-[.7rem] rounded-xs border-primary border text-white">
            VIEW ORDERS <ArrowRight />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default CheckoutSuccessPage;
