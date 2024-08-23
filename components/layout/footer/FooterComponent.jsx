"use client";
import {
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import BrandMark from "../../favfly/BrandMark";
import Link from "next/link";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

const FooterComponent = ({ data }) => {
  const {
    image,
    address,
    phone,
    email,
    facebook,
    instagram,
    company_items,
    shop_items,
    policy_items,
  } = data?.data;

  return (
    <>
      <footer className="footer footer_type_2 bordered">
        <div className="footer-top container">
          <div className="block-newsletter">
            <h3 className="block__title">Sign Up Now &amp; Get 10% Off</h3>
            <p className="h6 fs-base">
              Be the first to get the latest news about trends, promotions, and
              much more!
            </p>
            <form action="./index.html" className="block-newsletter__form">
              <input
                className="form-control"
                type="email"
                name="email"
                placeholder="Your email address"
                style={{
                  borderWidth: 1,
                  borderColor: "#666",
                  borderStyle: "solid",
                }}
              />
              <button
                className="btn btn-secondary fw-medium"
                type="submit"
                style={{ borderRadius: 15 }}
              >
                JOIN
              </button>
            </form>
          </div>
        </div>
        <div className="footer-middle container">
          <div className="row row-cols-lg-3 row-cols-12">
            <div className="footer-column footer-store-info font-heading col-12 mb-4 mb-lg-0">
              <div className="logo">
                <Link href="/">
                  <PrismicNextImage
                    field={image}
                    className="logo__image d-block w-auto"
                    style={{ maxHeight: 50, cursor: "pointer" }}
                  />
                </Link>
              </div>

              <div>
                <h3
                  style={{
                    fontWeight: 500,
                    fontSize: 20,
                    color: "#000",
                    marginBottom: 10,
                  }}
                >
                  Forever begins with us 🤍
                </h3>
                <p
                  style={{
                    fontWeight: 400,
                    fontSize: 14,
                    color: "#000",
                    marginBottom: "30px",
                  }}
                >
                  SMC DIAMONDS offers high-quality, certified diamond jewelry at
                  unbeatable prices. With a lifetime warranty and exceptional
                  service, we help you celebrate forever.
                </p>
              </div>

              <div
                className="footer-address body-color"
                style={{
                  fontWeight: 500,
                  gap: 10,
                  display: "flex",
                  marginBottom: "10px",
                }}
              >
                <i
                  style={{
                    fontSize: 16,
                    color: "#424242",
                    position: "relative",
                    top: -2,
                  }}
                >
                  <FaMapMarkerAlt />
                </i>

                <PrismicRichText field={address} />
              </div>
              <div
                className="body-color"
                style={{
                  fontWeight: 500,
                  gap: 10,
                  display: "flex",
                  marginBottom: "10px",
                }}
              >
                <i
                  style={{
                    fontSize: 16,
                    color: "#424242",
                    position: "relative",
                    top: -2,
                  }}
                >
                  <FaEnvelope />
                </i>

                <PrismicRichText field={email} />
              </div>
              <div
                className="body-color"
                style={{
                  fontWeight: 500,
                  gap: 10,
                  display: "flex",
                  marginBottom: "10px",
                }}
              >
                <i
                  style={{
                    fontSize: 16,
                    color: "#424242",
                    position: "relative",
                    top: -2,
                  }}
                >
                  <FaPhoneAlt />
                </i>
                <PrismicRichText field={phone} />
              </div>
              <ul className="social-links list-unstyled d-flex flex-wrap mb-0 ms-0">
                <li>
                  <PrismicNextLink field={facebook}>
                    <div className="footer__social-link d-block">
                      <FaFacebookF />
                    </div>
                  </PrismicNextLink>
                </li>
                <li>
                  <PrismicNextLink field={instagram}>
                    <div className="footer__social-link d-block">
                      <FaInstagram />
                    </div>
                  </PrismicNextLink>
                </li>
              </ul>
            </div>

            <div className="footer-column footer-menu mb-4 mb-lg-0">
              <h6 className="sub-menu__title text-uppercase font-base">
                Company
              </h6>
              <ul className="sub-menu__list list-unstyled font-heading">
                {company_items.map((item, index) => (
                  <li className="sub-menu__item" key={index}>
                    <PrismicNextLink field={item?.link}>
                      <div className="menu-link menu-link_us-s">
                        {item.text}
                      </div>
                    </PrismicNextLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-column footer-menu mb-4 mb-lg-0">
              <h6 className="sub-menu__title text-uppercase font-base">Shop</h6>
              <ul className="sub-menu__list list-unstyled font-heading">
                {shop_items.map((item, index) => (
                  <li className="sub-menu__item" key={index}>
                    <PrismicNextLink field={item?.link}>
                      <div className="menu-link menu-link_us-s">
                        {item.text}
                      </div>
                    </PrismicNextLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-column footer-menu mb-4 mb-lg-0">
              <h6 className="sub-menu__title text-uppercase font-base">
                Our Policies
              </h6>
              <ul className="sub-menu__list list-unstyled font-heading">
                {policy_items.map((item, index) => (
                  <li className="sub-menu__item" key={index}>
                    <PrismicNextLink field={item?.link}>
                      <div className="menu-link menu-link_us-s">
                        {item.text}
                      </div>
                    </PrismicNextLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom font-heading body-color">
          <div className="container d-md-flex align-items-center">
            <span className="footer-copyright me-auto">
              ©{new Date().getFullYear()}
              SMC Jewels
            </span>
            <div className="footer-settings d-md-flex align-items-center"></div>
          </div>
        </div>
        <BrandMark />
      </footer>
    </>
  );
};

export default FooterComponent;
