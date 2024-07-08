"use client";
import { PrismicNextImage } from "@prismicio/next";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Link from "next/link";

const HeroSection = ({ slice }) => {
  return (
    <section className="slideshow-md pt-0">
      <Splide
        options={{
          breakpoints: {
            678: {
              arrows: false,
            },
          },
        }}
      >
        {slice?.primary?.items.map((item, index) => {
          return (
            <SplideSlide key={index}>
              <HeroItem data={item} />
            </SplideSlide>
          );
        })}
      </Splide>
    </section>
  );
};

const HeroItem = ({ data }) => {
  return (
    <>
      <div className="overflow-hidden position-relative h-100">
        <div className="slideshow-bg">
          <PrismicNextImage
            field={data.image}
            className="slideshow-bg__img object-fit-cover object-position-right"
            alt={data.image.alt}
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
              {data.heading[0].text}
            </h6>
            <h1 className="fw-normal mb-0">Newest Arrivals</h1>
            <p>{data.description[0].text}</p>
            <Link
              href={data.button_link.url}
              className="btn-link btn-link_sm default-underline text-uppercase fw-medium"
            >
              {data.button_label}
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
