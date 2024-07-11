import DefaultSection from "@/components/policies/PolicySection";

const PolicySection = ({ slice }) => {
  switch (slice.variation) {
    default:
      return <DefaultSection slice={slice} />;
  }
};

export default PolicySection;
