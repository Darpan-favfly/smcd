"use client";
import SliderComponent from "../ui/slider/SliderComponent";
import SignUpForm from "./forms/SignUpForm";

import { useSearchParams } from "next/navigation";
import LoginForm from "./forms/LoginForm";
import ForgotPasswordForm from "./forms/ForgotPasswordForm";
import { useEffect } from "react";
import ResetPasswordForm from "./forms/ResetPassword";

const AuthSliderSectionComponent = ({ isOpen, setIsOpen }) => {
  // ===== INITIALIZING HOOKS =====
  const auth = useSearchParams().get("auth");
  const open = useSearchParams().get("open");

  let title;

  switch (auth) {
    case "signup":
      title = "Sign Up";
      break;
    case "login":
      title = "Login";
      break;
    case "forgot":
      title = "Forgot Password";
      break;
    case "reset":
      title = "Reset Password";
      break;

    default:
      title = "Sign Up";
  }

  // ===== SETTING OPEN STATE =====
  useEffect(() => {
    if (open) {
      setIsOpen(true);
    }
  }, [open]);

  return (
    <SliderComponent isOpen={isOpen} setIsOpen={setIsOpen} title={title}>
      {{
        signup: <SignUpForm setIsOpen={setIsOpen} />,
        login: <LoginForm setIsOpen={setIsOpen} />,
        forgot: <ForgotPasswordForm />,
        reset: <ResetPasswordForm />,
      }[auth] || <LoginForm setIsOpen={setIsOpen} />}
    </SliderComponent>
  );
};

export default AuthSliderSectionComponent;
