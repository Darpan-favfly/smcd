"use client";
import { userProfileStore } from "@/storage/userProfileStore";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const ProfileSideBar = () => {
  // ===== INITIALIZING STORES =====
  const { handleLogout } = userProfileStore();

  // ===== NAVIGATION LINKS =====
  const navLinks = [
    {
      text: "Orders",
      link: "/profile",
    },
    {
      text: "Address",
      link: "/profile/address",
    },
    {
      text: "Account Details",
      link: "/profile/account",
    },
    {
      text: "Logout",
      handleClick: async () => await handleLogout(),
    },
  ];

  return (
    <div className="account-nav">
      {navLinks.map((link, index) => (
        <NavLink key={index} data={link} />
      ))}
    </div>
  );
};

const NavLink = ({ data: { text, link, handleClick } }) => {
  // ===== INITIALIZING HOOKS =====
  const pathName = usePathname();
  const router = useRouter();

  return (
    <>
      {handleClick ? (
        <div
          onClick={handleClick}
          className={`menu-link menu-link_us-s cursor-pointer ${pathName === link ? "menu-link_active" : ""}`}
        >
          {text}
        </div>
      ) : (
        <Link
          href={link}
          className={`menu-link menu-link_us-s cursor-pointer ${pathName === link ? "menu-link_active" : ""}`}
        >
          {text}
        </Link>
      )}
    </>
  );
};

export default ProfileSideBar;
