import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import Hero from "@/components/Homepage/Hero";
import BestDeals from "@/components/Homepage/BestDeals";
import Categories from "@/components/Homepage/Categories";
import HeroBanner from "@/components/Homepage/HeroBanner";
import FeaturedProducts from "@/components/Homepage/FeaturedProducts";
import { ScaleLoader } from "react-spinners";
import NotFound from "./NotFound";
import { UserTypes } from "@/lib/types";

const fetchProducts = async (): Promise<UserTypes[]> => {
  const { data } = await axios.get<UserTypes[]>("http://localhost:8000/users");
  return data;
};

const Homepage = () => {
  const { data, isLoading, error } = useQuery<UserTypes[]>({
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
      <HeroBanner />

      {/* -------------BEST DEALS -------------- */}
      <BestDeals />

      {/* --------------- CATEGORIES--------- */}
      <Categories />

      {/* -----------FEATURED PRODUCTS ---------- */}
      <FeaturedProducts />
    </main>
  );
};

export default Homepage;
