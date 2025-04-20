import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { useQuery } from "@tanstack/react-query";
import NotFound from "@/pages/NotFound";
import { ProductTypes } from "@/lib/types";
import DealOfTheDay from "../Promotions/DealOfTheDay";
import ClipLoaderSpinner from "../icons/ClipLoaderSpinner";
import ProductCard from "../products/ProductCard";

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
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4  border border-gray-200">
          {data?.map((item: ProductTypes) => (
            <Link to={`/products/${item.id}`} key={item.id}>
              <ProductCard item={item} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestDeals;
