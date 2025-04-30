import { ProductTypes } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import ClipLoaderSpinner from "@/components/icons/ClipLoaderSpinner";
import CategorySidebar from "@/components/products/CategorySidebar";
import BreadCrumbs from "@/components/products/BreadCrumbs";
import { useSearchParams } from "react-router";
import ProductsMainContent from "@/components/products/ProductsMainContent";
import MobileCategorySidebar from "@/components/products/MobileCategorySidebar";
import SortingDrawer from "@/components/products/SortingDrawer";
import FilteringButtons from "@/components/products/FilteringButtons";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/services/firebase";

// FETCHING PRODUCTS DATA
const fetchProducts = async () => {
  const productsCol = collection(db, "Products");
  const productSnapshot = await getDocs(productsCol);

  const productList = productSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return productList;
};

interface FiltersProps {
  category: string;
  price: { min: number | null; max: number | null };
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

  console.log(products);

  // STATE FOR SORTING and filtering
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);

  // RENDERED STATE
  // let filteredProducts = products || [];
  const [filteredProducts, setFilteredProducts] = useState(products || []);

  // URL PARAMS
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  // SEARCH FILTERING
  useEffect(() => {
    if (query) {
      const searchProducts = (products || []).filter((item: ProductTypes) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(searchProducts);
    } else {
      setFilteredProducts(products || []);
    }
  }, [query, products]);

  // CATEGORY, PRICE AND  BRAND FILTER
  const [filters, setFilters] = useState<FiltersProps>({
    category: "",
    price: { min: null, max: null },
    popularBrand: [],
  });

  console.log(filters);

  // get the selected category
  const handleRadioCategory = (filterName: string, value: string) => {
    console.log(filterName, value);
    setFilters((prevFilter) => ({ ...prevFilter, [filterName]: value }));
  };

  const handleRadioPrice = (
    filterName: string,
    { min, max }: { min: number; max: number }
  ) => {
    setFilters((prevFilter) => ({
      ...prevFilter,
      [filterName]: { min, max },
    }));

    console.log(filterName, { min, max });
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

  // if(filters.price ==)

  // filter the products
  useEffect(() => {
    let updatedProducts = products || [];

    if (filters.category) {
      updatedProducts = updatedProducts.filter(
        (product: ProductTypes) =>
          product.category.name.toLowerCase() === filters.category.toLowerCase()
      );
    }
    if (filters.price) {
      const { min, max } = filters.price;

      updatedProducts = updatedProducts.filter(
        (product: ProductTypes) =>
          (min === null || product.price >= min) &&
          (max === null || product.price <= max)
      );
    }
    if (filters.popularBrand.length > 0) {
      updatedProducts = updatedProducts.filter((product: ProductTypes) =>
        filters.popularBrand.some(
          (brand) => brand.toLowerCase() === product.brand.toLowerCase()
        )
      );
    }

    setFilteredProducts(updatedProducts);
  }, [filters, products]);

  // sorting
  const [sortBy, setSortBy] = useState("most-popular");
  console.log(sortBy);

  useEffect(() => {
    if (!products) return;
    let sortedProducts = [...products];
    if (sortBy === "most-popular") {
      sortedProducts = sortedProducts?.sort(
        (a: ProductTypes, b: ProductTypes) => b.rating - a.rating
      );
    }
    if (sortBy === "price-high") {
      sortedProducts = sortedProducts?.sort(
        (a: ProductTypes, b: ProductTypes) => b.price - a.price
      );
    }
    if (sortBy === "price-low") {
      sortedProducts = sortedProducts?.sort(
        (a: ProductTypes, b: ProductTypes) => a.price - b.price
      );
    }

    setFilteredProducts(sortedProducts);
  }, [sortBy, products]);

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
        <ProductsMainContent
          filteredProducts={filteredProducts}
          setSortBy={setSortBy}
        />
      </div>
    </section>
  );
};

export default ShopPage;
