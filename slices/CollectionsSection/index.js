import DefaultSection from "@/components/collections/CollectionsSection";

const CollectionsSection = ({ slice }) => {
  switch (slice.variation) {
    default:
      return <DefaultSection slice={slice} />;
  }
};

export default CollectionsSection;
