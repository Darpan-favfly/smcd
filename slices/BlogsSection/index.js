/**
 * @typedef {import("@prismicio/client").Content.BlogsSectionSlice} BlogsSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BlogsSectionSlice>} BlogsSectionProps
 * @param {BlogsSectionProps}
 */
const BlogsSection = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for blogs_section (variation: {slice.variation})
      Slices
    </section>
  );
};

export default BlogsSection;
