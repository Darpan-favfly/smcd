"use client";
import { useState } from "react";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch, CiUser } from "react-icons/ci";
import { IoBagOutline, IoClose } from "react-icons/io5";
import { useRouter } from "next/navigation";
import CartSideBar from "../cart/CartSidebar";

const menuItems = [
  { name: "About", link: "/about" },
  { name: "Collections", link: "/collections" },
  { name: "Customize", link: "/customize" },
  { name: "Blogs", link: "/blogs" },
  { name: "Contact", link: "/contact" },
  { name: "Appointment", link: "/", className: "tt-logo" },
];

const HeaderComponent = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const [query, setQuery] = useState("");
  const [openCart, setOpenCart] = useState(false);
  const router = useRouter();

  const togglePageOverlay = () => {
    document
      .getElementById("pageOverlay")
      .classList.toggle("page-overlay_visible");
  };

  const toggleSearch = () => {
    setOpenSearch(!openSearch);
    togglePageOverlay();
  };

  const toggleCart = () => {
    setOpenCart(!openCart);
    togglePageOverlay();
  };

  const handleSearch = (e) => {
    e.preventDefault();
    router.push(`/search?q=${query}`);
    toggleSearch();
  };

  return (
    <>
      <MobileMenu
        query={query}
        setQuery={setQuery}
        handleSearch={handleSearch}
        toggleSearch={toggleSearch}
        toggleCart={toggleCart}
        openCart={openCart}
        setOpenCart={setOpenCart}
        togglePageOverlay={togglePageOverlay}
      />

      <header
        id="header"
        className="header header_sticky header-fullwidth position-absolute"
      >
        <div className="container">
          <div className="header-desk header-desk_type_5 pb-2 pt-2">
            <Logo />
            <Navigation />
            <HeaderTools
              openSearch={openSearch}
              toggleSearch={toggleSearch}
              toggleCart={toggleCart}
              query={query}
              setQuery={setQuery}
              handleSearch={handleSearch}
            />
          </div>
        </div>
        <CartSideBar
          openCart={openCart}
          setOpenCart={setOpenCart}
          togglePageOverlay={togglePageOverlay}
        />
      </header>
    </>
  );
};

const Logo = () => (
  <div className="logo">
    <Link href="/">
      <img
        src="https://i.ibb.co/d2Vj1n7/Luxury-Jewellery-Branding-Logo-2.png"
        alt="Uomo"
        className="logo__image d-block"
      />
    </Link>
  </div>
);

const Navigation = () => (
  <nav className="navigation mx-auto mx-xxl-0">
    <ul className="navigation__list list-unstyled d-flex">
      {menuItems.map((item) => (
        <li className="navigation__item" key={item.name}>
          <Link href={item.link}>
            <div className={`navigation__link ${item.className}`}>
              {item.name}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

const HeaderTools = ({
  openSearch,
  toggleSearch,
  toggleCart,
  query,
  setQuery,
  handleSearch,
}) => (
  <div className="header-tools d-flex align-items-center">
    <div
      className={`header-tools__item hover-container ${openSearch ? "js-content_visible" : ""}`}
    >
      <div
        className="js-hover__open position-relative"
        onClick={toggleSearch}
        style={{ cursor: "pointer" }}
      >
        {openSearch ? <IoClose /> : <CiSearch />}

        <i className="btn-icon btn-close-lg" />
      </div>

      <div
        className={`search-popup js-hidden-content ${openSearch ? "js-content_visible" : ""}`}
      >
        <form className="search-field container" onSubmit={handleSearch}>
          <p className="text-uppercase text-secondary fw-medium mb-4">
            What are you looking for?
          </p>
          <div className="position-relative">
            <input
              className="search-field__input search-popup__input w-100 fw-medium"
              type="text"
              name="search-keyword"
              placeholder="Search products"
              style={{ borderBottom: "1px solid #000" }}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              className="btn-icon search-popup__submit"
              type="submit"
              style={{ cursor: "pointer" }}
            >
              <CiSearch />
            </button>
            <button
              className="btn-icon btn-close-lg search-popup__reset"
              type="reset"
              onClick={() => setQuery("")}
            />
          </div>
          <div className="search-popup__results">
            <div className="search-result row row-cols-5" />
          </div>
        </form>
      </div>
    </div>
    <button
      onClick={toggleCart}
      className="header-tools__item header-tools__cart js-open-aside"
      data-aside="cartDrawer"
    >
      <IoBagOutline />
      <span className="cart-amount d-block position-absolute js-cart-items-count">
        3
      </span>
    </button>
    <Link
      href="/profile/orders"
      className="header-tools__item js-open-aside"
      data-aside="customerForms"
    >
      <CiUser />
    </Link>
  </div>
);

const MobileMenu = ({
  query,
  setQuery,
  handleSearch,
  toggleSearch,
  toggleCart,
  openCart,
  setOpenCart,
  togglePageOverlay,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    document.body.classList.toggle("mobile-menu-opened");
    setMenuOpen(!menuOpen);
  };

  const closeMobileMenu = () => {
    document.body.classList.remove("mobile-menu-opened");
    setMenuOpen(false);
  };

  const handleMobileSearch = (e) => {
    e.preventDefault();
    handleSearch(e);
    toggleMobileMenu();
    togglePageOverlay();
  };

  return (
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
        <Logo />
        <button
          className="header-tools__item header-tools__cart js-open-aside"
          onClick={toggleCart}
        >
          <IoBagOutline />
          <span className="cart-amount d-block position-absolute js-cart-items-count">
            3
          </span>
        </button>
      </div>
      <nav
        className={`header-mobile__navigation navigation d-flex flex-column w-100 position-absolute top-100 bg-body overflow-auto ${menuOpen ? "open" : ""}`}
        style={{ paddingRight: 17 }}
      >
        <div className="container">
          <form
            className="search-field position-relative mt-4 mb-3"
            onSubmit={handleMobileSearch}
          >
            <div className="position-relative">
              <input
                className="search-field__input w-100 border rounded-1"
                type="text"
                name="search-keyword"
                placeholder="Search products"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
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
                onClick={() => setQuery("")}
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
                  <Link href={item.link}>
                    <div className="navigation__link" onClick={closeMobileMenu}>
                      {item.name}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      <CartSideBar
        openCart={openCart}
        setOpenCart={setOpenCart}
        togglePageOverlay={togglePageOverlay}
      />
    </div>
  );
};

export default HeaderComponent;
