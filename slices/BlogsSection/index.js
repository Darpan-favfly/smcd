import DefaultSection from "@/components/blogs/BlogsSection";

const BlogsSection = ({ slice }) => {
  switch (slice.variation) {
    default:
      return <DefaultSection slice={slice} />;
  }
};

export default BlogsSection;
