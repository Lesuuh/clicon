import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ArrowRight, Minus } from "lucide-react";

// svgs
import PackageIcon from "../components/icons/PackageIcon";
import TrophyIcon from "@/components/icons/TrophyIcon";
console.log(PackageIcon);

type Product = {
  id: number;
  name: string;
  price?: number; // Add other properties as needed
};

const fetchProducts = async (): Promise<Product[]> => {
  const { data } = await axios.get<Product[]>("http://localhost:8000/users");
  return data;
};

const Homepage = () => {
  const { data, isLoading, isError, error } = useQuery<Product[]>({
    queryKey: ["products"], // Unique key for caching
    queryFn: fetchProducts,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;
  console.log(data);

  return (
    <main className="px-4 md:px-20 w-full max-w-[1400px] mx-auto">
      {/* hero section */}
      <div className="my-10 flex flex-col lg:flex-row gap-4 w-full">
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
            <Button className="bg-primary  text-white text-xs px-4 py-2 rounded-xs my-4">
              SHOP NOW
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
      </div>
      {/* ----------------- ---------- */}
      <div className="flex items-center-justify-between flex-col border-1 border-gray-50">
        <div>
          <div className="w-6 h-6 text-blue-500">
            <PackageIcon />
          </div>
          <div>
            <TrophyIcon />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Homepage;
