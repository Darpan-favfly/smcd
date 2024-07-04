import DefaultSection from "@/components/services/ServiceDetailsSection";
const PaginationSection = ({ slice }) => {
  switch (slice.variation) {
    default:
      return <DefaultSection slice={slice} />;
  }
};

export default PaginationSection;
