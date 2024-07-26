import { useState } from "react";
import Input from "../../ui/input/Input";
import Button from "../../ui/button/Button";
import { userProfileStore } from "@/storage/userProfileStore";
import { useRouter, usePathname } from "next/navigation";
import toast from "react-hot-toast";

const ForgotPasswordForm = () => {
  // ====== INITIALIZING FORM FIELDS ======
  const formFields = [
    {
      label: "Email",
      name: "email",
      value: "",
      type: "email",
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
  const { checkUserExist, handleForgotPassword } = userProfileStore();

  // ====== INITIALIZING HOOKS ======
  const router = useRouter();
  const pathname = usePathname();

  // ===== HANDLE FORM SUBMISSION =====
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    const { email } = formData;

    const userExist = await checkUserExist(email);

    if (!userExist) {
      setLoading(false);
      toast.error("User does not exist");
      return;
    }

    await handleForgotPassword({ email });

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

        <Button
          type="submit"
          full={true}
          loading={loading}
          label="Reset Password"
        />
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

export default ForgotPasswordForm;
