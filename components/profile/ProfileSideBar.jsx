"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const ProfileSideBar = () => {
  const pathName = usePathname();

  const getMenuLinkClass = (path) => {
    return `menu-link menu-link_us-s${pathName === path ? " menu-link_active" : ""}`;
  };

  return (
    <div className="col-lg-3">
      <ul className="account-nav">
        <li>
          <Link
            href="/profile/orders"
            className={getMenuLinkClass("/profile/orders")}
          >
            Orders
          </Link>
        </li>
        <li>
          <Link
            href="/profile/addresses"
            className={getMenuLinkClass("/profile/addresses")}
          >
            Addresses
          </Link>
        </li>
        <li>
          <Link
            href="/profile/account-details"
            className={getMenuLinkClass("/profile/account-details")}
          >
            Account Details
          </Link>
        </li>
        <li>
          <Link
            href="/profile/logout"
            className={getMenuLinkClass("/profile/logout")}
          >
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ProfileSideBar;
