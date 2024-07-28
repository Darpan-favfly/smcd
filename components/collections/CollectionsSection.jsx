import HeadingComponent from "../heading/HeadingComponent";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

const CollectionsSection = ({ slice }) => {
  const { heading, sub_heading, items } = slice?.primary;

  return (
    <>
      <section className="shop-collction container collections-section">
        <HeadingComponent
          data={{
            sub_heading: sub_heading[0].text,
            heading: heading[0].text,
          }}
        />

        <div className="row" style={{ rowGap: "16px" }}>
          {items.map((item, index) => (
            <CollectionItem key={index} data={item} />
          ))}
        </div>
      </section>
    </>
  );
};

const CollectionItem = ({ data }) => {
  const { button_link, image, button_label } = data;

  return (
    <div className="col-lg-3 col-6 px-2">
      <PrismicNextLink field={button_link} className="image-wrap">
        <PrismicNextImage className="h-auto" field={image} fallbackAlt="" />
        <h5>
          <span className="btn-link btn-link_md default-underline text-uppercase fw-medium">
            {button_label}
          </span>
        </h5>
      </PrismicNextLink>
    </div>
  );
};

export default CollectionsSection;
