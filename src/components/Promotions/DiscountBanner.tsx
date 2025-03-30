import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

const DiscountBanner = ({ side }: { side: string }) => {
  return (
    <div
      className={`bg-warning-300 flex flex-col ${
        side == "right" ? "order-2" : ""
      } p-5 items-center space-y-2 w-full md:w-[30%]`}
    >
      <p className="text-primary text-xs font-bold">COMPUTER & ACCESSORIES</p>
      <h3 className="text-2xl text-gray-950 ">32% Discount</h3>
      <p className="text-xs text-gray-600">For all electronics products</p>
      <p className="text-xs">
        Offers ends in{" "}
        <span className="px-2 py-1 bg-white text-gray-950 text-xs">
          END OF CHRISTMAS
        </span>
      </p>
      <Button className="bg-primary text-white my-3 text-[.7rem]">
        SHOP NOW <ArrowRight />
      </Button>
      <img src="/images/Image.jpg" alt="" className="w-full" />
    </div>
  );
};

export default DiscountBanner;
