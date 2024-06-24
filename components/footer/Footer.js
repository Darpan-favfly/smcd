import Link from "next/link";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaPinterestP,
  FaYoutube,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";
import BrandMark from "../favfly/BrandMark";

const Footer = ({ data }) => {
  const {
    title,
    description,
    facebook,
    instagram,
    twitter,
    pinterest,
    linkedin,
    youtube,
    contact_title,
    phone_number,
    email,
    address,
    slices,
  } = data;

  return (
    <>
      <footer className="footer-wrap">
        <img
          src="https://images.prismic.io/momentsstudio/6beea261-bcef-4ae1-a5ca-1c18fad282da_footer-shape-1.png?auto=compress,format"
          alt="Image"
          className="footer-shape-one"
        />
        <img
          src="https://images.prismic.io/momentsstudio/a634dd6a-c9bc-417d-9f7a-e4c118cf1b4f_footer-shape-2.png?auto=compress,format"
          alt="Image"
          className="footer-shape-two"
        />
        <div className="container">
          <div className="row pt-100 pb-75">
            <div className="col-xl-5 col-lg-5 col-md-7 col-sm-6">
              <div className="footer-widget">
                <h3 className="footer-widget-title">{title?.[0]?.text}</h3>
                <div className="comp-desc">
                  <PrismicRichText field={description} />
                </div>

                <ul className="social-profile style1 list-style">
                  <li>
                    <a target="_blank" href={facebook?.url}>
                      <i>
                        <FaFacebookF />
                      </i>
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href={instagram?.url}>
                      <i>
                        <FaInstagram />
                      </i>
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href={twitter?.url}>
                      <i>
                        <FaTwitter />
                      </i>
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href={linkedin?.url}>
                      <i>
                        <FaLinkedinIn />
                      </i>
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href={pinterest?.url}>
                      <i>
                        <FaPinterestP />
                      </i>
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href={youtube?.url}>
                      <i>
                        <FaYoutube />
                      </i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {slices?.map((item, index) => (
              <div key={index} className="col-xl-2 col-lg-2 col-md-5 col-sm-6">
                <div className="footer-widget">
                  <h3 className="footer-widget-title">
                    {item?.primary?.title?.[0]?.text}
                  </h3>
                  <ul className="footer-menu list-style">
                    {item?.items?.map((item, index) => (
                      <li key={index}>
                        <PrismicNextLink field={item?.link}>
                          {item?.title?.[0]?.text}
                        </PrismicNextLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div className="footer-widget">
                <h3 className="footer-widget-title">
                  {contact_title?.[0]?.text}
                </h3>
                <ul className="contact-info list-style">
                  <li>
                    <i>
                      <FaMapMarkerAlt />
                    </i>
                    <PrismicRichText field={address} />
                  </li>
                  <li>
                    <i>
                      <FaPhoneAlt />
                    </i>
                    <PrismicRichText field={phone_number} />
                  </li>
                  <li>
                    <i>
                      <FaEnvelope />
                    </i>
                    <PrismicRichText field={email} />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <p className="copyright-text">
          Copyright © {new Date().getFullYear()}{" "}
          <Link href="/">Moments Studio</Link> . All Rights Reserved.
        </p>
        <BrandMark />
      </footer>
    </>
  );
};

export default Footer;
