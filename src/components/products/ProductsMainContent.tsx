import { X } from "lucide-react";
import Search from "../Search";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Suspense } from "react";
import { ProductTypes } from "@/lib/types";
import ProductCard from "./ProductCard";

const ProductsMainContent = ({
  filteredProducts,
  setSortBy,
}: {
  filteredProducts: ProductTypes[];
  setSortBy: (value: string) => void;
}) => {
  return (
    <main className="w-full">
      <div className="mb-3">
        <div className="flex items-center justify-between w-full">
          <Search />
          <div className="md:flex items-center hidden">
            <p className="mr-3 text-[.8rem]">Sort by:</p>
            <div>
              <Select onValueChange={(value) => setSortBy(value)}>
                <SelectTrigger className="w-[180px] focus:outline-none ">
                  <SelectValue placeholder="Most Popular" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="most-popular">Most Popular</SelectItem>
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
            <p className="font-medium">{filteredProducts?.length}</p>
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
  );
};

export default ProductsMainContent;
