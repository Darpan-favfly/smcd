import DefaultSection from "@/components/services/ServicesSection";

const ServicesSection = ({ slice }) => {
  switch (slice.variation) {
    default:
      return <DefaultSection slice={slice} />;
  }
};

export default ServicesSection;
