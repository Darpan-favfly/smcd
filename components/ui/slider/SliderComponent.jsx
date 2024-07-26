import { IoClose } from "react-icons/io5";

const SliderComponent = ({ isOpen, setIsOpen, title, children }) => {
  return (
    <>
      {isOpen && (
        <div>
          {/* // ===== SLIDER OVERLAY ===== */}
          {isOpen && (
            <div
              className="page-overlay page-overlay_visible"
              onClick={() => setIsOpen(false)}
            />
          )}

          {/* // ===== SLIDER BODY ===== */}
          <div
            className={`aside aside_right overflow-hidden customer-forms ${isOpen && "aside_visible"}`}
          >
            <div className="aside-header d-flex align-items-center mb-4">
              <h3 className="text-uppercase fs-6 mb-0">{title}</h3>
              <button
                className="btn-close-lg js-close-aside ms-auto"
                onClick={() => setIsOpen(false)}
              >
                <IoClose />
              </button>
            </div>

            <div
              className="aside-body"
              style={{
                maxHeight: `calc(100vh - 120px)`,
                overflowY: "auto",
              }}
            >
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SliderComponent;
