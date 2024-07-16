import DefaultSection from "@/components/cta/CtaSection";
import OfferCtaSection from "@/components/cta/OfferCtaSection";
import BlogCtaSection from "@/components/cta/CtaBlogSection";
import CtaContactSection from "@/components/cta/CtaContactSection";

const CtaSection = ({ slice }) => {
  switch (slice.variation) {
    case "offer":
      return <OfferCtaSection slice={slice} />;
    case "blog":
      return <BlogCtaSection slice={slice} />;
    case "contact":
      return <CtaContactSection slice={slice} />;
    default:
      return <DefaultSection slice={slice} />;
  }
};

export default CtaSection;
