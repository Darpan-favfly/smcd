/**
 * @typedef {import("@prismicio/client").Content.NavMenuItemSlice} NavMenuItemSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<NavMenuItemSlice>} NavMenuItemProps
 * @param {NavMenuItemProps}
 */
const NavMenuItem = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for nav_menu_item (variation: {slice.variation})
      Slices
    </section>
  );
};

export default NavMenuItem;
