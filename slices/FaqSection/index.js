/**
 * @typedef {import("@prismicio/client").Content.FaqSectionSlice} FaqSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FaqSectionSlice>} FaqSectionProps
 * @param {FaqSectionProps}
 */
const FaqSection = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for faq_section (variation: {slice.variation})
      Slices
    </section>
  );
};

export default FaqSection;
