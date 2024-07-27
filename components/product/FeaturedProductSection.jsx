import { PrismicNextImage } from "@prismicio/next";
import HeadingComponent from "../heading/HeadingComponent";
import Link from "next/link";

const FeaturedProductSection = ({ slice }) => {
  const { heading, sub_heading, items } = slice?.primary;
  return (
    <>
      <section className="featured-products-section">
        <HeadingComponent
          data={{
            heading: heading[0].text,
            sub_heading: sub_heading[0].text,
          }}
        />
        <div className="container">
          <div className="row" style={{ rowGap: 15 }}>
            {items.map((item, index) => (
              <div className="col-lg-3 col-6" key={index}>
                <Link href={item ? item.link.url : "/"}>
                  <PrismicNextImage
                    field={item.image}
                    alt={item.image.alt}
                    className="h-auto"
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedProductSection;
