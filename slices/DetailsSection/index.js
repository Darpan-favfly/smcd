import BlogDetailSection from "@/components/blog/BlogDetailSection";
// import DefaultSection from "@/components/details/DetailsSection";

const DetailsSection = ({ slice }) => {
  switch (slice.variation) {
    case "blog":
      return <BlogDetailSection slice={slice} />;
    default:
      // return <DefaultSection slice={slice} />;\
      return null;
  }
};

export default DetailsSection;
