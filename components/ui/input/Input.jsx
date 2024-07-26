import { useState } from "react";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";

const Input = ({
  value,
  handleChange,
  label,
  name,
  type,
  disabled,
  required,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <div className="form-floating">
        <input
          value={value}
          onChange={handleChange}
          name={name}
          type={type === "password" && showPassword ? "text" : type}
          className="form-control form-control_gray"
          id={name}
          disabled={disabled}
          placeholder={label}
          required={required}
        />
        <label htmlFor={name}>{label}</label>

        {type === "password" && (
          <i onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <FiEye /> : <FiEyeOff />}
          </i>
        )}
      </div>

      <style jsx>{`
        i {
          position: absolute;
          top: 50%;
          right: 20px;
          transform: translateY(-50%);
          cursor: pointer;
          font-size: 1.2rem;
        }
      `}</style>
    </>
  );
};

export default Input;
