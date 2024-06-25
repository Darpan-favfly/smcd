import BlogsSection from "@/components/blogs/BlogsSection";
import CategoriesSection from "@/components/category/CategoriesSection";
import CollectionSection from "@/components/collection/CollectionSection";
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
      <CollectionSection />
      <CtaSection />
      <InstagramSection />
      <BlogsSection />
    </>
  );
};

export default Home;
