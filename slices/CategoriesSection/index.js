import DefaultSection from "@/components/category/CategoriesSection";

const CategoriesSection = ({ slice }) => {
  switch (slice.variation) {
    default:
      return <DefaultSection slice={slice} />;
  }
};

export default CategoriesSection;
