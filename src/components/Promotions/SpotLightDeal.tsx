import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

const SpotLightDeal = () => {
  return (
    <section className="p-5 md:p-10 w-full md:flex justify-between items-center bg-primary-100 rounded-sm">
      <div className="flex items-start flex-col gap-2">
        <p className="px-2 py-1 bg-secondary-500 text-white text-[.6rem]">
          SAVE UP TO $200
        </p>
        <h3 className="text-2xl text-black font-bold">Macbook Pro</h3>
        <p className="text-gray-900">
          Apple M1 Max Chip. 32GB Unified Memory, 1TB SSD Storage
        </p>
        <Button className="text-xs text-white mt-3 rounded-xs ">
          SHOP NOW <ArrowRight />
        </Button>
      </div>
      <div className="relative">
        <span className="absolute right-0 md:left-0 top-3 md:top-6 bg-primary-200 text-black font-bold rounded-full h-14 md:h-18 text-xs w-14 md:w-18 flex justify-center items-center border-white border-2 md:border-4">
          $2998
        </span>
        <img src="/images/Image (22).png" alt="" className="w-full md:w-100" />
      </div>
    </section>
  );
};

export default SpotLightDeal;
