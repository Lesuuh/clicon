import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { HeartIcon } from "../icons/HeartIcon";
import { EyeIcon } from "../icons/EyeIcon";
import CartIcon from "../icons/CartIcon";
import { truncateText } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import NotFound from "@/pages/NotFound";
import { CategoriesTypes, ProductTypes } from "@/lib/types";
import { useEffect, useState } from "react";
import DiscountBanner from "../Promotions/DiscountBanner";
import ClipLoaderSpinner from "../icons/ClipLoaderSpinner";

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

const CategoryComponent = () => {
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

  //   getting a random category

  const [randomCategory, setRandomCategory] = useState<
    CategoriesTypes | undefined
  >(undefined);

  useEffect(() => {
    if (categories?.length) {
      const randomIndex = Math.floor(Math.random() * categories.length);
      setRandomCategory(categories[randomIndex]);
    }
  }, [categories]);

  console.log(randomCategory);

  //   getting the products for the random category
  const [randomCategoryProductsState, setRandomCategoryProductsState] =
    useState<ProductTypes[]>([]);

  useEffect(() => {
    if (randomCategory) {
      const randomCategoryProducts = products?.filter(
        (product) => product.category?.id === randomCategory?.id
      );
      setRandomCategoryProductsState(randomCategoryProducts || []);
    }
  }, [randomCategory, products]);
  console.log(randomCategoryProductsState);

  //   getting all the category products
  // const allCategoryProducts = () => {
  //   return randomCategoryProductsState;
  // };

  //    filter based on category
  //   const filterBasedOnCategory = (categories: CategoriesTypes) => {
  //     const filteredProducts = products?.filter(
  //       (product) => product.id === categories?.id
  //     );
  //     setRandomCategoryProductsState(filteredProducts || []);
  //   };

  if (isLoadingProducts || isLoadingCategories) {
    return (
      <div className="w-full flex justify-center items-center my-10">
        <ClipLoaderSpinner />
      </div>
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
    <section className="px-4 md:px-20  max-w-[1400px] mx-auto my-10 flex flex-col  md:flex-row   gap-4 items-start w-full">
      <DiscountBanner side="right" />
      <div className="w-full">
        <div className="flex  lg:items-start justify-between flex-col lg:flex-row w-full mb-3">
          <p className="text-base font-medium text-left w-full lg:w-[30%]">
            {randomCategory?.name}
          </p>
          {/* navigations */}
          <div className="flex w-full justify-between lg:justify-end">
            <ul className="flex items-center flex-wrap gap-2  lg:mr-5">
              {/* <p
                className=" text-[.6rem] text-gray cursor-pointer px-1 rounded-sm hover:text-primary"
                onClick={() => allCategoryProducts()}
              >
                All Products
              </p> */}
              {slicedCategories?.map((item) => (
                <Link key={item.id} to={`/products/?category=${item.slug}`}>
                  <li
                    key={item.id}
                    className="text-[.6rem] text-gray cursor-pointer px-1 rounded-sm hover:text-primary"
                    //   onClick={() => filterBasedOnCategory(item)}
                  >
                    {item.name}
                  </li>
                </Link>
              ))}
            </ul>
            <Link
              to="products"
              className="text-primary text-[.6rem] flex items-center"
            >
              <p> Browse all Products </p>
              <ArrowRight className="w-5" />
            </Link>
          </div>
        </div>

        {/* container */}
        <div className="flex flex-col sm:flex-row">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  border border-gray-200 w-full">
            {randomCategoryProductsState?.map((item: ProductTypes) => (
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

export default CategoryComponent;
