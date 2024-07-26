"use client";

import { orderStore } from "@/storage/orderStore";
import { userProfileStore } from "@/storage/userProfileStore";
import Link from "next/link";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { LuPackageX } from "react-icons/lu";
import relativeTime from "dayjs/plugin/relativeTime";
import ClipLoader from "../global/loader/ClipLoader";
dayjs.extend(relativeTime);

const OrdersSection = () => {
  // ===== INITIALIZING STATES =====
  const [loading, setLoading] = useState(false);

  // ===== INITIALIZING STORES =====
  const { userProfile } = userProfileStore();
  const { orders, loadAllOrdersById } = orderStore();

  useEffect(() => {
    if (!userProfile.uid) return;

    const fetchData = async () => {
      setLoading(true);
      await loadAllOrdersById(userProfile.uid);
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="d-flex justify-content-center align-items-center h-100">
          <ClipLoader />{" "}
          <span
            className="ms-2"
            style={{
              fontSize: "1.2rem",
              color: "#333",
            }}
          >
            Loading
          </span>
        </div>
      ) : (
        <div
          className="row"
          style={{
            rowGap: "2rem",
          }}
        >
          {orders.length > 0 ? (
            orders.map((order, index) => (
              <OrderItem
                key={index}
                data={order}
                hide={orders.length == index + 1}
              />
            ))
          ) : (
            <div
              className="text-center text-secondary h-100 d-flex flex-column justify-content-center align-items-center"
              style={{
                fontSize: "1.2rem",
              }}
            >
              <span
                style={{
                  opacity: 0.5,
                  marginBottom: "10px",
                }}
              >
                <LuPackageX size={60} />
              </span>
              No orders yet
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const OrderItem = ({ data, hide }) => {
  // ===== DESTRUCTURING DATA =====
  const {
    createdAt,
    status,
    productDetails: { additionalDetails, image, uid, title },
    // billingAddress,
    // shippingAddress,
  } = data;

  return (
    <div className="col-12">
      <Link href={`/${uid}`}>
        <div className="cart-drawer-item d-flex position-relative">
          <div className="position-relative">
            <img loading="lazy" src={image} className="cart-drawer-item__img" />
          </div>
          <div className="cart-drawer-item__info flex-grow-1">
            <h6 className="cart-drawer-item__title fw-normal mb-0">{title}</h6>
            <div
              className="d-flex align-items-center mt-1"
              style={{
                columnGap: "10px",
              }}
            >
              {status && <span className="status">{status.toUpperCase()}</span>}
              {createdAt && (
                <p
                  className="text-secondary mb-0"
                  style={{
                    fontSize: "12px",
                  }}
                >
                  {dayjs(createdAt).fromNow()}
                </p>
              )}
            </div>
            <div className="row mt-2">
              {Object.keys(additionalDetails).map((key) => (
                <p
                  key={key}
                  className="col-6 col-md-4 cart-drawer-item__option text-secondary"
                >
                  {key
                    .replace(/([A-Z])/g, " $1")
                    .replace(/(^\w|\s\w)/g, (m) => m.toUpperCase())
                    .trim()}
                  : {additionalDetails[key]}
                </p>
              ))}
            </div>
          </div>
        </div>
      </Link>

      {!hide && <hr className="cart-drawer-divider" />}

      <style jsx>{`
        .cart-drawer-item__option {
          font-size: 12px;
        }

        .status {
          font-size: 12px;
          line-height: 1;
          color: #333;
          font-weight: 500;
          background-color: #f5f5f5;
          padding: 2px 5px;
          border-radius: 5px;
          display: inline-block;
        }
      `}</style>
    </div>
  );
};

export default OrdersSection;
