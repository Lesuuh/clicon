import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { useQuery } from "@tanstack/react-query";
import NotFound from "@/pages/NotFound";
import { CategoriesTypes, ProductTypes } from "@/lib/types";
import { useEffect, useState } from "react";
import DiscountBanner from "../Promotions/DiscountBanner";

import ProductCard from "../products/ProductCard";
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

  const featuredProducts = products?.filter(
    (product) => product.featured === true
  );

  const [featuredProductsState, setFeaturedProductsState] = useState<
    ProductTypes[]
  >(featuredProducts || []);

  useEffect(() => {
    if (featuredProductsState.length === 0 && featuredProducts?.length) {
      setFeaturedProductsState(featuredProducts);
    }
  }, [featuredProducts, featuredProductsState]);

  // Handles all featured products
  const allFeaturedProducts = () => {
    setFeaturedProductsState(featuredProducts || []);
  };

  const filterBasedOnCategory = (category: CategoriesTypes) => {
    const filtered = products?.filter(
      (product) => product.category.id === category.id
    );
    setFeaturedProductsState(filtered || []);
  };

  const slicedCategories = categories?.slice(0, 4);

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
    <section className="px-4 md:px-20 max-w-[1400px] mx-auto my-10 flex flex-col md:flex-row  gap-4 items-start w-full">
      <DiscountBanner side="left" />
      <div className="w-full">
        <div className="flex  lg:items-start justify-between flex-col lg:flex-row w-full mb-3">
          <p className="text-base font-medium text-left w-full lg:w-[30%]">
            Featured Products
          </p>
          {/* navigations */}
          <div className="flex w-full justify-between lg:justify-end">
            <ul className="flex items-center flex-wrap gap-2  lg:mr-5">
              <p
                className="text-[.6rem] text-gray cursor-pointer px-1 rounded-sm hover:text-primary"
                onClick={() => allFeaturedProducts()}
              >
                All Products
              </p>
              {slicedCategories?.map((item) => (
                <li
                  key={item.id}
                  className="text-[.6rem] text-gray cursor-pointer px-1 rounded-sm hover:text-primary"
                  onClick={() => filterBasedOnCategory(item)}
                >
                  {item.name}
                </li>
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
          <div className="grid grid-cols-2  md:grid-cols-2 lg:grid-cols-4  border border-gray-200 w-full">
            {featuredProductsState?.map((item: ProductTypes) => (
              <Link to={`/products/${item.id}`} key={item.id}>
                <ProductCard item={item} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
