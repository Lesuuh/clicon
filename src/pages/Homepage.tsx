import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Hero from "@/components/Homepage/Hero";
import BestDeals from "@/components/Homepage/BestDeals";
import Categories from "@/components/Homepage/Categories";
import FeaturedProducts from "@/components/Homepage/FeaturedProducts";
import { ScaleLoader } from "react-spinners";
import NotFound from "./NotFound";
import { ProductTypes } from "@/lib/types";
import CategoryComponent from "@/components/Homepage/CategoryComponent";
import JustLaunched from "@/components/Promotions/JustLaunched";
import ServiceHightlights from "@/components/Promotions/ServiceHighlights";

const fetchProducts = async (): Promise<ProductTypes[]> => {
  const { data } = await axios.get<ProductTypes[]>(
    "http://localhost:8000/products"
  );
  return data;
};

const Homepage = () => {
  const { data, isLoading, error } = useQuery<ProductTypes[]>({
    queryKey: ["users"], // Unique key for caching
    queryFn: fetchProducts,
  });

  console.log(data);

  if (isLoading) {
    return (
      <ScaleLoader
        color="text-primary"
        loading={isLoading}
        // cssOverride={override}
        height={15}
        width={5}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    );
  }

  if (error) {
    return <NotFound message={error.message} />;
  }

  return (
    <main className="px-4 md:px-20 w-full max-w-[1400px] mx-auto">
      {/* -------- hero section --------- */}
      <Hero />

      {/* HERO BANNER */}
      <ServiceHightlights />

      {/* -------------BEST DEALS -------------- */}
      <BestDeals />

      {/* --------------- CATEGORIES--------- */}
      <Categories />

      {/* -----------FEATURED PRODUCTS ---------- */}
      <FeaturedProducts />

      {/* -----------Just BANNER ------------ */}
      <JustLaunched />

      {/* category component */}
      <CategoryComponent />
    </main>
  );
};

export default Homepage;
