import DefaultSection from "@/components/customize/CustomizeFormSection";

const CustomizeFormSection = ({ slice }) => {
  switch (slice.variation) {
    default:
      return <DefaultSection slice={slice} />;
  }
};

export default CustomizeFormSection;
