/**
 * @typedef {import("@prismicio/client").Content.CustomizeFormSectionSlice} CustomizeFormSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CustomizeFormSectionSlice>} CustomizeFormSectionProps
 * @param {CustomizeFormSectionProps}
 */
const CustomizeFormSection = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for customize_form_section (variation:{" "}
      {slice.variation}) Slices
    </section>
  );
};

export default CustomizeFormSection;
