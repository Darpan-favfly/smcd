import { useState } from "react";
import Input from "../../ui/input/Input";
import Button from "../../ui/button/Button";
import { userProfileStore } from "@/storage/userProfileStore";
import { useRouter, usePathname } from "next/navigation";

const LoginForm = ({ setIsOpen }) => {
  // ====== INITIALIZING FORM FIELDS ======
  const formFields = [
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
  const { handleEmailPasswordLogin } = userProfileStore();

  // ====== INITIALIZING HOOKS ======
  const router = useRouter();
  const pathname = usePathname();

  // ===== HANDLE FORM SUBMISSION =====
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await handleEmailPasswordLogin(formData);
    setIsOpen(false);
    setLoading(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {formFields.map((field, index) => (
          <div key={index}>
            {/* // ====== RENDERING FORGOT PASSWORD LINK ====== */}
            {field.name === "password" && (
              <div className="text-end">
                <button
                  type="button"
                  className="btn-text"
                  onClick={() => router.push(`${pathname}?auth=forgot`)}
                >
                  Forgot Password?
                </button>
              </div>
            )}

            {/* // ====== RENDERING INPUT COMPONENT ====== */}
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
          </div>
        ))}

        <Button full={true} type="submit" loading={loading} label="Login" />
      </form>

      <div className="customer-option mt-4 text-center">
        <span className="text-secondary">Don't have an account? </span>
        <button
          className="btn-text js-show-register"
          onClick={() => router.push(`${pathname}?auth=signup`)}
        >
          Sign Up
        </button>
      </div>
    </>
  );
};

export default LoginForm;
