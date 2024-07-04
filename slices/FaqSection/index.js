import DefaultSection from "@/components/faq/FaqSection";
const CtaSection = ({ slice }) => {
  switch (slice.variation) {
    default:
      return <DefaultSection slice={slice} />;
  }
};

export default CtaSection;
