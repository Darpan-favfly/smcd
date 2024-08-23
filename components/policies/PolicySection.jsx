import { PrismicRichText } from "@prismicio/react";

const PolicySection = ({ slice }) => {
  const { heading, description } = slice?.primary;
  return (
    <>
      <section className="container">
        <div className="col-lg-8 mx-auto policy-section">
          <h2>{heading[0].text}</h2>
          <PrismicRichText field={description} />
        </div>
      </section>
    </>
  );
};

export default PolicySection;
