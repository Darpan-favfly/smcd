import CategoriesSection from "@/components/category/CategoriesSection";
import FeaturesSection from "@/components/features/FeaturesSection";
import HeroSection from "@/components/hero/HeroSection";
import SliderProductsSection from "@/components/product/SliderProductsSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      {/* <SliderProductsSection /> */}
      <CategoriesSection />
      <FeaturesSection />
    </>
  );
};

export default Home;
