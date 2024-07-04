import DefaultSection from "@/components/cta/CtaFormSection";
const CtaFormSection = ({ slice }) => {
  switch (slice.variation) {
    default:
      return <DefaultSection slice={slice} />;
  }
};

export default CtaFormSection;
