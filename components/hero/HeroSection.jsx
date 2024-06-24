"use client";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const HeroSection = () => {
  return (
    <section className="slideshow-md">
      <Splide
        options={{
          breakpoints: {
            678: {
              arrows: false,
            },
          },
        }}
      >
        {[1, 2, 3].map((_, i) => {
          return (
            <SplideSlide key={i}>
              <HeroItem />
            </SplideSlide>
          );
        })}
      </Splide>
    </section>
  );
};

const HeroItem = () => {
  return (
    <>
      <div className="overflow-hidden position-relative h-100">
        <div className="slideshow-bg">
          <img
            loading="lazy"
            src="https://moissani.in/assets/uploads/2023/02/diamond-ring-1.webp"
            width={1600}
            height={600}
            alt
            className="slideshow-bg__img object-fit-cover object-position-right"
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
              LATEST TRENDS
            </h6>
            <h2 className="fw-normal mb-0">Newest Arrivals</h2>
            <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            <a
              href="./shop1.html"
              className="btn-link btn-link_sm default-underline text-uppercase fw-medium"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>
      <style jsx>{`
        h6 {
          font-size: 20px;
        }
        h2 {
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
          h2 {
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
          h2 {
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
          h2 {
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
          h2 {
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
