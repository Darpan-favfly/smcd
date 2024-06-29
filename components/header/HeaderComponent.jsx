"use client";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch, CiUser, CiHeart } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";

const menuItems = [
  { name: "About", link: "/about" },
  { name: "Collections", link: "/collection" },
  { name: "Customize", link: "/customize" },
  { name: "Blogs", link: "/blogs" },
  { name: "Contact", link: "/contact" },
  { name: "Appointment", link: "/appointment", className: "tt-logo" },
];

const HeaderComponent = () => {
  return (
    <>
      <MobileMenu />

      <header
        id="header"
        className="header header_sticky header-fullwidth position-absolute"
      >
        <div className="container">
          <div className="header-desk header-desk_type_5 pb-2 pt-2">
            <div className="logo">
              <a href="/">
                <img
                  src="https://i.ibb.co/d2Vj1n7/Luxury-Jewellery-Branding-Logo-2.png"
                  alt="Uomo"
                  className="logo__image d-block"
                />
              </a>
            </div>
            <form
              action="./"
              method="GET"
              className="header-search search-field d-none "
            >
              <button className="btn header-search__btn" type="submit">
                <i style={{ fontSize: 24 }}>
                  <CiSearch />
                </i>
              </button>
              <input
                className="header-search__input w-100"
                type="text"
                name="search-keyword"
                placeholder="Search products..."
              />
              <div className="hover-container position-relative">
                <div className="js-hover__open">
                  <input
                    className="header-search__category search-field__actor border-0 bg-white w-100"
                    type="text"
                    name="search-category"
                    placeholder="All Category"
                    readOnly=""
                  />
                </div>
              </div>
            </form>
            <nav className="navigation mx-auto mx-xxl-0">
              <ul className="navigation__list list-unstyled d-flex">
                {menuItems.map((item) => (
                  <li className={`navigation__item`} key={item.name}>
                    <a
                      href={item.link}
                      className={`navigation__link ${item.className}`}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="header-tools d-flex align-items-center">
              <div className="header-tools__item hover-container d-block">
                <div className="js-hover__open position-relative">
                  <a
                    className="js-search-popup search-field__actor"
                    href="./search.html"
                  >
                    <CiSearch />
                    <i className="btn-icon btn-close-lg" />
                  </a>
                </div>
                <div className="search-popup js-hidden-content">
                  <form
                    action="./search_result.html"
                    method="GET"
                    className="search-field container"
                  >
                    <p className="text-uppercase text-secondary fw-medium mb-4">
                      What are you looking for?
                    </p>
                    <div className="position-relative">
                      <input
                        className="search-field__input search-popup__input w-100 fw-medium"
                        type="text"
                        name="search-keyword"
                        placeholder="Search products"
                      />
                      <button
                        className="btn-icon search-popup__submit"
                        type="submit"
                      >
                        <CiSearch />
                      </button>
                      <button
                        className="btn-icon btn-close-lg search-popup__reset"
                        type="reset"
                      />
                    </div>
                    <div className="search-popup__results">
                      {/* <div className="sub-menu search-suggestion">
                        <h6 className="sub-menu__title fs-base">Quicklinks</h6>
                        <ul className="sub-menu__list list-unstyled">
                          <li className="sub-menu__item">
                            <a
                              href="./sweatshirt.html"
                              className="menu-link menu-link_us-s"
                            >
                              Sweatshirt
                            </a>
                          </li>
                        </ul>
                      </div> */}
                      <div className="search-result row row-cols-5" />
                    </div>
                  </form>
                </div>
              </div>
              <div className="header-tools__item hover-container">
                <a
                  className="header-tools__item js-open-aside"
                  href="./account.html"
                  data-aside="customerForms"
                >
                  <i>
                    <CiUser />
                  </i>
                </a>
              </div>
              {/* <a className="header-tools__item" href="./account_wishlist.html">
                <i>
                  <CiHeart />
                </i>
              </a> */}
              <a
                href="./cart.html"
                className="header-tools__item header-tools__cart js-open-aside"
                data-aside="cartDrawer"
              >
                <i>
                  <IoBagOutline />
                </i>
                <span className="cart-amount d-block position-absolute js-cart-items-count">
                  3
                </span>
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

const MobileMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    document.body.classList.toggle("mobile-menu-opened");
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="header-mobile header_sticky position-absolute">
        <div
          className="container d-flex align-items-center h-100"
          style={{ fontSize: 24 }}
        >
          <div
            className="mobile-nav-activator d-block position-relative"
            onClick={toggleMobileMenu}
          >
            {menuOpen ? (
              <span className="btn-close-lg position-absolute top-0 start-0 w-100">
                ×
              </span>
            ) : (
              <RxHamburgerMenu />
            )}
          </div>
          <div className="logo">
            <a href="/">
              <img
                src="https://i.ibb.co/2WbkR2S/Luxury-Jewellery-Branding-Logo.png"
                alt="Uomo"
                className="logo__image d-block"
              />
            </a>
          </div>
          <a
            href="./cart.html"
            className="header-tools__item header-tools__cart js-open-aside"
            data-aside="cartDrawer"
          >
            <IoBagOutline />
            <span className="cart-amount d-block position-absolute js-cart-items-count">
              3
            </span>
          </a>
        </div>
        <nav
          className={`header-mobile__navigation navigation d-flex flex-column w-100 position-absolute top-100 bg-body overflow-auto ${
            menuOpen ? "open" : ""
          }`}
          style={{ paddingRight: 17 }}
        >
          <div className="container">
            <form
              action="./search.html"
              method="GET"
              className="search-field position-relative mt-4 mb-3"
            >
              <div className="position-relative">
                <input
                  className="search-field__input w-100 border rounded-1"
                  type="text"
                  name="search-keyword"
                  placeholder="Search products"
                />
                <button
                  className="btn-icon search-popup__submit pb-0 me-2"
                  type="submit"
                >
                  <CiSearch />
                </button>
                <button
                  className="btn-icon btn-close-lg search-popup__reset pb-0 me-2"
                  type="reset"
                />
              </div>
              <div className="position-absolute start-0 top-100 m-0 w-100">
                <div className="search-result" />
              </div>
            </form>
          </div>
          <div className="container">
            <div className="overflow-hidden">
              <ul className="navigation__list list-unstyled position-relative">
                {menuItems.map((item) => (
                  <li className="navigation__item" key={item.name}>
                    <a href={item.link} className="navigation__link">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default HeaderComponent;
