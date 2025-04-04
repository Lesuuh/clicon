import { ArrowRight, Minus } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router";

const Hero = () => {
  return (
    <section className="my-10 flex flex-col lg:flex-row gap-4 px-4 md:px-20 w-full max-w-[1400px] mx-auto z-10">
      {/* first */}
      <div className="flex bg-gray-50 p-5 md:p-10 rounded-sm relative">
        <div className="h-auto flex flex-col justify-center gap-2 items-start">
          <p className="text-secondary text-xs flex items-center">
            <Minus />
            THE BEST PLACE TO PLAY
          </p>
          <h2 className="text-2xl md:text-4xl font-normal">Xbox Consoles</h2>
          <p className="text-gray-900 text-xs md:text-sm ny-2">
            Save up to 50% on select Xbox games. Get 3 months of PC Game Pass
            for $2 USD.
          </p>
          <Button className="bg-primary  text-white text-xs px-4 py-2 rounded-xs my-4 cursor-pointer">
            <Link to="/products">SHOP NOW</Link>
            <ArrowRight />
          </Button>
        </div>
        <div>
          <img
            src="images/console.png"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <span className="absolute right-8 bg-secondary text-white rounded-full h-12 text-xs w-12 flex justify-center items-center border-white border-2">
          $299
        </span>
      </div>

      {/* second */}
      <div className=" hidden w-full lg:w-[50%] h-full sm:flex flex-row lg:flex-col gap-4">
        <div className="bg-black relative text-white p-5 rounded-sm  w-full">
          <div className="z-10 flex flex-col items-start w-[50%]">
            <p className="text-warning text-xs">SUMMER SALES</p>
            <p>New Google Pixel 6 Pro</p>
            <Button className="bg-primary  text-white text-xs px-4 py-2 rounded-xs my-4">
              SHOP NOW
              <ArrowRight />
            </Button>
          </div>
          <div className="absolute bottom-0 right-0">
            <img src="/images/image 5.png" alt="" className="w-35" />
          </div>
          <span className="bg-warning absolute text-xs font-medium text-black right-6 top-5 px-2 py-1">
            29% OFF
          </span>
        </div>

        <div className="bg-gray-50 flex w-full  items-center justify-between  rounded-sm p-5">
          <img src="/images/image 4.png" alt="" className="py-4 w-30" />
          <div className="flex items-start justify-center flex-col gap-3">
            <h2 className="font-bold text-xl">Xiaomi FlipBuds Pro</h2>
            <p className="text-secondary font-medium text-sm">$299 USD</p>
            <Button className="bg-primary  text-white text-xs  rounded-xs ">
              SHOP NOW
              <ArrowRight />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
