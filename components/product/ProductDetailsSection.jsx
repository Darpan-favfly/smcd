"use client";
import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import ShareSection from "../global/ShareSection";
import { PrismicRichText } from "@prismicio/react";
import { cad } from "@/lib/converter/priceConverter";
import { FiPhoneCall } from "react-icons/fi";
import ProductEnquiryModal from "./ProductEnquiryModal";
import { PrismicNextImage } from "@prismicio/next";

const ProductDetailsSection = ({ data }) => {
  const { title, description, image_items, price } = data;

  const [url, setUrl] = useState("");

  const color = [...new Set(image_items?.map((item) => item.color))];

  const shapes = [...new Set(image_items?.map((item) => item.shape))];

  // ===== INITIALIZE STATES =====
  const [showModal, setShowModal] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const [activeShape, setActiveShape] = useState(shapes[0]);
  const [activeColor, setActiveColor] = useState(color[0]);

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  const productData = `Query for: ${title[0].text} - Shape: ${activeShape}${activeColor && `, Color: ${activeColor}`}, Product Url: ${url}`;

  return (
    <>
      <section className="product-single container">
        <div
          className="row"
          style={{
            rowGap: "2rem",
          }}
        >
          <div className="col-xl-7">
            <ProductGallery
              image_items={image_items}
              activeShape={activeShape}
              activeColor={activeColor}
              activeImageIndex={activeImageIndex}
              setActiveImageIndex={setActiveImageIndex}
            />
          </div>
          <div className="col-xl-5">
            {/* // ===== PRODUCT DETAILS ===== */}
            <h1 className="product-single__name">{title[0].text}</h1>
            <div className="product-single__price mt-2">
              {/* // ===== PRICE ===== */}
              <span
                style={{
                  fontSize: "1rem",
                  fontWeight: "500",
                  color: "#333",
                  marginRight: ".5rem",
                }}
              >
                Starting at:
              </span>
              <span className="current-price">{cad(price)}</span>
            </div>
            <div className="product-single__short-desc">
              <PrismicRichText field={description} />
            </div>

            {/* // ===== PRODUCT OPTIONS ===== */}
            <ProductOptions
              activeColor={activeColor}
              setActiveColor={setActiveColor}
              activeShape={activeShape}
              setActiveShape={setActiveShape}
              color={color}
              diamondShapes={shapes}
            />

            <div className="product-single__addtocart">
              <button
                type="button"
                onClick={() => setShowModal(true)}
                className={`btn btn-primary btn-addtocart js-open-aside`}
                style={{
                  borderRadius: "15px",
                  transition: "all 0.3s",
                  gap: "0.8rem",
                }}
              >
                <i
                  style={{
                    fontSize: "1.2rem",
                    position: "relative",
                    top: "-2px",
                  }}
                >
                  <FiPhoneCall />
                </i>
                Request A Callback
              </button>
            </div>

            <ShareSection url={url} />
          </div>
        </div>
      </section>

      {/* // ===== PRODUCT ENQUIRY MODAL ===== */}
      <ProductEnquiryModal
        showModal={showModal}
        setShowModal={setShowModal}
        data={productData}
      />

      <style jsx>{`
        .product-single {
          margin-top: 4rem;
        }

        @media (max-width: 768px) {
          .product-single__addtocart .btn-addtocart {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
};

const ProductGallery = ({
  image_items,
  activeShape,
  activeColor,
  activeImageIndex,
  setActiveImageIndex,
}) => {
  return (
    <div
      className="row flex-column-reverse flex-xl-row"
      style={{
        rowGap: "1rem",
      }}
    >
      <div className="product-single__thumbnail col-xl-1 pe-0">
        <Splide
          options={{
            perPage: 5,
            rewind: true,
            gap: "1rem",
            direction: "ttb",
            height: "100%",
            arrows: false,
            breakpoints: {
              1200: {
                perPage: 4,
                direction: "ltr",
              },
            },
          }}
        >
          {image_items
            ?.filter(
              (item) => item.shape == activeShape && item.color == activeColor
            )
            .map((item, index) => (
              <SplideSlide key={index} className="h-auto">
                <div
                  className={`product-single__image-item cursor-pointer ${
                    activeImageIndex == index ? "active" : ""
                  }`}
                  onClick={() => setActiveImageIndex(index)}
                  style={{
                    borderRadius: "15px",
                    border: "1px solid #e5e5e5",
                    overflow: "hidden",
                    lineHeight: "0",
                    aspectRatio: "1/1",
                  }}
                >
                  {item.image?.url ? (
                    <PrismicNextImage field={item.image} className="h-auto" />
                  ) : (
                    <video src={item.video?.url} className="w-100 h-auto" />
                  )}
                </div>
              </SplideSlide>
            ))}
        </Splide>
      </div>
      <div className="col-xl-11">
        <div
          style={{
            borderRadius: "15px",
            border: "1px solid #e5e5e5",
            overflow: "hidden",
            lineHeight: "0",
            aspectRatio: "1/1",
          }}
        >
          {image_items?.filter(
            (item) => item.shape == activeShape && item.color == activeColor
          )[activeImageIndex]?.image?.url ? (
            <img
              src={image_items
                ?.filter(
                  (item) =>
                    item.shape == activeShape && item.color == activeColor
                )
                [
                  activeImageIndex
                ].image?.url.replace("auto=format%2Ccompress", "")}
              className="w-100 h-auto"
              alt=""
            />
          ) : (
            <video
              src={
                image_items?.filter(
                  (item) =>
                    item.shape == activeShape && item.color == activeColor
                )[activeImageIndex]?.video?.url
              }
              playsinline={true}
              autoPlay={true}
              loop={true}
              muted={true}
              className="w-100 h-auto"
              style={{
                lineHeight: "0px",
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

const ProductOptions = ({
  activeColor,
  setActiveColor,
  activeShape,
  setActiveShape,
  color,
  diamondShapes,
}) => {
  const shapes = [
    {
      name: "Asscher",
      img: "https://smcjewels.cdn.prismic.io/smcjewels/ZsHi2kaF0TcGJB8t_asscher.svg",
    },
    {
      name: "Heart",
      img: "https://smcjewels.cdn.prismic.io/smcjewels/ZsHi3EaF0TcGJB8w_heart.svg",
    },
    {
      name: "Round",
      img: "https://smcjewels.cdn.prismic.io/smcjewels/ZsHi4kaF0TcGJB82_round.svg",
    },
    {
      name: "Marquise",
      img: "https://smcjewels.cdn.prismic.io/smcjewels/ZsHi3UaF0TcGJB8x_marquise.svg",
    },
    {
      name: "Oval",
      img: "https://smcjewels.cdn.prismic.io/smcjewels/ZsHi3kaF0TcGJB8y_oval.svg",
    },
    {
      name: "Emerald",
      img: "https://smcjewels.cdn.prismic.io/smcjewels/ZsHi20aF0TcGJB8v_emerald.svg",
    },
    {
      name: "Pear",
      img: "https://smcjewels.cdn.prismic.io/smcjewels/ZsHi30aF0TcGJB8z_pear.svg",
    },
    {
      name: "Cushion",
      img: "https://smcjewels.cdn.prismic.io/smcjewels/ZsHi2kaF0TcGJB8u_cushion.svg",
    },
    {
      name: "Princess",
      img: "https://smcjewels.cdn.prismic.io/smcjewels/ZsHi4EaF0TcGJB80_princess.svg",
    },
    {
      name: "Radiant",
      img: "https://smcjewels.cdn.prismic.io/smcjewels/ZsHi4kaF0TcGJB81_radiant.svg",
    },
  ];

  const filterShapes = shapes.filter((shape) =>
    diamondShapes.includes(shape.name)
  );

  const colorCodes = [
    {
      name: "White Gold",
      code: "#C8C8C8",
    },
    {
      name: "Rose Gold",
      code: "#FFCFBC",
    },
    {
      name: "Yellow Gold",
      code: "#E0BE77",
    },
  ];

  return (
    <>
      <div className="product-single__options">
        {/* // ===== PRODUCT COLOR ===== */}
        <div className="product-single__option">
          <label>Color :</label>
          <div className="colors">
            {colorCodes.map((color, index) => (
              <div
                title={color.name}
                key={index}
                className={`color cursor-pointer`}
                style={{
                  backgroundColor: color.code,
                  border: activeColor == color ? "2px solid #333" : "",
                }}
                onClick={() => setActiveColor(color)}
              />
            ))}
          </div>
        </div>

        {/* // ===== PRODUCT SHAPE ===== */}
        <div className="product-single__option shape-container">
          <label>Shape :</label>

          <div className="shapes">
            {filterShapes.map((shape, index) => (
              <div
                key={index}
                className={`shape cursor-pointer ${
                  activeShape == shape.name ? "active" : ""
                }`}
                onClick={() => setActiveShape(shape.name)}
                title={shape.name}
              >
                <img
                  src={`${shape.img}?auto=format,compress&width=100&height=100`}
                  alt={shape.name}
                  className="h-100"
                />

                <span
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: "600",
                    color: "#333",
                  }}
                >
                  {shape.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .product-single__options {
          display: flex;
          gap: 1rem;
          flex-direction: column;
          margin-bottom: 2rem;
        }

        .product-single__option {
          display: flex;
          gap: 1rem;
          align-items: center;
        }

        .product-single__option.shape-container {
          flex-direction: column;
          align-items: flex-start;
        }
        .product-single__option label {
          font-weight: 600;
          color: #333;
          font-size: 1rem;
          flex-shrink: 0;
        }

        .shapes {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 1rem;
        }

        .shape {
          opacity: 0.5;
          border: 1px solid #2c2c2c;
          padding: 0.5rem;
          border-radius: 10px;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.3s;
          flex-direction: column;
        }

        .shape img {
          width: 60%;
          height: auto;
          object-fit: contain;
        }

        .shape.active {
          opacity: 1;
        }

        .colors {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .color {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.8rem;
          font-weight: 600;
          color: #333;
        }

        @media (max-width: 768px) {
          .shapes {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
    </>
  );
};

export default ProductDetailsSection;
