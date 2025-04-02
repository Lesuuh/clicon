import { ProductTypes } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import ClipLoaderSpinner from "@/components/icons/ClipLoaderSpinner";
import CategorySidebar from "@/components/products/CategorySidebar";
import BreadCrumbs from "@/components/products/BreadCrumbs";
import { useSearchParams } from "react-router";
import ProductsMainContent from "@/components/products/ProductsMainContent";
import MobileCategorySidebar from "@/components/products/MobileCategorySidebar";
import SortingDrawer from "@/components/products/SortingDrawer";
import FilteringButtons from "@/components/products/FilteringButtons";

// FETCHING PRODUCTS DATA
const fetchProducts = async () => {
  const response = await fetch("http://localhost:8000/products");
  const data = await response.json();
  return data;
};

interface FiltersProps {
  category: string;
  price: string;
  popularBrand: string[];
}

const ShopPage = () => {
  const {
    data: products,
    isLoading: productsLoading,
    error: productsError,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  // STATE FOR SORTING and filtering
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);

  // RENDERED STATE
  let filteredProducts = products || [];

  // URL PARAMS
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  console.log(query);

  // SEARCH FILTERING
  if (query) {
    const searchProducts = filteredProducts?.filter((item: ProductTypes) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    filteredProducts = searchProducts;
    console.log(filteredProducts, "filt");
  }

  // CATEGORY, PRICE AND  BRAND FILTER
  const [filters, setFilters] = useState<FiltersProps>({
    category: "",
    price: "",
    popularBrand: [],
  });

  console.log(filters);

  // get the selected category
  const handleRadioCategory = (filterName: string, value: string) => {
    setFilters((prevFilter) => ({ ...prevFilter, [filterName]: value }));
  };

  const handleRadioPrice = (filterName: string, value: string) => {
    setFilters((prevFilter) => ({ ...prevFilter, [filterName]: value }));
  };

  const handlePopularBrand = (brand: string, isChecked: boolean) => {
    setFilters((prevFilter) => {
      const updatedBrands = [...prevFilter.popularBrand];
      if (isChecked) {
        updatedBrands.push(brand);
      } else {
        const filteredBrands = updatedBrands.filter((b) => b !== brand);
        return { ...prevFilter, popularBrand: filteredBrands };
      }
      return { ...prevFilter, popularBrand: updatedBrands };
    });
  };

  // ERROR
  if (productsError) {
    return <p>{productsError?.message}</p>;
  }

  // LOADING
  if (productsLoading) {
    return (
      <p className="flex justify-center items-center h-screen w-full">
        <ClipLoaderSpinner />
      </p>
    );
  }

  return (
    <section className="my-10 relative">
      <SortingDrawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
      <FilteringButtons
        setOpenDrawer={setOpenDrawer}
        setOpenFilter={setOpenFilter}
      />

      <MobileCategorySidebar
        openFilter={openFilter}
        setOpenFilter={setOpenFilter}
      />

      <BreadCrumbs />
      <div className="flex px-4 md:px-20 w-full mx-auto max-w-[1400px] gap-4">
        <CategorySidebar
          handleRadioCategory={handleRadioCategory}
          handleRadioPrice={handleRadioPrice}
          handlePopularBrand={handlePopularBrand}
        />
        <ProductsMainContent filteredProducts={filteredProducts} />
      </div>
    </section>
  );
};

export default ShopPage;
