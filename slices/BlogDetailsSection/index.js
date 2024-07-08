import DefaultSection from "@/components/blog/BlogDetailsSection";

const BlogDetailsSection = ({ slice }) => {
  switch (slice.variation) {
    default:
      return <DefaultSection slice={slice} />;
  }
};

export default BlogDetailsSection;
