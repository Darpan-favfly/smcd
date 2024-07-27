"use client";
import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { cartStore } from "@/storage/cartStore";
import { toast } from "react-hot-toast";
import ShareSection from "../global/ShareSection";
import { PrismicRichText } from "@prismicio/react";
import { cad } from "@/lib/converter/priceConverter";
// import { FiMinus, FiPlus } from "react-icons/fi";

const ProductDetailsSection = ({ data }) => {
  // ===== INITIALIZING STORES =====
  const { addToCartItem } = cartStore();

  const { id, uid, title, description, items, min_price, max_price } = data;

  const [mainImage, setMainImage] = useState(items[0].image.url);
  const [url, setUrl] = useState("");

  // ===== PRODUCT VARIANTS =====
  const productVariants = {
    size: ["XS", "S", "M", "L"],
    color: ["A", "B", "C", "D"],
    carat: ["A", "B", "C", "D"],
    goldColor: ["Yellow", "White", "Rose Gold"],
    caratTone: ["Yellow", "White", "Rose Gold"],
    cut: ["Excellent"],
  };

  // ===== INITIALIZE STATES =====
  const [product, setProduct] = useState({
    id,
    uid,
    title: title[0].text,
    min_price,
    max_price,
    image: mainImage,
    additionalDetails: {
      size: "XS",
      color: "A",
      carat: "A",
      goldColor: "Yellow",
      caratTone: "Yellow",
      cut: "Excellent",
    },
  });
  const [buttonText, setButtonText] = useState("Add to Cart");
  const [buttonColor, setButtonColor] = useState("btn-primary");

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  // ===== INCREASE QUANTITY =====
  // const handleIncreaseQuantity = () => {
  //   setProduct((prev) => ({
  //     ...prev,
  //     quantity: prev.quantity + 1,
  //   }));
  // };

  // ===== DECREASE QUANTITY =====
  // const handleDecreaseQuantity = () => {
  //   setProduct((prev) => ({
  //     ...prev,
  //     quantity: Math.max(1, prev.quantity - 1),
  //   }));
  // };

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCartItem(product);
    toast.success("Product added to cart!");
    setButtonText("Added");
    setButtonColor("btn-success");
    setTimeout(() => {
      setButtonText("Add to Cart");
      setButtonColor("btn-primary");
    }, 2000);
  };

  return (
    <>
      <section className="product-single container">
        <div className="row">
          <div className="col-lg-6">
            <div className="product-single__media">
              <div className="product-single__image">
                <img
                  loading="lazy"
                  src={mainImage}
                  style={{ width: "100%", borderRadius: "15px" }}
                  alt="Main Product"
                />
                <div className="product-single__thumbnail mt-3">
                  <Splide
                    options={{
                      perPage: 4,
                      rewind: true,
                      gap: 10,
                    }}
                  >
                    {items.map((item, index) => (
                      <SplideSlide key={index}>
                        <div
                          className={`product-single__image-item cursor-pointer ${
                            mainImage === item.image.url ? "active" : ""
                          }`}
                          onClick={() => setMainImage(item.image.url)}
                        >
                          <img
                            loading="lazy"
                            className="h-auto"
                            src={item.image.url}
                            style={{ borderRadius: "15px" }}
                            alt={`Thumbnail ${index + 1}`}
                          />
                        </div>
                      </SplideSlide>
                    ))}
                  </Splide>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            {/* // ===== PRODUCT DETAILS ===== */}
            <h1 className="product-single__name">{title[0].text}</h1>
            <div className="product-single__price">
              {/* // ===== PRICE ===== */}
              {max_price && min_price && (
                <span className="current-price">
                  {cad(min_price)} - {cad(max_price)}
                </span>
              )}
            </div>
            <div className="product-single__short-desc">
              <PrismicRichText field={description} />
            </div>
            {/* // ===== ADD TO CART FORM ===== */}
            <form name="addtocart-form">
              <div className="product-single__swatches">
                {Object.entries(productVariants).map(([attribute, options]) => (
                  <div key={attribute} className="product-swatch text-swatches">
                    <label>
                      {attribute
                        .replace(/([A-Z])/g, " $1")
                        .replace(/(^\w|\s\w)/g, (m) => m.toUpperCase())
                        .trim()}
                    </label>
                    <div
                      className="swatch-list"
                      style={{ borderRadius: "15px" }}
                    >
                      {options.map((option, index) => (
                        <label
                          style={{ cursor: "pointer" }}
                          key={index}
                          className={`swatch js-swatch
                            ${product?.additionalDetails[attribute] === option && "js-swatch-active"}
                            `}
                          onClick={() =>
                            setProduct((prev) => ({
                              ...prev,
                              additionalDetails: {
                                ...prev.additionalDetails,
                                [attribute]: option,
                              },
                            }))
                          }
                        >
                          {option}
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* // ===== ADD TO CART BUTTON ===== */}
              <div className="product-single__addtocart">
                <button
                  type="submit"
                  className={`btn ${buttonColor} btn-addtocart js-open-aside`}
                  style={{ borderRadius: "15px", transition: "all 0.3s" }}
                  onClick={handleAddToCart}
                  disabled={buttonText === "Added"}
                >
                  {buttonText}
                </button>
              </div>
            </form>
            <ShareSection url={url} />
          </div>
        </div>
      </section>

      <style jsx>{`
        .product-single {
          margin-top: 4rem;
        }
      `}</style>
    </>
  );
};

{
  /* <div className="qty-control position-relative qty-initialized">
<input
  type="number"
  name="quantity"
  value={product?.quantity}
  readOnly
  style={{ borderRadius: "15px" }}
  className="qty-control__number text-center"
/>
<div
  className="qty-control__reduce"
  onClick={handleDecreaseQuantity}
>
  <FiMinus />
</div>
<div
  className="qty-control__increase"
  onClick={handleIncreaseQuantity}
>
  <FiPlus />
</div>
</div> */
}

export default ProductDetailsSection;
