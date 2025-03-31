import Hero from "@/components/Homepage/Hero";
import BestDeals from "@/components/Homepage/BestDeals";
import Categories from "@/components/Homepage/Categories";
import FeaturedProducts from "@/components/Homepage/FeaturedProducts";
import CategoryComponent from "@/components/Homepage/CategoryComponent";
import JustLaunched from "@/components/Promotions/JustLaunched";
import ServiceHightlights from "@/components/Promotions/ServiceHighlights";
import SpotLightDeal from "@/components/Promotions/SpotLightDeal";
import LatestNews from "@/components/Homepage/LatestNews";
import Newsletter from "@/components/Homepage/Newsletter";

const Homepage = () => {
  return (
    <main>
      <Hero />
      <ServiceHightlights />
      <BestDeals />
      <Categories />
      <FeaturedProducts />
      <JustLaunched />
      <CategoryComponent />
      <SpotLightDeal />
      <LatestNews />
      <Newsletter />
    </main>
  );
};

export default Homepage;
