"use client";
import { useRouter } from "next/navigation";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";

const SearchButton = () => {
  // ===== INITIALIZING STATES =====
  const [isOpen, setIsOpen] = useState(false);

  const [value, setValue] = useState("");

  // ===== INITIALIZING HOOKS =====
  const router = useRouter();

  // ===== HANDLE SUBMIT =====
  const handleSubmit = (e) => {
    e.preventDefault();

    if (value.trim() === "") return;

    router.push(`/search?q=${value}`);

    setValue("");
    setIsOpen(false);
  };

  return (
    <div className="header-tools__item hover-container js-content_visible d-none  d-lg-block">
      <button
        className="header-tools__item me-0"
        onClick={() => setIsOpen(!isOpen)}
      >
        <CiSearch />
      </button>

      {isOpen && (
        <div className="search-popup js-hidden-content">
          <form className="search-field container" onSubmit={handleSubmit}>
            <p className="text-uppercase text-secondary fw-medium mb-0">
              What are you looking for?
            </p>
            <div className="position-relative">
              <input
                className="search-field__input search-popup__input w-100 fw-medium"
                type="text"
                name="search-keyword"
                placeholder="Search products"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <button
                className="btn-icon search-popup__submit d-flex justify-content-center align-items-center pb-0 px-2"
                type="submit"
              >
                <CiSearch />
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export const MobileSearchBar = ({ setOpen }) => {
  const [value, setValue] = useState("");

  // ===== INITIALIZING HOOKS =====
  const router = useRouter();

  // ===== HANDLE SUBMIT =====
  const handleSubmit = (e) => {
    e.preventDefault();

    if (value.trim() === "") return;

    router.push(`/search?q=${value}`);

    setValue("");
    setOpen(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="search-field position-relative mt-4 mb-3"
    >
      <div className="position-relative">
        <input
          className="search-field__input w-100 border rounded-1"
          type="text"
          name="search-keyword"
          placeholder="Search products"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          className="btn-icon search-popup__submit pb-0 me-2"
          style={{
            fontSize: "1.5rem",
          }}
          type="submit"
        >
          <CiSearch />
        </button>
      </div>
    </form>
  );
};

export default SearchButton;
