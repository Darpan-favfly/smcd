/**
 * @typedef {import("@prismicio/client").Content.LinkItemSlice} LinkItemSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<LinkItemSlice>} LinkItemProps
 * @param {LinkItemProps}
 */
const LinkItem = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for link_item (variation: {slice.variation}) Slices
    </section>
  );
};

export default LinkItem;
