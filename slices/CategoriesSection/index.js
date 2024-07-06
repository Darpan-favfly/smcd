/**
 * @typedef {import("@prismicio/client").Content.CategoriesSectionSlice} CategoriesSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CategoriesSectionSlice>} CategoriesSectionProps
 * @param {CategoriesSectionProps}
 */
const CategoriesSection = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for categories_section (variation: {slice.variation}
      ) Slices
    </section>
  );
};

export default CategoriesSection;
