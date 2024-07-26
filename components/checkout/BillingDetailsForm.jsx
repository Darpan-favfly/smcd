import { useEffect, useState } from "react";
import Input from "../ui/input/Input";
import { userProfileStore } from "@/storage/userProfileStore";
import OrderDetailsAside from "./OrderDetailsAside";
import { cartStore } from "@/storage/cartStore";
import { orderStore } from "@/storage/orderStore";
import { useRouter } from "next/navigation";
import PageLoader from "../global/loader/PageLoader";

const BillingDetailsForm = () => {
  // ====== INITIALIZING STORES ======
  const { userProfile, userLoading } = userProfileStore();
  const { cart } = cartStore();
  const { addOrder } = orderStore();

  const { shippingAddress, billingAddress } = userProfile || {};

  // ====== INITIALIZING FORM FIELDS ======
  const billingDetailsFormFields = [
    {
      label: "Name",
      name: "bName",
      value: billingAddress?.name || "",
      type: "text",
      required: true,
    },
    {
      label: "Email",
      name: "bEmail",
      value: billingAddress?.email || "",
      type: "email",
      required: true,
    },
    {
      label: "Phone number",
      name: "bPhone",
      value: billingAddress?.phone || "",
      type: "tel",
      required: true,
    },
    // address fields
    {
      label: "Address",
      name: "bAddress",
      value: billingAddress?.address || "",
      type: "text",
      required: true,
    },
    {
      label: "City",
      name: "bCity",
      value: billingAddress?.city || "",
      type: "text",
      required: true,
    },
    {
      label: "State",
      name: "bState",
      value: billingAddress?.state || "",
      type: "text",
      required: true,
    },
    {
      label: "Zip",
      name: "bZip",
      value: billingAddress?.zip || "",
      type: "text",
      required: true,
    },
    {
      label: "Country",
      name: "bCountry",
      value: billingAddress?.country || "",
      type: "text",
      required: true,
    },
  ];

  const shippingDetailsFormFields = [
    {
      label: "Name",
      name: "sName",
      value: shippingAddress?.name || "",
      type: "text",
      required: true,
    },
    {
      label: "Email",
      name: "sEmail",
      value: shippingAddress?.email || "",
      type: "email",
      required: true,
    },
    {
      label: "Phone number",
      name: "sPhone",
      value: shippingAddress?.phone || "",
      type: "tel",
      required: true,
    },
    // address fields
    {
      label: "Address",
      name: "sAddress",
      value: shippingAddress?.phone || "",
      type: "text",
      required: true,
    },
    {
      label: "City",
      name: "sCity",
      value: shippingAddress?.phone || "",
      type: "text",
      required: true,
    },
    {
      label: "State",
      name: "sState",
      value: shippingAddress?.phone || "",
      type: "text",
      required: true,
    },
    {
      label: "Zip",
      name: "sZip",
      value: shippingAddress?.phone || "",
      type: "text",
      required: true,
    },
    {
      label: "Country",
      name: "sCountry",
      value: shippingAddress?.phone || "",
      type: "text",
      required: true,
    },
  ];

  const formFields = [
    ...billingDetailsFormFields,
    ...shippingDetailsFormFields,
  ];

  // ====== INITIALIZING STATES ======
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(
    formFields.reduce((acc, field) => {
      return { ...acc, [field.name]: field.value };
    }, {})
  );

  const [orderSuccessful, setOrderSuccessful] = useState(false);

  useEffect(() => {
    // billingAddress {
    // "phone": "7031876195",
    // "city": "Kolkata",
    // "email": "favfly.darpan@gmail.com",
    // "address": "Dumdum",
    // "country": "India",
    // "state": "West Bengal",
    // "name": "Arpan Chakraborty",
    // "zip": "700028"

    const convertToSNameFormat = (str) =>
      str.charAt(1).toLowerCase() + str.slice(2);

    if (userProfile) {
      // update form data with user profile data
      setFormData({
        ...formData,
        ...billingDetailsFormFields.reduce((acc, field) => {
          return {
            ...acc,
            [field.name]:
              billingAddress?.[convertToSNameFormat(field.name)] || "",
          };
        }, {}),
        ...shippingDetailsFormFields.reduce((acc, field) => {
          return {
            ...acc,
            [field.name]:
              shippingAddress?.[convertToSNameFormat(field.name)] || "",
          };
        }, {}),
      });
    }
  }, [userProfile]);

  // ===== CHECKING IF CLIENT IS LOGGED IN =====
  if (userLoading) {
    return <PageLoader />;
  }
  if (!userProfile) {
    router.push("/");
    return null;
  }

  // ===== HANDLE FORM SUBMISSION =====
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      cart,
      userId: userProfile.uid,
      billingAddress: {
        name: formData.bName,
        email: formData.bEmail,
        phone: formData.bPhone,
        address: formData.bAddress,
        city: formData.bCity,
        state: formData.bState,
        zip: formData.bZip,
        country: formData.bCountry,
      },
      shippingAddress: {
        name: formData.sName,
        email: formData.sEmail,
        phone: formData.sPhone,
        address: formData.sAddress,
        city: formData.sCity,
        state: formData.sState,
        zip: formData.sZip,
        country: formData.sCountry,
      },
    };

    const res = await addOrder(data);

    if (res) {
      setOrderSuccessful(true);

      cartStore.setState({ cart: [] });
      localStorage.removeItem("cart");
    } else {
      setOrderSuccessful(false);
    }

    setLoading(false);
  };

  return (
    <>
      {orderSuccessful ? (
        <OrderSuccessful />
      ) : (
        <>
          <h2 className="page-title">Shipping and Checkout</h2>
          <form onSubmit={handleSubmit} className="checkout-form flex-lg-row">
            <div
              className="billing-info__wrapper d-flex flex-column"
              style={{
                rowGap: "1rem",
              }}
            >
              <div>
                <h4 className="mb-4">BILLING DETAILS</h4>
                <div className="px-2">
                  <div
                    className="row"
                    style={{
                      rowGap: "1rem",
                    }}
                  >
                    {billingDetailsFormFields.map((field, index) => (
                      <div key={index} className="col-md-6 px-2">
                        <Input
                          key={index}
                          label={field.label}
                          name={field.name}
                          required={field.required}
                          value={formData[field.name]}
                          handleChange={(e) =>
                            setFormData({
                              ...formData,
                              [field.name]: e.target.value,
                            })
                          }
                          type={field.type}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* // ===== SAME AS BILLING DETAILS ===== */}
              <div className="form-check mb-3">
                <input
                  className="form-check-input form-check-input_fill"
                  type="checkbox"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setFormData({
                        ...formData,
                        ...shippingDetailsFormFields.reduce((acc, field) => {
                          return {
                            ...acc,
                            [field.name]:
                              formData[field.name.replace("s", "b")],
                          };
                        }, {}),
                      });
                    } else {
                      setFormData({
                        ...formData,
                        ...shippingDetailsFormFields.reduce((acc, field) => {
                          return { ...acc, [field.name]: "" };
                        }, {}),
                      });
                    }
                  }}
                />
                <label
                  className="form-check-label"
                  htmlFor="ship_different_address"
                >
                  Shipping is the same as my billing information
                </label>
              </div>
              {/* // ===== SHIPPING DETAILS ===== */}
              <div className="mt-4">
                <h4 className="mb-4">SHIPPING DETAILS</h4>
                <div className="px-2">
                  <div
                    className="row"
                    style={{
                      rowGap: "1rem",
                    }}
                  >
                    {shippingDetailsFormFields.map((field, index) => (
                      <div key={index} className="col-md-6 px-2">
                        <Input
                          key={index}
                          label={field.label}
                          name={field.name}
                          value={formData[field.name]}
                          handleChange={(e) =>
                            setFormData({
                              ...formData,
                              [field.name]: e.target.value,
                            })
                          }
                          type={field.type}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <OrderDetailsAside loading={loading} />
          </form>
        </>
      )}
    </>
  );
};

const OrderSuccessful = () => {
  return (
    <div class="order-complete">
      <div class="order-complete__message">
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="40" cy="40" r="40" fill="#B9A16B"></circle>
          <path
            d="M52.9743 35.7612C52.9743 35.3426 52.8069 34.9241 52.5056 34.6228L50.2288 32.346C49.9275 32.0446 49.5089 31.8772 49.0904 31.8772C48.6719 31.8772 48.2533 32.0446 47.952 32.346L36.9699 43.3449L32.048 38.4062C31.7467 38.1049 31.3281 37.9375 30.9096 37.9375C30.4911 37.9375 30.0725 38.1049 29.7712 38.4062L27.4944 40.683C27.1931 40.9844 27.0257 41.4029 27.0257 41.8214C27.0257 42.24 27.1931 42.6585 27.4944 42.9598L33.5547 49.0201L35.8315 51.2969C36.1328 51.5982 36.5513 51.7656 36.9699 51.7656C37.3884 51.7656 37.8069 51.5982 38.1083 51.2969L40.385 49.0201L52.5056 36.8996C52.8069 36.5982 52.9743 36.1797 52.9743 35.7612Z"
            fill="white"
          ></path>
        </svg>
        <h3>Your order is completed!</h3>
        <p>Thank you. Your order has been received.</p>
      </div>
    </div>
  );
};

export default BillingDetailsForm;
