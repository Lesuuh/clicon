// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
import Hero from "@/components/Homepage/Hero";
import BestDeals from "@/components/Homepage/BestDeals";
import Categories from "@/components/Homepage/Categories";
import FeaturedProducts from "@/components/Homepage/FeaturedProducts";
// import { ScaleLoader } from "react-spinners";
// import NotFound from "./NotFound";
// import { ProductTypes } from "@/lib/types";
import CategoryComponent from "@/components/Homepage/CategoryComponent";
import JustLaunched from "@/components/Promotions/JustLaunched";
import ServiceHightlights from "@/components/Promotions/ServiceHighlights";
import SpotLightDeal from "@/components/Promotions/SpotLightDeal";
import LatestNews from "@/components/Homepage/LatestNews";
import Newsletter from "@/components/Homepage/Newsletter";

// const fetchProducts = async (): Promise<ProductTypes[]> => {
//   const { data } = await axios.get<ProductTypes[]>(
//     "http://localhost:8000/products"
//   );
//   return data;
// };

const Homepage = () => {
  // const { data, isLoading, error } = useQuery<ProductTypes[]>({
  //   queryKey: ["users"], // Unique key for caching
  //   queryFn: fetchProducts,
  // });

  // console.log(data);

  // if (isLoading) {
  //   return (
  //     <ScaleLoader
  //       color="text-primary"
  //       loading={isLoading}
  //       // cssOverride={override}
  //       height={15}
  //       width={5}
  //       aria-label="Loading Spinner"
  //       data-testid="loader"
  //     />
  //   );
  // }

  // if (error) {
  //   return <NotFound message={error.message} />;
  // }

  return (
    <main>
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

      {/* spotlight deal */}
      <SpotLightDeal />

      {/* ------------latest news-------------- */}
      <LatestNews />

      {/* --------- News Letters ----------- */}
      <Newsletter />
    </main>
  );
};

export default Homepage;
