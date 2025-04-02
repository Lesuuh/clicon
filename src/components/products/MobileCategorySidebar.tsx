import { CategoriesTypes } from "@/lib/types";
import SingleCheckIcon from "../icons/SingleCheckIcon";
import { Separator } from "../ui/separator";
import { useQuery } from "@tanstack/react-query";
import { Button } from "../ui/button";
import { ArrowLeft } from "lucide-react";

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

interface MobileCategorySidebarProps {
  openFilter: boolean;
  setOpenFilter: (value: boolean) => void;
}

const MobileCategorySidebar = ({
  openFilter,
  setOpenFilter,
}: MobileCategorySidebarProps) => {
  const {
    data: categories,
    // isLoading: categoriesLoading,
    // error: categoriesError,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });
  return (
    <div
      className={` ${
        openFilter ? "fixed bottom-0 overflow-y-auto" : "hidden"
      }  py-5 bg-white top-0 left-0 px-5 z-40  `}
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
              {categories.map((cat: CategoriesTypes, index: number) => {
                const inputId = `radioInput${cat.id + index + 1}`;
                return (
                  <label
                    key={cat.id}
                    htmlFor={inputId}
                    className="flex items-center text-gray-500 font-normal pb-2 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="category"
                      id={inputId}
                      className="sr-only peer"
                    />
                    <div className="w-3 h-3 bg-white border border-gray-300 rounded-full peer-checked:border-primary peer-checked:border-[3.5px]"></div>
                    <span className="text-[.7rem] ml-2 peer-checked:text-black peer-checked:font-medium">
                      {cat.name}
                    </span>
                  </label>
                );
              })}
            </ul>
          </div>
          <Separator className="w-full my-5 border-t border-gray-300" />
          <div className="">
            <h2 className="text-xs font-medium">PRICE TAG</h2>
            <div className="w-full">
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
  );
};

export default MobileCategorySidebar;
