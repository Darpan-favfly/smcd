import DefaultSection from "@/components/gallery/GallerySection";

const GallerySection = ({ slice }) => {
  switch (slice.variation) {
    default:
      return <DefaultSection slice={slice} />;
  }
};

export default GallerySection;
