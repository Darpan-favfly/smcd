import DefaultSection from "@/components/Faq/FaqSection";

const FaqSection = ({ slice }) => {
  switch (slice.variation) {
    default:
      return <DefaultSection slice={slice} />;
  }
};

export default FaqSection;
