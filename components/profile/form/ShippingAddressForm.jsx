import { useState } from "react";
import Input from "../../ui/input/Input";
import Button from "../../ui/button/Button";
import { userProfileStore } from "@/storage/userProfileStore";
import SliderComponent from "../../ui/slider/SliderComponent";

const ShippingAddressForm = ({ isOpen, setIsOpen }) => {
  // ====== INITIALIZING STORES ======
  const { userProfile, handleUpdateUserProfile } = userProfileStore();

  // ====== INITIALIZING FORM FIELDS ======
  const formFields = [
    {
      label: "Name",
      name: "name",
      value: userProfile?.shippingAddress?.name || "",
      type: "text",
      required: true,
    },
    {
      label: "Email",
      name: "email",
      value: userProfile?.shippingAddress?.email || "",
      type: "email",
      required: true,
    },
    {
      label: "Phone number",
      name: "phone",
      value: userProfile?.shippingAddress?.phone || "",
      type: "tel",
      required: true,
    },
    // address fields
    {
      label: "Address",
      name: "address",
      value: userProfile?.shippingAddress?.address || "",
      type: "text",
      required: true,
    },
    {
      label: "City",
      name: "city",
      value: userProfile?.shippingAddress?.city || "",
      type: "text",
      required: true,
    },
    {
      label: "State",
      name: "state",
      value: userProfile?.shippingAddress?.state || "",
      type: "text",
      required: true,
    },
    {
      label: "Zip",
      name: "zip",
      value: userProfile?.shippingAddress?.zip || "",
      type: "text",
      required: true,
    },
    {
      label: "Country",
      name: "country",
      value: userProfile?.shippingAddress?.country || "",
      type: "text",
      required: true,
    },
  ];

  // ====== INITIALIZING STATES ======
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(
    formFields.reduce((acc, field) => {
      return { ...acc, [field.name]: field.value };
    }, {})
  );

  // ===== HANDLE FORM SUBMISSION =====
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      shippingAddress: {
        ...formData,
      },
    };
    console.log(userProfile);
    await handleUpdateUserProfile(data, userProfile.uid);

    setIsOpen(false);
    setLoading(false);
  };

  return (
    <SliderComponent
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      title="Update Shipping Address"
    >
      <form onSubmit={handleSubmit}>
        {formFields.map((field, index) => (
          <Input
            key={index}
            label={field.label}
            name={field.name}
            value={formData[field.name]}
            required={field.required}
            handleChange={(e) =>
              setFormData({ ...formData, [field.name]: e.target.value })
            }
            type={field.type}
          />
        ))}

        <Button full={true} type="submit" loading={loading} label="Update" />
      </form>
    </SliderComponent>
  );
};

export default ShippingAddressForm;
