/**
 * @typedef {import("@prismicio/client").Content.CollectionsSectionSlice} CollectionsSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CollectionsSectionSlice>} CollectionsSectionProps
 * @param {CollectionsSectionProps}
 */
const CollectionsSection = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for collections_section (variation:{" "}
      {slice.variation}) Slices
    </section>
  );
};

export default CollectionsSection;
