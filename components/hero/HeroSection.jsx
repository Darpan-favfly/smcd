"use client";
import { PrismicNextImage } from "@prismicio/next";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Link from "next/link";

const HeroSection = ({ slice }) => {
  return (
    <section className="slideshow-md mt-4 mt-sm-0">
      <Splide
        options={{
          type: "fade",
          rewind: true,
          arrows: false,
          autoplay: true,
          pagination: false,
          pauseOnFocus: false,
          pauseOnHover: false,
          interval: 2000,
          speed: 2000,
          breakpoints: {
            678: {
              arrows: false,
            },
          },
        }}
      >
        {slice?.primary?.items.map((item, index) => (
          <SplideSlide key={index}>
            <HeroItem data={item} />
          </SplideSlide>
        ))}
      </Splide>
    </section>
  );
};

const HeroItem = ({ data }) => {
  const {
    image,
    sub_heading,
    heading,
    description,
    button_label,
    button_link,
  } = data;

  return (
    <>
      <div className="overflow-hidden position-relative h-100">
        <div className="slideshow-bg">
          <PrismicNextImage
            field={image}
            className="slideshow-bg__img object-fit-cover object-position-right"
            fallbackAlt={heading[0].text}
          />
        </div>
        <div
          className="slideshow-text position-absolute top-50 mx-lg-5 px-lg-5 w-100"
          style={{
            transform: "translateY(-50%)",
            right: 0,
          }}
        >
          <div className="container text-end d-flex flex-column align-items-end justify-content-center">
            <h6
              className="text_dash text-uppercase fw-medium"
              style={{
                width: "max-content",
              }}
            >
              {sub_heading}
            </h6>
            <h1 className="fw-normal mb-0">{heading[0].text}</h1>
            <p>{description[0].text}</p>
            <Link
              href={button_link.url}
              className="btn-link btn-link_sm default-underline text-uppercase fw-medium"
            >
              {button_label}
            </Link>
          </div>
        </div>
      </div>
      <style jsx>{`
        h6 {
          font-size: 20px;
        }
        h1 {
          font-size: 5.3rem;
        }
        p {
          font-size: 1.4rem;
        }

        .btn-link {
          font-size: 20px;
        }

        @media (max-width: 1599px) {
          h6 {
            font-size: 18px;
          }
          h1 {
            font-size: 4.5rem;
          }
          p {
            font-size: 1.3rem;
          }
          .btn-link {
            font-size: 18px;
          }
        }

        @media (max-width: 1199px) {
          h6 {
            font-size: 16px;
          }
          h1 {
            font-size: 4rem;
          }
          p {
            font-size: 1.2rem;
          }
          .btn-link {
            font-size: 16px;
          }
        }

        @media (max-width: 991px) {
          h6 {
            font-size: 14px;
          }
          h1 {
            font-size: 2.5rem;
          }
          p {
            display: none;
          }
          .btn-link {
            font-size: 14px;
          }
        }

        @media (max-width: 678px) {
          h6 {
            font-size: 12px !important;
          }
          h1 {
            font-size: 1.8rem;
          }
          p {
            display: none;
          }
          .btn-link {
            font-size: 12px;
          }
        }
      `}</style>
    </>
  );
};

export default HeroSection;
