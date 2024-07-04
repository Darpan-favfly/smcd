import DefaultSection from "@/components/about/AboutSection";
import WhyChooseUsSection from "@/components/whychooseus/WhyChooseUsSection";

const AboutSection = ({ slice }) => {
  switch (slice.variation) {
    case "whyUs":
      return <WhyChooseUsSection slice={slice} />;
    default:
      return <DefaultSection slice={slice} />;
  }
};

export default AboutSection;
