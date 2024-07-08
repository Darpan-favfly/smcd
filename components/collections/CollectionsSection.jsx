import Link from "next/link";
import HeadingComponent from "../heading/HeadingComponent";
import { PrismicNextImage } from "@prismicio/next";

const CollectionsSection = ({ slice }) => {
  const { heading, sub_heading, items } = slice?.primary;

  return (
    <>
      <section className="shop-collction">
        <HeadingComponent
          data={{
            heading: "Shop By Collection",
            sub_heading: "Explore Now!",
          }}
        />

        <div className="container">
          <div className="row">
            {items.map((item, index) => (
              <div className="col-lg-3 col-6" key={index}>
                <Link href={item.button_link.url} className="image-wrap">
                  <PrismicNextImage
                    className="h-auto"
                    field={item.image}
                    alt={item.image.alt}
                  />
                  <h5>
                    <span className="btn-link btn-link_md default-underline text-uppercase fw-medium">
                      {item.button_label}
                    </span>
                  </h5>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CollectionsSection;
