import DefaultSection from "@/components/contact/ContactFormSection";

const ContactFormSection = ({ slice }) => {
  switch (slice.variation) {
    default:
      return <DefaultSection slice={slice} />;
  }
};

export default ContactFormSection;
