/**
 * @typedef {import("@prismicio/client").Content.BlogDetailsSectionSlice} BlogDetailsSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BlogDetailsSectionSlice>} BlogDetailsSectionProps
 * @param {BlogDetailsSectionProps}
 */
const BlogDetailsSection = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for blog_details_section (variation:{" "}
      {slice.variation}) Slices
    </section>
  );
};

export default BlogDetailsSection;
