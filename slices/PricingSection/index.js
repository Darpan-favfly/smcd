import DefaultSection from "@/components/pricing/PricingSection";

const PricingSection = ({ slice }) => {
  switch (slice.variation) {
    default:
      return <DefaultSection slice={slice} />;
  }
};

export default PricingSection;
