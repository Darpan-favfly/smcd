import BlogHeroSection from "@/components/blog/BlogHeroSection";
import DefaultSection from "@/components/category/CategoriesSection";
import SecondaryHeroSection from "@/components/hero/SecondaryHeroSection";

const CategoriesSection = ({ slice }) => {
  switch (slice.variation) {
    default:
      return <DefaultSection slice={slice} />;
  }
};

export default CategoriesSection;
