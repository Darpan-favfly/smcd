"use client";
import { useState } from "react";

const QnaSection = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="container mw-930 lh-30">
      <h2 className="section-title text-uppercase fw-bold mb-5">
        FREQUENTLY ASKED QUESTIONS
      </h2>
      <h3 className="mb-4">Orders</h3>
      <div className="faq-accordion accordion mb-5">
        <div className="accordion-item">
          <h5 className="accordion-header" id="faq-accordion-heading-3">
            <button
              className={`accordion-button ${isOpen ? "" : "collapsed"}`}
              type="button"
              onClick={toggleAccordion}
            >
              Waters one you'll creeping?
              <svg className="accordion-button__icon" viewBox="0 0 14 14">
                <g aria-hidden="true" stroke="none" fillRule="evenodd">
                  <path
                    className="svg-path-vertical"
                    d="M14,6 L14,8 L0,8 L0,6 L14,6"
                  />
                  <path
                    className="svg-path-horizontal"
                    d="M14,6 L14,8 L0,8 L0,6 L14,6"
                  />
                </g>
              </svg>
            </button>
          </h5>
          <div
            id="faq-accordion-collapse"
            className={`accordion-collapse collapse ${isOpen ? "show" : ""}`}
            aria-labelledby="faq-accordion-heading-3"
          >
            <div className="accordion-body">
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QnaSection;
