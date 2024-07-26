"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import UserProfileButton from "./buttons/UserProfileButton";
import CartButton from "./buttons/CartButton";
import SearchButton from "./buttons/SearchButton";
import { HiBars3 } from "react-icons/hi2";
import AuthSliderSectionComponent from "@/components/auth/AuthSliderSectionComponent";
import { useState } from "react";
import CartSidebar from "@/components/cart/CartSidebar";

const Header = () => {
  // ===== INITIALIZING STATES =====
  const [isOpenAuthSlider, setIsOpenAuthSlider] = useState();
  const [isOpenCartSlider, setIsOpenCartSlider] = useState();

  // ===== NAVIGATION LINKS =====
  const navLinks = [
    { text: "About", link: "/about" },
    { text: "Collections", link: "/collections" },
    { text: "Customize", link: "/customize" },
    { text: "Shop", link: "/shop" },
    { text: "Blogs", link: "/blogs" },
    { text: "Contact", link: "/contact" },
    { text: "Appointment", link: "/" },
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
            >
              <HiBars3 />
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
    </>
  );
};

const NavLink = ({ data }) => {
  const pathname = usePathname();

  return (
    <Link
      href={data.link}
      className={`navigation__link navigation__item ${pathname == data.link && "active"}`}
    >
      {data.text}
    </Link>
  );
};

export default Header;
