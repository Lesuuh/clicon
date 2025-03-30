import { truncateText } from "@/lib/utils";
import CartIcon from "../icons/CartIcon";
import { EyeIcon } from "../icons/EyeIcon";
import { HeartIcon } from "../icons/HeartIcon";
import { ArrowRight} from "lucide-react";
import { Link } from "react-router";
import { ScaleLoader } from "react-spinners";
import { useQuery } from "@tanstack/react-query";
import NotFound from "@/pages/NotFound";
import { ProductTypes } from "@/lib/types";
import DealOfTheDay from "../Promotions/DealOfTheDay";

const fetchProducts = async (): Promise<ProductTypes[]> => {
  const response = await fetch("http://localhost:8000/products");
  const data = await response.json();
  // console.log(data);
  return data;
};

const BestDeals = () => {
  // best deals products

  // const bestDeals = Array.from({ length: 8 }, (_, index) => ({
  //   id: index + 1,
  //   name: "Apple iPhone 15 Pro",
  //   description: "Apple iPhone 15 Pro with A17 Pro chip and 48MP camera.",
  //   price: 999.99,
  //   discount: 5,
  //   category: "smartphones",
  //   brand: "Apple",
  //   rating: 4.8,
  //   reviews: [
  //     { user: "JohnDoe", comment: "Great phone!", rating: 5 },
  //     { user: "JaneDoe", comment: "Very expensive.", rating: 4 },
  //   ],
  //   stock: 50,
  //   images: ["/images/Image (29).png"],
  //   variants: [
  //     {
  //       color: "Black",
  //       storage: "128GB",
  //       price: 999.99,
  //     },
  //     {
  //       color: "Silver",
  //       storage: "256GB",
  //       price: 1099.99,
  //     },
  //   ],
  //   shipping: {
  //     weight: "200g",
  //     dimensions: { width: "7cm", height: "14cm", depth: "0.8cm" },
  //     availableRegions: ["US", "UK", "Canada"],
  //   },
  //   seller: {
  //     id: 1,
  //     storeName: "Apple Official Store",
  //     location: "California, USA",
  //   },
  //   bestDeals: true,
  //   featured: true,
  //   hot: true,
  //   soldOut: true,
  // }));

  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
  // console.log(data);

  if (isLoading) {
    return (
      <ScaleLoader
        color="text-primary"
        loading={isLoading}
        // cssOverride={override}
        height={15}
        width={5}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    );
  }

  if (error) {
    return <NotFound message={error.message} />;
  }
  return (
    <section className="my-10">
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
