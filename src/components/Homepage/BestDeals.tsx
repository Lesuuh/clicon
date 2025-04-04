import { truncateText } from "@/lib/utils";
import CartIcon from "../icons/CartIcon";
import { EyeIcon } from "../icons/EyeIcon";
import { HeartIcon } from "../icons/HeartIcon";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { useQuery } from "@tanstack/react-query";
import NotFound from "@/pages/NotFound";
import { ProductTypes } from "@/lib/types";
import DealOfTheDay from "../Promotions/DealOfTheDay";
import ClipLoaderSpinner from "../icons/ClipLoaderSpinner";

const fetchProducts = async (): Promise<ProductTypes[]> => {
  const response = await fetch("http://localhost:8000/products");
  const data = await response.json();
  // console.log(data);
  return data;
};

const BestDeals = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
  // console.log(data);

  if (isLoading) {
    return (
      <div className="w-full flex justify-center items-center my-10">
        <ClipLoaderSpinner />
      </div>
    );
  }

  if (error) {
    return <NotFound message={error.message} />;
  }
  return (
    <section className="px-4 md:px-20 w-full max-w-[1400px] mx-auto my-10">
      <div className="w-full flex justify-between items-center">
        <p className="flex flex-col">
          Best Deals
          <span className="text-xs">
            {"  "}
            Deals ends in{" "}
            <span className="bg-warning-300 py-1 px-2">16d: 21h: 57m: 2s</span>
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
        <DealOfTheDay />
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  border border-gray-200">
          {data?.map((item: ProductTypes) => (
            <div
              key={item.id}
              className="group relative border border-gray-200 p-4 flex flex-col items-center justify-between transition-all duration-300 ease-in-out hover:shadow-lg "
            >
              {item.soldOut ? (
                <p className=" absolute top-3 left-2 text-[.5rem] text-white font-light rounded-sm bg-gray-600 px-2 py-1 z-30">
                  SOLD OUT
                </p>
              ) : item.hot ? (
                <p className=" absolute top-3 left-2 text-[.5rem] text-white font-light rounded-sm bg-red-600 px-2 py-1 z-30">
                  HOT
                </p>
              ) : null}

              <p
                className={` absolute top-3 right-2 text-[.5rem] text-black font-bold rounded-sm bg-warning px-2 py-1 ${
                  item.soldOut && "opacity-0"
                } z-30`}
              >
                {item.discount && `${item.discount}% OFF`}
              </p>
              <div className="relative">
                <img
                  src={item?.images[0]}
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
                <p className="text-xs">{truncateText(item.description, 40)}</p>
                <p className="text-secondary-500 text-xs font-medium">
                  ${item.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestDeals;
