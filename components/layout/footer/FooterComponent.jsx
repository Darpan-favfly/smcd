"use client";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPinterestP,
} from "react-icons/fa";
import BrandMark from "../../favfly/BrandMark";
import Link from "next/link";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

const socialMediaLinks = [
  { href: "https://www.facebook.com", icon: <FaFacebookF /> },
  { href: "https://www.twitter.com", icon: <FaTwitter /> },
  { href: "https://www.instagram.com", icon: <FaInstagram /> },
  { href: "https://www.youtube.com", icon: <FaYoutube /> },
  { href: "https://www.pinterest.com", icon: <FaPinterestP /> },
];

const menuItems = {
  company: [
    { name: "About", link: "/about" },
    { name: "Collections", link: "/collection" },
    { name: "Customize", link: "/customize" },
    { name: "Blogs", link: "/blog" },
    { name: "Contact", link: "/contact" },
    { name: "Appointment", link: "#" },
  ],
  shop: [
    { name: "Summer Collection", link: "/collections/summer-collection" },
    { name: "Diamond Rings", link: "/categories/diamond-rings" },
    { name: "Men", link: "#" },
    { name: "Women", link: "#" },
    { name: "Shop All", link: "#" },
  ],
  policies: [
    { name: "Privacy Policy", link: "/privacy-policy" },
    { name: "Return & Exchange Policy", link: "/return-exchange-policy" },
    { name: "Shipping Policy", link: "/shipping-policy" },
    { name: "Terms & Condition", link: "/terms-conditions" },
  ],
};

const FooterComponent = ({ data }) => {
  console.log("data", data?.data);

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
                  />
                </Link>
              </div>
              <div
                className="footer-address body-color"
                style={{
                  fontWeight: 500,
                }}
              >
                <PrismicRichText field={address} />
              </div>
              <div
                className="m-0 body-color"
                style={{
                  fontWeight: 500,
                }}
              >
                <PrismicRichText field={email} />
              </div>
              <div
                className="body-color"
                style={{
                  fontWeight: 500,
                }}
              >
                <PrismicRichText field={phone} />
              </div>
              <ul className="social-links list-unstyled d-flex flex-wrap mb-0">
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
