"use client";

import Link from "next/link";

const CtaSection = () => {
  return (
    <>
      <section className="lookbook-products container">
        <div className="row position-relative">
          <div className="col-lg-6 col-sm-6 p-0 position-relative">
            <img
              src="https://i.ibb.co/HrvhBLN/1a.png"
              alt="lookbook-1"
              border="0"
              className="w-100 h-auto img-1"
            />
          </div>
          <div className="col-lg-6 col-sm-6 p-0 position-relative">
            <img
              src="https://i.ibb.co/xMQCjcw/2-2.png"
              alt="lookbook-2"
              border="0"
              className="w-100 h-auto img-2"
            />
          </div>
          <div className="overlay position-absolute d-flex flex-column justify-content-center align-items-center text-center bg-white p-4">
            <h3 className="fs-22 fw-medium text-uppercase mb-2">
              Bring Out The Hidden Beauty
            </h3>
            <p className="fs-15 color-gray-5a5a5a mb-2 desc">
              Get styled with the high-fashion products and transform yourself.
            </p>
            <Link
              href="/collection"
              className="btn-link btn-link_md default-underline text-uppercase fw-medium"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        .overlay {
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);

          max-width: 500px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.8);
        }
        .fs-22 {
          font-size: 22px;
        }
        .fs-15 {
          font-size: 15px;
        }
        .img-1 {
          border-radius: 15px 0 0 15px;
        }
        .img-2 {
          border-radius: 0 15px 15px 0;
        }
        .color-gray-5a5a5a {
          color: #5a5a5a;
        }
        .btn-link_md {
          font-size: 1rem;
        }

        @media (max-width: 576px) {
          .fs-22 {
            font-size: 18px;
          }
          .fs-15 {
            font-size: 14px;
          }
          .img-1 {
            border-radius: 15px 15px 0 0;
          }
          .img-2 {
            border-radius: 0 0 15px 15px;
          }
          .btn-link_md {
            font-size: 0.875rem;
          }
          .overlay {
            max-width: 90%;
          }
          .desc {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default CtaSection;
