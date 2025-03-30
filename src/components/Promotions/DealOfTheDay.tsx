import { Star } from "lucide-react";
import { HeartIcon } from "../icons/HeartIcon";
import { Button } from "../ui/button";
import { EyeIcon } from "../icons/EyeIcon";

const DealOfTheDay = () => {
  return (
    <div className="relative flex items-center flex-col border-1 border-gray-50 p-4 my-5">
      <p className="absolute top-2 left-3 text-xs rounded-sm px-2 py-1 bg-warning-300 ">
        32% OFF
      </p>
      <p className="absolute top-10 left-3 text-xs rounded-sm px-2 py-1 bg-red-500 text-white">
        HOT
      </p>
      <img src="/images/console.png" alt="" className="w-48" />
      <div className="space-y-1">
        <div className="star-ratings flex items-center">
          <Star className="text-yellow-300 w-4" />
          <Star className="text-yellow-300 w-4" />
          <Star className="text-yellow-300 w-4" />
          <Star className="text-yellow-300 w-4" />
          <Star className="text-yellow-300 w-4" />
          <p className="text-xs text-gray">(52,677)</p>
        </div>
        <h3 className="text-sm">
          Xbox Series S- 512GB SSd Console with Wireless Controller -EU Version
        </h3>
        <div className="flex items-center gap-2 text-sm">
          <del className="text-gray">$865.99</del>
          <p className="text-secondary-500">$442.12</p>
        </div>
        <p className="text-gray-500 text-xs font-light">
          Games built using the Xbox Series X|S development kit showcase
          unparalleled load times, visuals.
        </p>
        <div className="my-1 flex items-center justify-between gap-2">
          <HeartIcon className="bg-primary-100 px-1.5 rounded-sm w-8 h-8" />
          <Button className="flex-2 text-white text-xs">ADD TO CART</Button>
          <EyeIcon className="bg-primary-100 px-1.5 rounded-sm w-8 h-8" />
        </div>
      </div>
    </div>
  );
};

export default DealOfTheDay;
