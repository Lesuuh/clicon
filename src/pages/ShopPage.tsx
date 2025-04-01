import { HomeIcon } from "@/components/icons/HomeIcon";
import PriceSlider from "@/components/PriceSlider";
import ProductCard from "@/components/products/ProductCard";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { CategoriesTypes, ProductTypes } from "@/lib/types";
import { Separator } from "@radix-ui/react-select";

import { useQuery } from "@tanstack/react-query";
import { Check, ChevronRight } from "lucide-react";
import { Link } from "react-router";

const fetchProducts = async () => {
  const response = await fetch("http://localhost:8000/products");
  const data = response.json();
  return data;
};

const fetchCategories = async () => {
  const response = await fetch("http://localhost:8000/categories");
  const data = response.json();
  return data;
};

const prices = [
  "All Price",
  "Under $20",
  "$25 to $100",
  "$100 to $300",
  "$300 to $500",
  "$500 to $1,000",
  "$1,000 to $10,000",
];

const popularBrands = [
  "Apple",
  "Samsung",
  "Microsoft",
  "Sony",
  "Dell",
  "HP",
  "Intel",
  "LG",
  "Google",
  "Lenovo",
  "AMD",
  "NVIDIA",
  "Asus",
  "Razer",
  "Huawei",
  "Canon",
  "Panasonic",
  "One Plus",
  "GoPro",
  "Fitbit",
  "Xiaomi",
  "Tecno",
  "Nikon",
];

const ShopPage = () => {
  const {
    data: products,
    isLoading: productsLoading,
    error: productsError,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const {
    data: categories,
    isLoading: categoriesLoading,
    error: categoriesError,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  if (productsError || categoriesError) {
    return <p>{productsError?.message || categoriesError?.message}</p>;
  }

  if (productsLoading || categoriesLoading) {
    return (
      <p className="flex justify-center items-center h-screen w-full">
        Loading {productsLoading ? "products" : "categories"}
      </p>
    );
  }

  return (
    <section className="my-10 ">
      <div className="bg-gray-50 max-w-[1400px]  py-3 mb-5 gap-4 px-4 md:px-20 w-full mx-auto">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <Link to="/">
                <BreadcrumbLink className="flex items-end text-gray text-[.7rem]">
                  <HomeIcon className="text-gray w-3 mr-1" />
                  Home
                </BreadcrumbLink>
              </Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <ChevronRight absoluteStrokeWidth className="text-gray w-2" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <Link to="/shop">
                <BreadcrumbLink className="text-gray  text-[.7rem]">
                  Shop
                </BreadcrumbLink>
              </Link>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="flex px-4 md:px-20 w-full mx-auto max-w-[1400px] gap-4">
        <aside className="w-[30%]">
          <div className="">
            <div>
              <h2 className="text-xs font-medium">CATEGORY</h2>
              <ul className="mt-2">
                {categories.map((cat: CategoriesTypes) => (
                  <label
                    key={cat.id}
                    htmlFor={`radioInput${cat.id}`}
                    className="flex items-center text-gray-500 font-normal pb-2"
                  >
                    <input
                      type="radio"
                      name="category"
                      id={`radioInput${cat.id}`}
                      className="sr-only peer"
                    />
                    <div className="w-3 h-3 bg-white border border-gray-300 rounded-full peer-checked:border-primary peer-checked:border-[3.5px] !important"></div>
                    <li className="text-[.7rem] ml-2 peer-checked:text-black peer-checked:font-medium">
                      {cat.name}
                    </li>
                  </label>
                ))}
              </ul>
            </div>
            <Separator className="w-full border-t border-gray-300" />
            <div className="mt-5">
              <h2 className="text-xs font-medium">PRICE TAG</h2>
              <div className="w-full">
                {/* <PriceSlider /> */}
                {/* Preset Price Options */}
                <ul className="price-options mt-2">
                  {prices.map((price, index) => (
                    <label
                      htmlFor={`price-${index}`}
                      className="flex items-center text-gray-500 font-normal pb-2"
                    >
                      <input
                        type="radio"
                        name="price"
                        id={`price-${index}`}
                        className="sr-only peer"
                      />
                      <div className="w-3 h-3 bg-white border border-blue-gray rounded-full peer-checked:border-primary peer-checked:border-2 !important"></div>
                      <li
                        key={index}
                        className="text-[.7rem] ml-2 peer-checked:text-black peer-checked:font-medium"
                      >
                        {price}
                      </li>
                    </label>
                  ))}
                </ul>
              </div>
            </div>
            <Separator className="w-full border-t border-gray-300" />
            <div>
              <h2 className="text-xs font-medium">POPULAR BRANDS</h2>
              <div>
                <ul className="w-full grid grid-cols-2 mt-2 mb-2 gap-2">
                  {popularBrands.map((pop, index) => (
                    <li key={index}>
                      <label
                        htmlFor="popular-brand"
                        className=" flex items-center text-[.6rem]"
                      >
                        <input
                          type="checkbox"
                          name="popular-brand"
                          id="popular-brand"
                          className="mr-1 w-3 border-primary border peer"
                        />
                        <div className="w-3 h-3 bg-white border-gray rounded-xs border peer-checked:border-primary peer-checked:bg-primary mr-1">
                          <Check size={12} className="text-white" />
                        </div>
                        {pop}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <Separator className="w-full border-t border-gray-300" />
            <div>
              <h2 className="text-xs font-medium">POPULAR TAGS</h2>
            </div>
          </div>
        </aside>

        {/* main */}
        <main className="">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4 w-full">
            {products?.map((item: ProductTypes) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
        </main>
      </div>
      <div>Shop page</div>
    </section>
  );
};

export default ShopPage;
