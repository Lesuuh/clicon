import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ArrowRight, Minus, Star } from "lucide-react";

// svgs
import PackageIcon from "../components/icons/PackageIcon";
import TrophyIcon from "@/components/icons/TrophyIcon";
import CreditCard from "@/components/icons/CreditCard";
import { HeadPhoneIcon } from "@/components/icons/HeadphoneIcon";
import { Link } from "react-router";
import { HeartIcon } from "@/components/icons/HeartIcon";
import { EyeIcon } from "@/components/icons/EyeIcon";
import { truncateText } from "@/lib/utils";
import CartIcon from "@/components/icons/CartIcon";
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

// best deals products
const bestDeals = Array.from({ length: 8 }, (_, index) => ({
  id: index + 1,
  name: "Apple iPhone 15 Pro",
  description: "Apple iPhone 15 Pro with A17 Pro chip and 48MP camera.",
  price: 999.99,
  discount: 5,
  category: "smartphones",
  brand: "Apple",
  rating: 4.8,
  reviews: [
    { user: "JohnDoe", comment: "Great phone!", rating: 5 },
    { user: "JaneDoe", comment: "Very expensive.", rating: 4 },
  ],
  stock: 50,
  images: ["/images/Image (29).png"],
  variants: [
    {
      color: "Black",
      storage: "128GB",
      price: 999.99,
    },
    {
      color: "Silver",
      storage: "256GB",
      price: 1099.99,
    },
  ],
  shipping: {
    weight: "200g",
    dimensions: { width: "7cm", height: "14cm", depth: "0.8cm" },
    availableRegions: ["US", "UK", "Canada"],
  },
  seller: {
    id: 1,
    storeName: "Apple Official Store",
    location: "California, USA",
  },
  bestDeals: true,
  featured: true,
  hot: true,
  soldOut: true,
}));

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
        <div className="grid grid-cols-2 p-3 sm:grid-cols-4">
          <div className="flex items-center  gap-2 sm:gap-4">
            <PackageIcon className="w-4 sm:w-6" />
            <div>
              <p className="text-xs">FASTED DELIVERY</p>
              <p className="text-xs font-extralight">Delivery in 24/H</p>
            </div>
          </div>
          <div className="flex items-center  gap-2 sm:gap-4">
            <TrophyIcon className="w-4 sm:w-6" />
            <div>
              <p className="text-xs">FASTED DELIVERY</p>
              <p className="text-xs font-extralight">Delivery in 24/H</p>
            </div>
          </div>
          <div className="flex items-center  gap-2 sm:gap-4">
            <CreditCard className="w-4 sm:w-6" />
            <div>
              <p className="text-xs">FASTED DELIVERY</p>
              <p className="text-xs font-extralight">Delivery in 24/H</p>
            </div>
          </div>
          <div className="flex items-center  gap-2 sm:gap-4">
            <HeadPhoneIcon className="w-4 sm:w-6" />
            <div>
              <p className="text-xs">FASTED DELIVERY</p>
              <p className="text-xs font-extralight">Delivery in 24/H</p>
            </div>
          </div>
        </div>
      </div>

      {/* -------------BEST DEALS -------------- */}
      <div className="my-10">
        <div className="w-full flex justify-between items-center">
          <p className="flex flex-col">
            Best Deals
            <span className="text-xs">
              {"  "}
              Deals ends in{" "}
              <span className="bg-warning-300 py-1 px-2">
                16d: 21h: 57m: 2s
              </span>
            </span>
          </p>

          <Link
            to="products"
            className="text-secondary-500 text-xs flex items-center"
          >
            Browse all Products <ArrowRight />
          </Link>
        </div>

        {/* container */}
        <div className="flex flex-col sm:flex-row">
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
                Xbox Series S- 512GB SSd Console with Wireless Controller -EU
                Version
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
                <Button className="flex-2">ADD TO CART</Button>
                <EyeIcon className="bg-primary-100 px-1.5 rounded-sm w-8 h-8" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  border border-gray-200">
            {bestDeals.map((item) => (
              <div
                key={item.id}
                className="group relative border border-gray-200 p-4 lg:pb-0 space-y-3 flex flex-col items-center justify-center transition-all duration-300 ease-in-out hover:shadow-lg "
              >
                <p className="hidden absolute top-3 left-2 text-[0.5rem] text-white font-light rounded-sm bg-gray-600 px-2 py-1">
                  {item.soldOut && "SOLD OUT"}
                </p>
                <p className="hidden absolute top-3 left-2 text-[.5rem] text-white font-light rounded-sm bg-red-600 px-2 py-1">
                  {item.soldOut && "HOT"}
                </p>
                <p className="z-10 absolute top-3 left-2 text-[.5rem] text-black font-bold rounded-sm bg-warning px-2 py-1">
                  {item.soldOut && `${item.discount}% OFF`}
                </p>
                <div className="relative">
                  <img
                    src={item.images[0]}
                    alt=""
                    className="transition-transform duration-300 ease-in-out group-hover:scale-110"
                  />
                  <span className="group-hover:flex hidden w-full h-full absolute justify-center items-center gap-4 md:gap-1 top-0 z-20">
                    <div className="absolute inset-0   bg-[#00000050]"></div>
                    <HeartIcon className="text-black hover:text-white bg-white hover:bg-primary z-30 opacity-100 rounded-full w-8 px-2 h-8" />
                    <CartIcon className="text-black hover:text-white bg-white hover:bg-primary z-30 opacity-100 rounded-full w-8 px-2 h-8" />
                    <EyeIcon className="text-black hover:text-white bg-white hover:bg-primary z-30 opacity-100 rounded-full w-8 px-2 h-8" />
                  </span>
                </div>
                <div className="space-y-2">
                  <p className="text-xs">
                    {truncateText(item.description, 40)}
                  </p>
                  <p className="text-secondary-500 text-xs font-medium">
                    ${item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Homepage;
