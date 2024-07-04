import DefaultSection from "@/components/brands/BrandsSection";

const BlogsSection = ({ slice }) => {
  switch (slice.variation) {
    default:
      return <DefaultSection slice={slice} />;
  }
};

export default BlogsSection;
