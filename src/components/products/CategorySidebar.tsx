import { CategoriesTypes } from "@/lib/types";
import SingleCheckIcon from "../icons/SingleCheckIcon";
import { Separator } from "../ui/separator";
import ClipLoaderSpinner from "../icons/ClipLoaderSpinner";
import { useQuery } from "@tanstack/react-query";

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

const CategorySidebar = () => {
  const {
    data: categories,
    isLoading: categoriesLoading,
    error: categoriesError,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  const handleRadioCategory = (btn: string) => {
    console.log(btn, "was clicked");
  };

  const handleRadioPrice = (btn: string) => {
    console.log(btn, "price");
  };

  // ERROR
  if (categoriesError) {
    return <p>{categoriesError?.message}</p>;
  }

  // LOADING
  if (categoriesLoading) {
    return (
      <p className="flex justify-center items-center h-screen w-full">
        <ClipLoaderSpinner />
      </p>
    );
  }
  return (
    <aside className="w-[30%] hidden md:block">
      <div className="">
        <div>
          <h2 className="text-xs font-medium">CATEGORY</h2>
          <div className="mt-2">
            {categories.map((cat: CategoriesTypes) => {
              const inputId = `radioInput${cat.id}`;
              return (
                <label
                  key={cat.id}
                  htmlFor={inputId}
                  className="flex items-center text-gray-500 font-normal pb-2 cursor-pointer"
                  onClick={() => handleRadioCategory(cat.slug)}
                >
                  <input
                    type="radio"
                    name="category"
                    id={inputId}
                    className="sr-only peer"
                  />
                  <div className="w-3 h-3 bg-white border border-gray-300 rounded-full peer-checked:border-primary peer-checked:border-[3.5px] !important"></div>
                  <p className="text-[.7rem] ml-2 peer-checked:text-black peer-checked:font-medium">
                    {cat.name}
                  </p>
                </label>
              );
            })}
          </div>
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
                  onClick={() => handleRadioPrice()}
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
    </aside>
  );
};

export default CategorySidebar;
