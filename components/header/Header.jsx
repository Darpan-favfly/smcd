"use client";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";

const Header = ({ data }) => {
  useEffect(() => {
    window.addEventListener("scroll", function () {
      const header = document.getElementById("header");

      if (window.scrollY > 200) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    });
  }, []);

  const { logo, button_label, button_link } = data;

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    setShowMobileMenu(false);
  }, [pathname]);

  return (
    <>
      <header id="header" className="header-wrap style1">
        <div className="container">
          <nav className="navbar navbar-expand-md navbar-light">
            <Link className="navbar-brand" href="/">
              <img className="logo-dark" src={logo?.url} alt="Momentsstudio" />
            </Link>
            <div
              className={`navbar-collapse main-menu-wrap ${
                showMobileMenu ? "open" : ""
              }`}>
              <div className="menu-close d-lg-none">
                <div onClick={() => setShowMobileMenu(false)}>
                  <MdClose />
                </div>
              </div>
              <ul className="navbar-nav mx-auto">
                {data?.slices?.map((item, index) => (
                  <NavLink key={index} data={item} />
                ))}
                <li className="nav-item d-lg-none">
                  <Link
                    href={button_link?.[0]?.text || ""}
                    className="btn style1">
                    {button_label?.[0]?.text}
                  </Link>
                </li>
              </ul>
              <div className="other-options md-none">
                <div className="option-item">
                  <Link href={button_link?.url || ""} className="btn style1">
                    {button_label?.[0]?.text}
                  </Link>
                </div>
              </div>
            </div>
          </nav>
          <div className="mobile-bar-wrap">
            <div className="mobile-menu d-lg-none">
              <div onClick={() => setShowMobileMenu(true)}>
                <FaBars />
              </div>
            </div>
          </div>
        </div>
        <style jsx>{`
          .menu-close div,
          .mobile-menu div {
            cursor: pointer;
            font-size: 24px;
            color: #fff;
          }
          .logo-dark {
            width: 100px;
          }
          @media (max-width: 991px) {
            .logo-dark {
              width: 85px;
            }
          }
        `}</style>
      </header>
    </>
  );
};

const NavLink = ({ data }) => {
  const { title, link } = data?.primary;

  const pathname = usePathname();
  return (
    <li className="nav-item">
      {link?.url && (
        <span className={`nav-link ${pathname == link?.url ? "active" : ""}`}>
          <PrismicNextLink field={link}>{title?.[0]?.text}</PrismicNextLink>
        </span>
      )}
    </li>
  );
};

export default Header;
