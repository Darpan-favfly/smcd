"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import UserProfileButton from "./buttons/UserProfileButton";
import CartButton from "./buttons/CartButton";
import SearchButton, { MobileSearchBar } from "./buttons/SearchButton";
import { HiBars3 } from "react-icons/hi2";
import AuthSliderSectionComponent from "@/components/auth/AuthSliderSectionComponent";
import { useState } from "react";
import CartSidebar from "@/components/cart/CartSidebar";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  // ===== INITIALIZING STATES =====
  const [isOpenAuthSlider, setIsOpenAuthSlider] = useState(false);
  const [isOpenCartSlider, setIsOpenCartSlider] = useState(false);
  const [isOpenNav, setIsOpenNav] = useState(false);

  // ===== NAVIGATION LINKS =====
  const navLinks = [
    { text: "About", link: "/about" },
    { text: "Collections", link: "/collections" },
    { text: "Customize", link: "/customize" },
    { text: "Shop", link: "/shop" },
    { text: "Blogs", link: "/blog" },
    { text: "Contact", link: "/contact" },
    {
      text: "Appointment",
      link: "#",
      handleClick: () => {
        Calendly.initPopupWidget({
          url: "https://calendly.com/favfly-darpan/appointment",
        });
        return false;
      },
    },
  ];

  return (
    <>
      <header
        id="header"
        className="header header-fullwidth position-fixed top-0"
      >
        <div className="container">
          <div
            className="header-desk header-desk_type_5 pb-2 pt-2"
            style={{
              columnGap: "1rem",
            }}
          >
            {/* // ===== LOGO ===== */}
            <button
              className="d-inline-block d-lg-none"
              style={{
                fontSize: "1.5rem",
              }}
              onClick={() => setIsOpenNav(!isOpenNav)}
            >
              {isOpenNav ? <IoMdClose /> : <HiBars3 />}
            </button>

            {/* // ===== LOGO ===== */}
            <Link href="/">
              <img
                src="https://i.ibb.co/d2Vj1n7/Luxury-Jewellery-Branding-Logo-2.png"
                alt="Uomo"
                className="logo__image"
              />
            </Link>

            {/* // ===== NAVIGATION LINKS ===== */}
            <nav className="navigation__list list-unstyled d-none d-lg-flex">
              {navLinks.map((item, index) => (
                <NavLink key={index} data={item} />
              ))}
            </nav>

            {/* // ===== BUTTONS ===== */}
            <div className="header-tools d-flex align-items-center">
              {/* // ===== CART BUTTON ===== */}
              <SearchButton />
              {/* // ===== CART BUTTON ===== */}
              <CartButton setIsOpen={setIsOpenCartSlider} />

              {/* // ===== USER PROFILE BUTTON ===== */}
              <UserProfileButton setIsOpen={setIsOpenAuthSlider} />
            </div>
          </div>
        </div>
      </header>

      {/* // ===== AUTH SLIDER SECTION ===== */}
      <AuthSliderSectionComponent
        isOpen={isOpenAuthSlider}
        setIsOpen={setIsOpenAuthSlider}
      />

      {/* // ===== CART SIDEBAR ===== */}
      <CartSidebar isOpen={isOpenCartSlider} setIsOpen={setIsOpenCartSlider} />

      {/* // ===== MOBILE NAVIGATION ===== */}
      <MobileNav
        isOpen={isOpenNav}
        setOpen={setIsOpenNav}
        navLinks={navLinks}
      />
    </>
  );
};

const NavLink = ({ data }) => {
  const pathname = usePathname();

  return (
    <Link
      href={data.link}
      onClick={data.handleClick}
      className={`navigation__link navigation__item ${pathname == data.link && "active"}`}
    >
      {data.text}
    </Link>
  );
};

const MobileNav = ({ isOpen, setOpen, navLinks }) => {
  const pathname = usePathname();

  return (
    <nav
      className="header-mobile__navigation navigation d-flex flex-column bg-body overflow-auto position-fixed top-0 start-0 end-0 bottom-0"
      style={{
        marginTop: "50px",
        height: isOpen ? "100vh" : "0",
        maxHeight: "100vh",
      }}
    >
      <div className="container">
        <MobileSearchBar setOpen={setOpen} />
        <div className="overflow-hidden">
          <ul className="navigation__list list-unstyled position-relative">
            {navLinks.map((item, index) => (
              <li key={index} className="navigation__item">
                <Link
                  href={item.link}
                  className={`navigation__link ${pathname == item.link && "active"}`}
                  onClick={() => {
                    item.handleClick && item.handleClick();
                    setOpen(false);
                  }}
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
