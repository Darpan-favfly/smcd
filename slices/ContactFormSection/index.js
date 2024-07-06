/**
 * @typedef {import("@prismicio/client").Content.ContactFormSectionSlice} ContactFormSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ContactFormSectionSlice>} ContactFormSectionProps
 * @param {ContactFormSectionProps}
 */
const ContactFormSection = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for contact_form_section (variation:{" "}
      {slice.variation}) Slices
    </section>
  );
};

export default ContactFormSection;
