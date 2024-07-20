"use client";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { Toaster } from "react-hot-toast";
import { userProfileStore } from "@/store/userStore";

const LoginAndRegister = ({
  openSignUp,
  setOpenSignUp,
  togglePageOverlay,
  toggleAuthSideBar,
}) => {
  const [isLoginVisible, setIsLoginVisible] = useState(true);
  const [isResetPasswordVisible, setIsResetPasswordVisible] = useState(false);
  const [isRegisterVisible, setIsRegisterVisible] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {
    handleEmailPasswordSignUp,
    handleEmailPasswordLogin,
    handleForgotPassword,
  } = userProfileStore();

  const showLogin = () => {
    setIsLoginVisible(true);
    setIsRegisterVisible(false);
    setIsResetPasswordVisible(false);
  };

  const showRegister = () => {
    setIsRegisterVisible(true);
    setIsLoginVisible(false);
    setIsResetPasswordVisible(false);
  };
  const showResetPassword = () => {
    setIsResetPasswordVisible(true);
    setIsLoginVisible(false);
    setIsRegisterVisible(false);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    await handleEmailPasswordSignUp({ name, email, password });
    setIsSuccess(true);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log({ email, password });
    await handleEmailPasswordLogin({ email, password });
    setIsSuccess(true);
    toggleAuthSideBar();
  };
  const handleResetPassword = async (e) => {
    e.preventDefault();
    await handleForgotPassword({ email });
    setIsResetPasswordVisible(false);
    setIsLoginVisible(true);
  };
  return (
    <>
      <Toaster />
      <div
        className={`aside aside_right overflow-hidden customer-forms ${openSignUp ? "aside_visible" : ""}`}
        id="customerForms"
      >
        <div className="customer-forms__wrapper d-flex position-relative">
          {isLoginVisible && (
            <div className="customer__login">
              <div className="aside-header d-flex align-items-center">
                <h3 className="text-uppercase fs-6 mb-0">Login</h3>
                <button
                  className="btn-close-lg js-close-aside ms-auto"
                  onClick={toggleAuthSideBar}
                >
                  <IoClose />
                </button>
              </div>
              <form className="aside-content" onSubmit={handleLogin}>
                <div className="form-floating mb-3">
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    name="email"
                    type="email"
                    className="form-control form-control_gray"
                    id="customerNameEmailInput"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="customerNameEmailInput">
                    Username or email address *
                  </label>
                </div>
                <div className="pb-3" />
                <div className="form-label-fixed mb-3">
                  <label htmlFor="customerPasswordInput" className="form-label">
                    Password *
                  </label>
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    name="password"
                    id="customerPasswordInput"
                    className="form-control form-control_gray"
                    type="password"
                    placeholder="********"
                  />
                </div>
                <div className="d-flex align-items-center mb-3 pb-2">
                  <div className="form-check mb-0">
                    <input
                      name="remember"
                      className="form-check-input form-check-input_fill"
                      type="checkbox"
                      defaultValue=""
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label text-secondary"
                      htmlFor="flexCheckDefault"
                    >
                      Remember me
                    </label>
                  </div>
                  <button
                    className="btn-text ms-auto"
                    onClick={showResetPassword}
                  >
                    Lost password?
                  </button>
                </div>
                <button
                  className="btn btn-primary w-100 text-uppercase"
                  type="submit"
                >
                  Log In
                </button>
                <div className="customer-option mt-4 text-center">
                  <span className="text-secondary">No account yet?</span>
                  <button
                    className="btn-text js-show-register"
                    onClick={showRegister}
                  >
                    Create Account
                  </button>
                </div>
              </form>
              {isResetPasswordVisible && (
                <div className="customer__reset-password">
                  <div className="aside-header d-flex align-items-center">
                    <h3 className="text-uppercase fs-6 mb-0">Reset Password</h3>
                    <button
                      className="btn-close-lg js-close-aside ms-auto"
                      onClick={toggleAuthSideBar}
                    >
                      <IoClose />
                    </button>
                  </div>
                  <form className="aside-content">
                    <div className="form-floating mb-3">
                      <input
                        name="email"
                        type="email"
                        className="form-control form-control_gray"
                        id="resetPasswordEmailInput"
                        placeholder="name@example.com"
                      />
                      <label htmlFor="resetPasswordEmailInput">
                        Email address *
                      </label>
                    </div>
                    <button
                      className="btn btn-primary w-100 text-uppercase"
                      type="submit"
                    >
                      Reset Password
                    </button>
                    <div className="customer-option mt-4 text-center">
                      <span className="text-secondary">
                        Remember your password?
                      </span>
                      <button
                        className="btn-text js-show-login"
                        onClick={showLogin}
                      >
                        Login
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          )}
          {isRegisterVisible && (
            <div className="customer__register">
              <div className="aside-header d-flex align-items-center">
                <h3 className="text-uppercase fs-6 mb-0">Create an account</h3>
                <button
                  className="btn-close-lg js-close-aside btn-close-aside ms-auto"
                  onClick={toggleAuthSideBar}
                >
                  <IoClose />
                </button>
              </div>
              <form className="aside-content" onSubmit={handleSignUp}>
                <div className="form-floating mb-4">
                  <input
                    onChange={(e) => setName(e.target.value)}
                    name="name"
                    type="text"
                    className="form-control form-control_gray"
                    id="registerUserNameInput"
                    placeholder="Enter Your Full Name"
                  />
                  <label htmlFor="registerUserNameInput">Full Name</label>
                </div>
                <div className="pb-1" />
                <div className="form-floating mb-4">
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    name="email"
                    type="email"
                    className="form-control form-control_gray"
                    id="registerUserEmailInput"
                    placeholder="user@company.com"
                  />
                  <label htmlFor="registerUserEmailInput">
                    Email address *
                  </label>
                </div>
                <div className="pb-1" />
                <div className="form-label-fixed mb-4">
                  <label htmlFor="registerPasswordInput" className="form-label">
                    Password *
                  </label>
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    name="password"
                    id="registerPasswordInput"
                    className="form-control form-control_gray"
                    type="password"
                    placeholder="*******"
                  />
                </div>
                <p className="text-secondary mb-4">
                  Your personal data will be used to support your experience
                  throughout this website, to manage access to your account, and
                  for other purposes described in our privacy policy.
                </p>
                <button
                  className="btn btn-primary w-100 text-uppercase"
                  type="submit"
                >
                  Register
                </button>
                <div className="customer-option mt-4 text-center">
                  <span className="text-secondary">
                    Already have an account?
                  </span>
                  <button
                    className="btn-text js-show-login"
                    onClick={showLogin}
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          )}
          {isResetPasswordVisible && (
            <div className="customer__login">
              <div className="aside-header d-flex align-items-center">
                <h3 className="text-uppercase fs-6 mb-0">
                  Reset Your Password
                </h3>
                <button
                  className="btn-close-lg js-close-aside ms-auto"
                  onClick={toggleAuthSideBar}
                >
                  <IoClose />
                </button>
              </div>
              <form className="aside-content" onSubmit={handleResetPassword}>
                <div className="form-floating mb-3">
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    name="email"
                    type="email"
                    className="form-control form-control_gray"
                    id="customerNameEmailInput"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="customerNameEmailInput">
                    Username or email address *
                  </label>
                </div>

                <button
                  className="btn btn-primary w-100 text-uppercase"
                  type="submit"
                >
                  Reset Password
                </button>
                <div className="customer-option mt-4 text-center">
                  <span className="text-secondary">No account yet?</span>
                  <button
                    className="btn-text js-show-register"
                    onClick={showRegister}
                  >
                    Create Account
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default LoginAndRegister;
