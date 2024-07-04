import DefaultSection from "@/components/features/FeaturesSection";

const FeaturesSection = ({ slice }) => {
  switch (slice.variation) {
    default:
      return <DefaultSection slice={slice} />;
  }
};

export default FeaturesSection;
