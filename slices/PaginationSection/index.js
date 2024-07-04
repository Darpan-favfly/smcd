import DefaultSection from "@/components/global/Pagination";
const PaginationSection = ({ slice }) => {
  switch (slice.variation) {
    default:
      return <DefaultSection slice={slice} />;
  }
};

export default PaginationSection;
