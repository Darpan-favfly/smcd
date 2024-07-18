import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPinterestP,
} from "react-icons/fa";
import BrandMark from "../favfly/BrandMark";
import Link from "next/link";

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
    { name: "Blogs", link: "/blogs" },
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

const FooterComponent = () => {
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
                  <img
                    src="https://i.ibb.co/d2Vj1n7/Luxury-Jewellery-Branding-Logo-2.png"
                    alt="Uomo"
                    className="logo__image d-block"
                  />
                </Link>
              </div>
              <p className="footer-address body-color">
                409 Granville St , Vancouver
              </p>
              <p className="m-0">
                <strong className="fw-medium body-color">
                  sale@smcjewels.com
                </strong>
              </p>
              <p>
                <strong className="fw-medium body-color">
                  +1 246-345-0695
                </strong>
              </p>
              <ul className="social-links list-unstyled d-flex flex-wrap mb-0">
                {socialMediaLinks.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href}>
                      <div className="footer__social-link d-block">
                        {link.icon}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-column footer-menu mb-4 mb-lg-0">
              <h6 className="sub-menu__title text-uppercase font-base">
                Company
              </h6>
              <ul className="sub-menu__list list-unstyled font-heading">
                {menuItems.company.map((item, index) => (
                  <li className="sub-menu__item" key={index}>
                    <Link href={item.link}>
                      <div className="menu-link menu-link_us-s">
                        {item.name}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-column footer-menu mb-4 mb-lg-0">
              <h6 className="sub-menu__title text-uppercase font-base">Shop</h6>
              <ul className="sub-menu__list list-unstyled font-heading">
                {menuItems.shop.map((item, index) => (
                  <li className="sub-menu__item" key={index}>
                    <Link href={item.link}>
                      <div className="menu-link menu-link_us-s">
                        {item.name}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-column footer-menu mb-4 mb-lg-0">
              <h6 className="sub-menu__title text-uppercase font-base">
                Our Policies
              </h6>
              <ul className="sub-menu__list list-unstyled font-heading">
                {menuItems.policies.map((item, index) => (
                  <li className="sub-menu__item" key={index}>
                    <Link href={item.link}>
                      <div className="menu-link menu-link_us-s">
                        {item.name}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom font-heading body-color">
          <div className="container d-md-flex align-items-center">
            <span className="footer-copyright me-auto">©2024 SMC Jewels</span>
            <div className="footer-settings d-md-flex align-items-center"></div>
          </div>
        </div>
        <BrandMark />
      </footer>
    </>
  );
};

export default FooterComponent;
