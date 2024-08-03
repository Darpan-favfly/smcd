"use client";
import BillingAddressForm from "./form/BillingAddressForm";
import { useState } from "react";
import ShippingAddressForm from "./form/ShippingAddressForm";
import { userProfileStore } from "@/storage/userProfileStore";

const AddressSection = () => {
  // ====== INITIALIZING STATES ======
  const [isBillingAddressOpen, setIsBillingAddressOpen] = useState(false);
  const [isShippingAddressOpen, setIsShippingAddressOpen] = useState(false);

  // ====== INITIALIZING STORES ======
  const {
    userProfile: { billingAddress, shippingAddress },
  } = userProfileStore();

  return (
    <>
      <div className="my-account__address-list">
        {/* // ===== BILLING ADDRESS ===== */}
        <div className="my-account__address-item">
          <div className="my-account__address-item__title">
            <h5>Billing Address</h5>
            <button onClick={() => setIsBillingAddressOpen(true)}>
              {billingAddress ? "Edit" : "Add"}
            </button>
          </div>
          {billingAddress?.address && (
            <div className="my-account__address-item__detail">
              <p>
                {billingAddress?.address}, {billingAddress?.city},{" "}
                {billingAddress?.state}
              </p>
              <p>
                {billingAddress?.country}, {billingAddress?.zip}
              </p>
              <br />
              <p>{billingAddress?.name}</p>
              <p>{billingAddress?.email}</p>
              <p>{billingAddress?.phone}</p>
            </div>
          )}
        </div>

        {/* // ===== SHIPPING ADDRESS ===== */}
        <div className="my-account__address-item">
          <div className="my-account__address-item__title">
            <h5>Shipping Address</h5>
            <button onClick={() => setIsShippingAddressOpen(true)}>
              {shippingAddress ? "Edit" : "Add"}
            </button>
          </div>
          {shippingAddress?.address && (
            <div className="my-account__address-item__detail">
              <p>
                {shippingAddress?.address}, {shippingAddress?.city},{" "}
                {shippingAddress?.state}
              </p>
              <p>
                {shippingAddress?.country}, {shippingAddress?.zip}
              </p>
              <br />
              <p>{shippingAddress?.name}</p>
              <p>{shippingAddress?.email}</p>
              <p>{shippingAddress?.phone}</p>
            </div>
          )}
        </div>
      </div>

      {/* // ===== BILLING ADDRESS FORM ===== */}
      <BillingAddressForm
        isOpen={isBillingAddressOpen}
        setIsOpen={setIsBillingAddressOpen}
      />

      {/* // ===== SHIPPING ADDRESS FORM ===== */}
      <ShippingAddressForm
        isOpen={isShippingAddressOpen}
        setIsOpen={setIsShippingAddressOpen}
      />
    </>
  );
};

export default AddressSection;
