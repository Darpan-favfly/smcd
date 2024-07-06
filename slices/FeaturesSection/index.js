/**
 * @typedef {import("@prismicio/client").Content.FeaturesSectionSlice} FeaturesSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FeaturesSectionSlice>} FeaturesSectionProps
 * @param {FeaturesSectionProps}
 */
const FeaturesSection = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for features_section (variation: {slice.variation})
      Slices
    </section>
  );
};

export default FeaturesSection;
