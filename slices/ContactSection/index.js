import DefaultSection from "@/components/contact/ContactSection";

const BlogsSection = ({ slice }) => {
  switch (slice.variation) {
    default:
      return <DefaultSection slice={slice} />;
  }
};

export default BlogsSection;
