import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import HeadingComponent from "../heading/HeadingComponent";

const FeaturedProductSection = ({ slice }) => {
  const { heading, sub_heading, items } = slice?.primary;
  return (
    <>
      <section className="featured-products-section container">
        <HeadingComponent
          data={{
            heading: heading[0].text,
            sub_heading: sub_heading[0].text,
          }}
        />

        <div className="row" style={{ rowGap: 15 }}>
          {items.map((item, index) => (
            <FeatureProduct key={index} data={item} />
          ))}
        </div>
      </section>
    </>
  );
};

const FeatureProduct = ({ data }) => {
  const { image, link } = data;

  return (
    <div className="col-md-3 col-6 px-2">
      <PrismicNextLink field={link}>
        <PrismicNextImage field={image} fallbackAlt="" className="h-auto" />
      </PrismicNextLink>
    </div>
  );
};

export default FeaturedProductSection;
