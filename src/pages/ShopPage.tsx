import ProductCard from "@/components/products/ProductCard";
import { ProductTypes } from "@/lib/types";

import { useQuery } from "@tanstack/react-query";

const fetchProducts = async () => {
  const response = await fetch("http://localhost:8000/products");
  const data = response.json();
  return data;
};

const ShopPage = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  if (error) {
    return <p>{error.message}</p>;
  }

  if (isLoading) {
    return <p>Loading Products</p>;
  }

  return (
    <div>
      <h1>Shop page</h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  border border-gray-200 w-full">
        {data?.map((item: ProductTypes) => (
          <ProductCard item={item} />
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
