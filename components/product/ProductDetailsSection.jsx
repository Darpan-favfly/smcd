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
  const { title, description, image_items, sizes, price_items } = data;

  const [url, setUrl] = useState("");

  const color = [...new Set(image_items?.map((item) => item.color))];
  const carat = [...new Set(price_items?.map((item) => item.carat))];

  // ===== INITIALIZE STATES =====
  const [showModal, setShowModal] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeShape, setActiveShape] = useState(
    [...new Set(image_items?.map((item) => item.shape))][0]
  );
  const [activeColor, setActiveColor] = useState(color[0]);
  const [activeCarat, setActiveCarat] = useState(carat[0]);
  const [activeSize, setActiveSize] = useState(sizes[0].number);

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  const productData = `Query for: ${title[0].text} - Shape: ${activeShape}, Color: ${activeColor}, Carat: ${activeCarat}, Size: ${activeSize}, Product Url: ${url}`;

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
              <span className="current-price">
                {cad(
                  price_items?.filter((item) => item.carat == activeCarat)[0]
                    .price
                )}
              </span>
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
              activeSize={activeSize}
              setActiveSize={setActiveSize}
              activeCarat={activeCarat}
              setActiveCarat={setActiveCarat}
              carat={carat}
              color={color}
              sizes={sizes?.map((size) => size.number)}
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
  // activeSize,
  setActiveSize,
  color,
  sizes,
  activeCarat,
  setActiveCarat,
  carat,
}) => {
  const shapes = [
    {
      name: "Round",
      img: "https://images.prismic.io/smcjewels/ZsAiBEaF0TcGJBDb_4339b675dbe739662e3331f2743d51b567c3e121745f370a7949484d50f7c798.png",
    },
    {
      name: "Oval",
      img: "https://images.prismic.io/smcjewels/ZsAiKUaF0TcGJBDc_e2c01039861c211b17113a8670a97d0d0264d8f788722e302f18c07705f38781.png",
    },
    {
      name: "Emerald",
      img: "https://images.prismic.io/smcjewels/ZsAiMUaF0TcGJBDd_dc10549706828e37304f3465b4791954c31d5eb81ff0ced95d2f2ecfc92ab841.png",
    },
    {
      name: "Pear",
      img: "https://images.prismic.io/smcjewels/ZsAjk0aF0TcGJBDf_e3a5cfc3755418433392fb9a3b1c2eec01046aaadbcf9c501dc9e7baf79d086f.png",
    },
    {
      name: "Cushion",
      img: "https://images.prismic.io/smcjewels/ZsAjmkaF0TcGJBDg_745ed9f5d566f17f75f01c131203174a58877752381d1b4be4d618973250d60c.png",
    },
    {
      name: "Princess",
      img: "https://images.prismic.io/smcjewels/ZsAjwUaF0TcGJBDj_8450da4b1d7481c873fe9f81e8df82d17ccb8fde38bd578260d8bfc3d332c0f6.png",
    },
  ];

  const colorCodes = ["#C8C8C8", "#FFCFBC", "#E0BE77"];

  return (
    <>
      <div className="product-single__options">
        {/* // ===== PRODUCT COLOR ===== */}
        <div className="product-single__option">
          <label>Color :</label>
          <div className="colors">
            {color.map((color, index) => (
              <div
                title={color}
                key={index}
                className={`color cursor-pointer`}
                style={{
                  backgroundColor: colorCodes[index],
                  border: activeColor == color ? "2px solid #333" : "",
                }}
                onClick={() => setActiveColor(color)}
              />
            ))}
          </div>
        </div>

        {/* // ===== PRODUCT SIZE ===== */}
        <div className="product-single__option">
          <label>Size :</label>
          <select onChange={(e) => setActiveSize(e.target.value)}>
            {sizes.map((size, index) => (
              <option key={index}>{size}</option>
            ))}
          </select>
        </div>

        {/* // ===== PRODUCT CARAT ===== */}
        <div className="product-single__option">
          <label>Carat :</label>
          <select onChange={(e) => setActiveCarat(e.target.value)}>
            {carat.map((carat, index) => (
              <option key={index}>{carat}</option>
            ))}
          </select>
        </div>

        {/* // ===== PRODUCT SHAPE ===== */}
        <div className="product-single__option">
          <label>Shape :</label>

          <div className="shapes">
            {shapes.map((shape, index) => (
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
        }

        .product-single__option label {
          font-weight: 600;
          color: #333;
          font-size: 1rem;
          flex-shrink: 0;
        }

        .shapes {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .shape {
          width: auto;
          height: 50px;
          opacity: 0.5;
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
      `}</style>
    </>
  );
};

export default ProductDetailsSection;
