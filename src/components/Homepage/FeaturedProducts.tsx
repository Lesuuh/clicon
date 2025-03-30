import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { HeartIcon } from "../icons/HeartIcon";

import { EyeIcon } from "../icons/EyeIcon";
import CartIcon from "../icons/CartIcon";
import { truncateText } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { ScaleLoader } from "react-spinners";
import NotFound from "@/pages/NotFound";
import { CategoriesTypes, ProductTypes } from "@/lib/types";

const fetchFeaturedProducts = async (): Promise<ProductTypes[]> => {
  const respone = await fetch("http://localhost:8000/products");
  const data = await respone.json();
  return data;
};

const fetchCategories = async (): Promise<CategoriesTypes[]> => {
  const response = await fetch("http://localhost:8000/categories");
  const data = await response.json();
  return data;
};

const FeaturedProducts = () => {
  const {
    data: products,
    isLoading: isLoadingProducts,
    error: errorProducts,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchFeaturedProducts,
  });

  const {
    data: categories,
    isLoading: isLoadingCategories,
    error: errorCategories,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  const slicedCategories = categories?.slice(0, 4);

  // handles all products
  const allFeaturedProducts = () => {
    const filteredFilteredProducts = products?.filter(
      (product) => product.featured === true
    );
    console.log(filteredFilteredProducts);
  };

  allFeaturedProducts();

  if (isLoadingProducts || isLoadingCategories) {
    return (
      <ScaleLoader
        color="text-primary"
        loading={isLoadingProducts || isLoadingCategories}
        // cssOverride={override}
        height={15}
        width={5}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    );
  }

  if (errorProducts || errorCategories) {
    return (
      <NotFound
        message={
          errorProducts?.message ||
          errorCategories?.message ||
          "An error occurred"
        }
      />
    );
  }
  return (
    <section className="my-10 flex items-start">
      <div>
        <img src="/public/images/Image.jpg" alt="" />
      </div>
      <div className="">
        <div className="w-full flex justify-between items-center">
          <div className="flex items-center justify-between w-full">
            <p className="text-xl font-medium">Featured Products</p>
            <div className="flex items-center gap-3">
              <ul className="flex items-center gap-2">
                <p className="text-xs">All Products</p>
                {slicedCategories?.map((item) => (
                  <li className="text-xs">{item.name}</li>
                ))}
              </ul>
              <Link
                to="products"
                className="text-secondary-500 text-xs flex items-center"
              >
                Browse all Products <ArrowRight />
              </Link>
            </div>
          </div>
        </div>

        {/* container */}
        <div className="flex flex-col sm:flex-row">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  border border-gray-200">
            {products?.map((item: ProductTypes) => (
              <div
                key={item.id}
                className="group relative border border-gray-200 p-4  flex flex-col items-center justify-between transition-all duration-300 ease-in-out hover:shadow-lg "
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
    </section>
  );
};

export default FeaturedProducts;
