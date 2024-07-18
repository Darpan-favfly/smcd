import dynamic from "next/dynamic";

const DefaultSection = dynamic(
  () => import("@/components/instagramgallery/InstagramSection"),
  { ssr: false }
);

const InstagramSection = ({ slice }) => {
  switch (slice.variation) {
    default:
      return <DefaultSection slice={slice} />;
  }
};

export default InstagramSection;
