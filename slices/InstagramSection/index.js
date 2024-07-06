/**
 * @typedef {import("@prismicio/client").Content.InstagramSectionSlice} InstagramSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<InstagramSectionSlice>} InstagramSectionProps
 * @param {InstagramSectionProps}
 */
const InstagramSection = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for instagram_section (variation: {slice.variation})
      Slices
    </section>
  );
};

export default InstagramSection;
