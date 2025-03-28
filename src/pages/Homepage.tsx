import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ArrowRight, Minus } from "lucide-react";

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
    <main className="px-4 md:px-20 lg:px-40 ">
      {/* hero section */}
      <div className="my-10 w-full  flex flex-col sm:flex-row  gap-4 items-center">
        {/* first */}
        <div className="flex w-full lg:w-[65%]  bg-gray-50 p-5 md:p-10 rounded-sm relative h-full">
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
            <img src="images/console.png" alt="" className="h-full w-full" />
          </div>
          <span className="absolute right-8 bg-secondary text-white rounded-full h-12 text-xs w-12 flex justify-center items-center border-white border-2">
            $299
          </span>
        </div>

        {/* second */}
        <div className="hidden lg:flex flex-col md:my-0 my-5 gap-2 flex-1 w-full">
          <div className="bg-black relative text-white p-5 rounded-sm flex items-start ">
            <div className="z-10 flex flex-col w-[40%]">
              <p className="text-warning text-xs">SUMMER SALES</p>
              <p>New Google Pixel 6 Pro</p>
              <Button className="bg-primary  text-white text-xs px-4 py-2 rounded-xs my-4">
                SHOP NOW
                <ArrowRight />
              </Button>
            </div>
            <div className="absolute bottom-0 right-0 ">
              <img src="/images/image 5.png" alt="" className="w-30" />
            </div>
            <span className="bg-warning absolute text-xs font-medium text-black right-6 top-5 px-2 py-1">
              29% OFF
            </span>
          </div>

          <div className="bg-gray-50 flex  items-center justify-between  rounded-sm p-5">
            <img src="/images/image 4.png" alt="" className="py-4 w-30" />
            <div className="w-[50%]">
              <h2 className="font-bold text-xl my-1">Xiaomi FlipBuds Pro</h2>
              <p className="text-secondary">$299 USD</p>
              <Button className="bg-primary  text-white text-xs px-4 py-2 rounded-xs ">
                SHOP NOW
                <ArrowRight />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Homepage;
