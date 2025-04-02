import { HomeIcon } from "@/components/icons/HomeIcon";
import SingleCheckIcon from "@/components/icons/SingleCheckIcon";
import ProductCard from "@/components/products/ProductCard";
import { Separator } from "@/components/ui/separator";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { CategoriesTypes, ProductTypes } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";
import {
  ArrowDownUp,
  ArrowLeft,
  ChevronRight,
  ListFilter,
  X,
} from "lucide-react";
import { Link, useSearchParams } from "react-router";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Suspense, useState } from "react";
import ClipLoaderSpinner from "@/components/icons/ClipLoaderSpinner";
import Search from "@/components/Search";

// FETCHING PRODUCTS DATA
const fetchProducts = async () => {
  const response = await fetch("http://localhost:8000/products");
  const data = response.json();
  return data;
};

// FETCHING CATEGORIES DATA
const fetchCategories = async () => {
  const response = await fetch("http://localhost:8000/categories");
  const data = response.json();
  return data;
};

const prices = [
  "All Prices",
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

const popularTags = [
  "Smartphones",
  "Laptops",
  "Headphones",
  "Tablets",
  "Wearables",
  "Cameras",
  "Smartwatches",
  "Gaming Consoles",
  "Home Appliances",
  "Speakers",
  "Televisions",
  "Chargers",
  "Accessories",
  "Bluetooth",
  "4K",
  "Gaming Laptops",
  "Smart Home",
  "Apple",
  "Samsung",
  "Android",
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

  // STATE FOR SORTING
  const [openDrawer, setOpenDrawer] = useState(false);

  // STATE FOR FILTERING
  const [openFilter, setOpenFilter] = useState(false);

  // RENDERED STATE
  let filteredProducts = products || [];

  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  console.log(query);

  if (query) {
    const searchProducts = filteredProducts?.filter((item: ProductTypes) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    filteredProducts = searchProducts;
    console.log(filteredProducts, "filt");
  }

  // ERROR
  if (productsError || categoriesError) {
    return <p>{productsError?.message || categoriesError?.message}</p>;
  }

  // LOADING
  if (productsLoading || categoriesLoading) {
    return (
      <p className="flex justify-center items-center h-screen w-full">
        <ClipLoaderSpinner />
      </p>
    );
  }

  return (
    <section className="my-10 relative">
      {/* ------------------- filtering buttons ----------------- */}
      <div className="fixed text-[.7rem] flex items-center bottom-10 z-40 left-1/2 transform -translate-x-1/2 px-4 rounded-4xl bg-black text-white h-10 py-2">
        <div className="flex items-center ">
          <p className="mr-1" onClick={() => setOpenDrawer(true)}>
            Sort by{" "}
          </p>{" "}
          <ArrowDownUp size={15} />
        </div>
        <Separator
          orientation="vertical"
          className="h-[80%] mx-2 w-[1px] border border-gray-50"
        />
        <div className="flex items-center" onClick={() => setOpenFilter(true)}>
          <p className="mr-1">Filters</p> <ListFilter />
        </div>
      </div>

      {/* {---------------------------- drawer  for sorting --------------------------} */}
      <Drawer open={openDrawer} onOpenChange={setOpenDrawer}>
        <DrawerContent className="bg-white">
          <DrawerHeader>
            <DrawerTitle className="flex items-center">
              Sort by{" "}
              <X className="ml-auto" onClick={() => setOpenDrawer(false)} />
            </DrawerTitle>
            <Separator className="w-full mt-1 border-t border-gray-300" />
            <DrawerDescription>
              <div className="flex flex-col w-full my-5 space-y-5">
                <label htmlFor="popular" className="flex items-center w-full">
                  Most Popular
                  <input
                    type="radio"
                    name="sort"
                    id="popular"
                    className="ml-auto sr-only peer"
                  />
                  <div className="w-4 h-4 ml-auto bg-white border-gray-400 border-2 rounded-full peer-checked:border-primary peer-checked:bg-primary "></div>
                </label>
                <label htmlFor="high" className="flex items-center w-full">
                  Prices: High to Low
                  <input
                    type="radio"
                    name="sort"
                    id="high"
                    className="sr-only peer"
                  />
                  <div className="w-4 h-4 ml-auto bg-white border-gray-400 border-2 rounded-full peer-checked:border-primary peer-checked:bg-primary "></div>
                </label>
                <label htmlFor="low" className="flex items-center w-full">
                  Prices: Low to High
                  <input
                    type="radio"
                    name="sort"
                    id="low"
                    className="sr-only peer"
                  />
                  <div className="w-4 h-4 ml-auto bg-white border-gray-400 border-2 rounded-full peer-checked:border-primary peer-checked:bg-primary "></div>
                </label>
              </div>
            </DrawerDescription>
          </DrawerHeader>
        </DrawerContent>
      </Drawer>

      {/* ---------------- mobile filtering ----------- */}
      <div
        className={`${
          openFilter ? "fixed" : "hidden"
        } overflow-y-auto py-5 h-full top-0 left-0 px-5 z-40 bg-white `}
      >
        <div
          className="flex items-center mb-3"
          onClick={() => setOpenFilter(false)}
        >
          <ArrowLeft className="mr-1 w-5" />
          <p>Filter</p>
        </div>
        <div className="w-full overflow-y-auto relative">
          <div className="mb-10">
            <div>
              <h2 className="text-xs font-medium">CATEGORY</h2>
              <ul className="mt-2">
                {categories.map((cat: CategoriesTypes) => (
                  <label
                    key={cat.id}
                    htmlFor={`radioInput${cat.id}`}
                    className="flex items-center text-gray-500 font-normal pb-2 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="category"
                      id={`radioInput${cat.id}`}
                      className="sr-only peer"
                    />
                    <div className="w-3 h-3 bg-white border border-gray-300 rounded-full peer-checked:border-primary peer-checked:border-[3.5px]"></div>
                    <span className="text-[.7rem] ml-2 peer-checked:text-black peer-checked:font-medium">
                      {cat.name}
                    </span>
                  </label>
                ))}
              </ul>
            </div>
            <Separator className="w-full my-5 border-t border-gray-300" />
            <div className="">
              <h2 className="text-xs font-medium">PRICE TAG</h2>
              <div className="w-full">
                {/* <PriceSlider /> */}
                {/* Preset Price Options */}
                <ul className="price-options mt-2">
                  {prices.map((price, index) => (
                    <label
                      key={index}
                      htmlFor={`price-${index}`}
                      className="flex items-center text-gray-500 font-normal pb-2 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="price"
                        id={`price-${index}`}
                        className="sr-only peer"
                      />
                      <div className="w-3 h-3 bg-white border border-gray-300 rounded-full peer-checked:border-primary peer-checked:border-2"></div>
                      <span className="text-[.7rem] ml-2 peer-checked:text-black peer-checked:font-medium">
                        {price}
                      </span>
                    </label>
                  ))}
                </ul>
              </div>
            </div>
            <Separator className="w-full my-5 border-t border-gray-300" />
            <div>
              <h2 className="text-xs font-medium">POPULAR BRANDS</h2>
              <div>
                <ul className="w-full grid grid-cols-2 mt-2 mb-2 gap-2">
                  {popularBrands.map((pop, index) => (
                    <li key={index}>
                      <label
                        htmlFor={`popular-brand-${pop}`}
                        className=" flex items-center text-[.6rem] cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          name={`popular-brand-${pop}`}
                          id={`popular-brand-${pop}`}
                          className="sr-only peer"
                        />
                        <div className="w-3 h-3 bg-white border-gray rounded-xs border peer-checked:border-primary peer-checked:bg-primary mr-1 flex items-center justify-center">
                          <SingleCheckIcon className="text-white" />
                        </div>
                        {pop}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <Separator className="w-full my-5 border-t border-gray-300" />
            <div>
              <h2 className="text-xs font-medium">POPULAR TAGS</h2>
              <div>
                <ul className="flex flex-wrap gap-2 mt-2">
                  {popularTags.map((tag, index) => (
                    <li
                      key={index}
                      className="text-[.6rem] text-gray-700 border border-gray-50 px-2 py-1 hover:border-primary hover:text-primary hover:bg-primary-100 rounded-xs cursor-pointer"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="fixed bg-white bottom-0 left-1/2 transform -translate-x-1/2 px-[500px] py-2">
            <div className="flex items-center gap-10">
              <Button variant="outline" className="text-[.7rem] text-primary">
                Reset
              </Button>
              <Button className="text-white text-[.7rem]">Apply</Button>
            </div>
          </div>
        </div>
      </div>

      {/* main content */}
      <div className="bg-gray-50 max-w-[1400px]  py-3 mb-5 gap-4 px-4 md:px-20 w-full mx-auto">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <Link to="/" className="flex items-end text-gray text-[.7rem]">
                <HomeIcon className="text-gray w-3 mr-1" />
                Home
              </Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <ChevronRight absoluteStrokeWidth className="text-gray w-2" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <Link to="/shop" className="text-gray  text-[.7rem]">
                Shop
              </Link>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="flex px-4 md:px-20 w-full mx-auto max-w-[1400px] gap-4">
        <aside className="w-[30%] hidden md:block">
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
            <Separator className="w-full my-5 border-t border-gray-300" />
            <div className="">
              <h2 className="text-xs font-medium">PRICE TAG</h2>
              <div className="w-full">
                {/* <PriceSlider /> */}
                {/* Preset Price Options */}
                <ul className="price-options mt-2">
                  {prices.map((price, index) => (
                    <label
                      key={index}
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
            <Separator className="w-full my-5 border-t border-gray-300" />
            <div>
              <h2 className="text-xs font-medium">POPULAR BRANDS</h2>
              <div>
                <ul className="w-full grid grid-cols-2 mt-2 mb-2 gap-2">
                  {popularBrands.map((pop, index) => (
                    <li key={index}>
                      <label
                        htmlFor={`popular-brand-${pop}`}
                        className=" flex items-center text-[.6rem] cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          name={`popular-brand-${pop}`}
                          id={`popular-brand-${pop}`}
                          className="sr-only peer"
                        />
                        <div className="w-3 h-3 bg-white border-gray rounded-xs border peer-checked:border-primary peer-checked:bg-primary mr-1 flex items-center justify-center">
                          <SingleCheckIcon className="text-white" />
                        </div>
                        {pop}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <Separator className="w-full my-5 border-t border-gray-300" />
            <div>
              <h2 className="text-xs font-medium">POPULAR TAGS</h2>
              <div>
                <ul className="flex flex-wrap gap-2 mt-2">
                  {popularTags.map((tag, index) => (
                    <li
                      key={index}
                      className="text-[.6rem] text-gray-700 border border-gray-50 px-2 py-1 hover:border-primary hover:text-primary hover:bg-primary-100 rounded-xs cursor-pointer"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </aside>

        {/* main */}
        <main className="w-full">
          <div className="mb-3">
            <div className="flex items-center justify-between w-full">
              <Search />
              <div className="md:flex items-center hidden">
                <p className="mr-3 text-[.8rem]">Sort by:</p>
                <div>
                  <Select>
                    <SelectTrigger className="w-[180px] focus:outline-none ">
                      <SelectValue placeholder="Most Popular" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectItem value="light">Most Popular</SelectItem>
                      <SelectItem value="price-high">Prices: High</SelectItem>
                      <SelectItem value="price-low">Prices: Low</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between bg-gray-50 py-3 px-4 mt-4">
              <div className="md:flex hidden items-center text-[.8rem]">
                <p className="mr-1 text-gray ">Active Filters:</p>
                <p className="flex items-center ">
                  Electronic Devices <X size={15} className="text-gray ml-1" />
                </p>
              </div>
              <div className="ml-auto text-[.6rem] md:text-[.8rem] flex items-center">
                <p className="font-medium">{filteredProducts.length}</p>
                <span className="ml-2 font-normal text-gray">
                  {`${
                    filteredProducts.length === 1 ? "Result" : "Results"
                  }  found.`}
                </span>
              </div>
            </div>
          </div>
          <Suspense>
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4 w-full">
                {filteredProducts?.map((item: ProductTypes) => (
                  <ProductCard key={item.id} item={item} />
                ))}
              </div>
            ) : (
              <div className="flex items-center my-5  md:my-10 justify-center w-full flex-col">
                <h2 className="text-2xl font-bold">Sorry</h2>
                <p className="text-gray">No Products Found</p>
              </div>
            )}
          </Suspense>
        </main>
      </div>
    </section>
  );
};

export default ShopPage;
