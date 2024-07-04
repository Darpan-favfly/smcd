import CtaBlogSection from "@/components/cta/CtaBlogSection";
import DefaultSection from "@/components/cta/CtaSecton";
const CtaSection = ({ slice }) => {
  switch (slice.variation) {
    case "blog":
      return <CtaBlogSection slice={slice} />;
    default:
      return <DefaultSection slice={slice} />;
  }
};

export default CtaSection;
