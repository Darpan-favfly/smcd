/**
 * @typedef {import("@prismicio/client").Content.FeaturedProductsSectionSlice} FeaturedProductsSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FeaturedProductsSectionSlice>} FeaturedProductsSectionProps
 * @param {FeaturedProductsSectionProps}
 */
const FeaturedProductsSection = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for featured_products_section (variation:{" "}
      {slice.variation}) Slices
    </section>
  );
};

export default FeaturedProductsSection;
