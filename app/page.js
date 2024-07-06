import BlogsSection from "@/components/blogs/BlogsSection";
import CategoriesSection from "@/components/category/CategoriesSection";
import CollectionsSection from "@/components/collections/CollectionsSection";
import CtaSection from "@/components/cta/CtaSection";
import OfferCtaSection from "@/components/cta/OfferCtaSection";
import FeaturesSection from "@/components/features/FeaturesSection";
import HeroSection from "@/components/hero/HeroSection";
import InstagramSection from "@/components/instagramgallery/InstagramSection";
import FeaturedProductSection from "@/components/product/FeaturedProductSection";
import SliderProductsSection from "@/components/product/SliderProductsSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      {/* <SliderProductsSection /> */}
      <CategoriesSection />
      <FeaturesSection />
      <OfferCtaSection />
      <FeaturedProductSection />
      <CollectionsSection />
      <CtaSection />
      <InstagramSection />
      <BlogsSection />
    </>
  );
};

export default Home;
