import DefaultSection from "@/components/tabbed/TabbedSection";

const TabbedSection = ({ slice }) => {
  switch (slice.variation) {
    default:
      return <DefaultSection slice={slice} />;
  }
};

export default TabbedSection;
