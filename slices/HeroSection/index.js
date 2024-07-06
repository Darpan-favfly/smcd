import BlogHeroSection from "@/components/blog/BlogHeroSection";
import DefaultSection from "@/components/hero/HeroSection";
import SecondaryHeroSection from "@/components/hero/SecondaryHeroSection";

const HeroSection = ({ slice }) => {
  switch (slice.variation) {
    case "secondary":
      return <SecondaryHeroSection slice={slice} />;
    case "blog":
      return <BlogHeroSection slice={slice} />;
    default:
      return <DefaultSection slice={slice} />;
  }
};

export default HeroSection;
