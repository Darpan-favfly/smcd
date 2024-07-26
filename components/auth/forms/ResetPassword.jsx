import { useState } from "react";
import Input from "../../ui/input/Input";
import Button from "../../ui/button/Button";
import { userProfileStore } from "@/storage/userProfileStore";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

const ResetPasswordForm = () => {
  // ====== INITIALIZING FORM FIELDS ======
  const formFields = [
    {
      label: "New Password",
      name: "newPassword",
      value: "",
      type: "text",
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
  const { handleResetPassword } = userProfileStore();

  // ====== GET QUERY VALUES ======
  const actionCode = useSearchParams().get("oobCode");

  // ====== INITIALIZING HOOKS ======
  const router = useRouter();
  const pathname = usePathname();

  // ===== HANDLE FORM SUBMISSION =====
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    const { newPassword } = formData;
    const res = await handleResetPassword({ actionCode, newPassword });

    if (res) {
      router.push(`${pathname}?auth=login`);
    }

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

export default ResetPasswordForm;
