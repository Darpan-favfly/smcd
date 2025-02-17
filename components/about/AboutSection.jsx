"use client";
import { PrismicRichText } from "@prismicio/react";
import HeadingComponent from "../heading/HeadingComponent";
import { PrismicNextImage } from "@prismicio/next";

const AboutSection = ({ slice }) => {
  const { heading, sub_heading, items } = slice?.primary;

  return (
    <>
      <section className="container mb-100">
        <HeadingComponent
          data={{
            heading: heading[0].text,
            sub_heading: sub_heading[0].text,
          }}
        />
        <div className="d-flex flex-column mt-5 about-gap">
          {items.map((item, index) => (
            <AboutItem key={index} data={item} swap={index % 2 === 0} />
          ))}
        </div>
      </section>

      <style jsx>{`
        .about-gap {
          gap: 50px;
        }

        @media (max-width: 992px) {
          .about-gap {
            gap: 30px;
          }
        }
      `}</style>
    </>
  );
};

const AboutItem = ({ data, swap }) => {
  return (
    <>
      <div className={`row ${swap && "swap-about"} `}>
        <div className={`col-lg-6 ${swap ? "ps-lg-0" : "pe-lg-0"}`}>
          <div
            className="special-block-wrapper"
            style={{
              backgroundColor: "rgb(28, 99, 146)",
              display: "flex",
              alignItems: "center",
              height: "100%",
            }}
          >
            <div>
              <h3 className="special-block under-bar-white">
                {data.title[0].text}
              </h3>
              <PrismicRichText field={data.description} />
            </div>
          </div>
        </div>
        <div
          className={`col-lg-6 ${swap ? "pe-lg-0" : "ps-lg-0"} special-block-img-left flex-center d-flex`}
        >
          <PrismicNextImage
            className="img-responsive w-100 h-auto"
            field={data.image}
          />
        </div>
      </div>

      <style jsx>{`
        .swap-about {
          flex-direction: row-reverse;
        }
      `}</style>
    </>
  );
};
export default AboutSection;
