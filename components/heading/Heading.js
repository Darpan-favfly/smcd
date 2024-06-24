import { PrismicRichText } from "@prismicio/react";

const Heading = ({ data }) => {
  const { subheading, heading, description } = data;

  return (
    <div className="row">
      <div className="col-xl-8 offset-xl-2 col-lg-8 offset-lg-2">
        <div className="section-title text-center mb-50">
          <span>{subheading?.[0]?.text}</span>
          <h2>{heading?.[0]?.text}</h2>
          <PrismicRichText field={description} />
        </div>
      </div>
    </div>
  );
};

export default Heading;
