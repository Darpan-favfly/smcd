import { useState } from "react";
import Input from "../../ui/input/Input";
import Button from "../../ui/button/Button";
import { userProfileStore } from "@/storage/userProfileStore";
import { useRouter, usePathname } from "next/navigation";

const SignUpForm = ({ setIsOpen }) => {
  // ====== INITIALIZING FORM FIELDS ======
  const formFields = [
    {
      label: "Name",
      name: "name",
      value: "",
      type: "text",
    },
    {
      label: "Email",
      name: "email",
      value: "",
      type: "email",
    },
    {
      label: "Password",
      name: "password",
      value: "",
      type: "password",
    },
  ];

  // ====== INITIALIZING STATES ======
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(
    formFields.reduce((acc, field) => {
      return { ...acc, [field.name]: field.value };
    }, {})
  );

  // ====== INITIALIZING STORES ======
  const { handleEmailPasswordSignUp, handleEmailPasswordLogin } =
    userProfileStore();

  // ====== INITIALIZING HOOKS ======
  const router = useRouter();
  const pathname = usePathname();

  // ===== HANDLE FORM SUBMISSION =====
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await handleEmailPasswordSignUp(formData);
    setIsOpen(false);
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
            handleChange={(e) =>
              setFormData({ ...formData, [field.name]: e.target.value })
            }
            type={field.type}
          />
        ))}

        <Button type="submit" full={true} loading={loading} label="Sign Up" />
      </form>
      <div className="customer-option mt-4 text-center">
        <span className="text-secondary">Already have an account? </span>
        <button
          className="btn-text js-show-register"
          onClick={() => router.push(`${pathname}?auth=login`)}
        >
          Login
        </button>
      </div>
    </>
  );
};

export default SignUpForm;
