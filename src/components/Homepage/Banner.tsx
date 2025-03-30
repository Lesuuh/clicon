import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

const Banner = () => {
  return (
    <section className="my-10 w-full flex flex-col sm:flex-row items-stretch justify-between gap-4">
      {/* First Banner */}
      <div className="flex w-full flex-col md:flex-row items-center p-5 md:px-10 rounded-sm bg-gray-50 space-y-2">
        <div className="flex flex-col items-start gap-2">
          <p className="text-white bg-secondary-500 px-2 py-1 text-[.5em]">
            INTRODUCING
          </p>
          <h3 className="text-xl md:text-2xl font-normal">
            New Apple Homepod Mini
          </h3>
          <p className="text-[.7rem] text-gray-600">
            Jam-packed with innovation, HomePod mini delivers unexpectedly.
          </p>
          <Button className="px-4 py-1 mt-2 rounded-sm text-white text-[.7rem]">
            SHOP NOW <ArrowRight />
          </Button>
        </div>
        <img
          src="/public//images/Image 6.png"
          alt=""
          className="w-40 object-cover"
        />
      </div>

      {/* Second Banner */}
      <div className="flex w-full flex-col md:flex-row items-center p-5 md:px-10 bg-black rounded-sm space-y-2">
        <div className="flex flex-col items-start gap-2">
          <p className="bg-warning text-[.5rem] px-2 py-1">INTRODUCING NEW</p>
          <h3 className="text-xl md:text-2xl font-normal text-white">
            Xiaomi Mi 11 Ultra 12GB + 256GB
          </h3>
          <p className="text-[.7rem] text-gray-300">
            *Data provided by internal laboratories. Industry measurement.
          </p>
          <Button className="px-4 py-2 rounded-sm text-white text-[.7rem]">
            SHOP NOW <ArrowRight />
          </Button>
        </div>
        <img
          src="/public/images/Image (15).png"
          alt=""
          className="w-40 object-cover"
        />
      </div>
    </section>
  );
};

export default Banner;
