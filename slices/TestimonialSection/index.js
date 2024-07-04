import DefaultSection from "@/components/testimonial/TestimonialSection";

const ServicesSection = ({ slice }) => {
  switch (slice.variation) {
    default:
      return <DefaultSection slice={slice} />;
  }
};

export default ServicesSection;
