import { PrismicRichText } from "@prismicio/react";

const PolicySection = ({ slice }) => {
  const { heading, description } = slice?.primary;
  return (
    <>
      <section className="text-center">
        <h2>{heading[0].text}</h2>
        <PrismicRichText field={description} />
      </section>
    </>
  );
};

export default PolicySection;
