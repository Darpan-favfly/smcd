import DefaultSection from "@/components/instagramgallery/InstagramSection";

const InstagramSection = ({ slice }) => {
  switch (slice.variation) {
    default:
      return <DefaultSection slice={slice} />;
  }
};

export default InstagramSection;
