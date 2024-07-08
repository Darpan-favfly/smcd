import DefaultSection from "@/components/product/FeaturedProductSection";

const FeaturedProductsSection = ({ slice }) => {
  switch (slice.variation) {
    default:
      return <DefaultSection slice={slice} />;
  }
};

export default FeaturedProductsSection;
