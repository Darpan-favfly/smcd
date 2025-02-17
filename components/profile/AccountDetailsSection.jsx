"use client";
import { useState } from "react";
import Input from "../ui/input/Input";
import Button from "../ui/button/Button";
import { userProfileStore } from "@/storage/userProfileStore";
import { useRouter, usePathname } from "next/navigation";

const AccountDetailsForm = () => {
  // ====== INITIALIZING STORES ======
  const { userProfile, handleUpdateUser } = userProfileStore();

  // ===== DESTRUCTURE USER PROFILE =====
  const { uid, name, email } = userProfile;

  // ====== INITIALIZING FORM FIELDS ======
  const formFields = [
    {
      label: "Name",
      name: "name",
      value: name || "",
      type: "text",
    },
    {
      label: "Email",
      name: "email",
      value: email || "",
      type: "email",
      disabled: true,
    },
  ];

  // ====== INITIALIZING STATES ======
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(
    formFields.reduce((acc, field) => {
      return { ...acc, [field.name]: field.value };
    }, {})
  );

  // ====== INITIALIZING HOOKS ======
  const router = useRouter();
  const pathname = usePathname();

  // ===== HANDLE FORM SUBMISSION =====
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    // ===== UPDATE PROFILE =====
    await handleUpdateUser({
      ...formData,
      uid,
    });

    setLoading(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {formFields.map((field, index) => (
          <Input
            key={index}
            label={field.label}
            name={field.name}
            value={formData[field.name]}
            disabled={field.disabled}
            handleChange={(e) =>
              setFormData({ ...formData, [field.name]: e.target.value })
            }
            type={field.type}
          />
        ))}

        <Button type="submit" loading={loading} label="Update Profile" />
      </form>
    </>
  );
};

export default AccountDetailsForm;
