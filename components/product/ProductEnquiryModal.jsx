"use client";
import { IoMdClose } from "react-icons/io";

const ProductEnquiryModal = ({ showModal, setShowModal }) => {
  return (
    <>
      <div className={`modal-container px-2 ${!showModal && "d-none"}`}>
        <div className="modal-overlay" onClick={() => setShowModal(false)} />
        <div className="modal-content text-center">
          <i onClick={() => setShowModal(false)}>
            <IoMdClose />
          </i>
          <h3>Request A Callback</h3>
          <iframe
            style={{ border: "none", width: "100%" }}
            id="smc-product-inquery-n9y35l"
            src="https://opnform.com/forms/smc-product-inquery-n9y35l"
          ></iframe>
        </div>
      </div>

      <style jsx>{`
        .modal-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 999;
        }

        .modal-content {
          background: #fff;
          padding: 1rem 0;
          border-radius: 15px;
          width: 100%;
          max-width: 450px;
          overflow-y: auto;
        }
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(5px);
          z-index: -1;
        }
        iframe {
          height: 400px;
        }
        i {
          font-size: 1.5rem;
          position: absolute;
          top: 0rem;
          right: 0.5rem;
          cursor: pointer;
        }
      `}</style>
    </>
  );
};

export default ProductEnquiryModal;
