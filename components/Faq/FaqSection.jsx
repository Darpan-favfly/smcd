"use client";
import { useState } from "react";
import HeadingComponent from "../heading/HeadingComponent";

const FaqSection = ({ slice }) => {
  const { heading, items } = slice?.primary;

  // State to track which accordion item is open
  const [openIndex, setOpenIndex] = useState(-1);

  // Function to toggle accordion item based on index
  const toggleAccordion = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1); // Close if it's already open
    } else {
      setOpenIndex(index); // Open the clicked item
    }
  };

  return (
    <section className="container mt-5">
      <HeadingComponent
        data={{
          heading: heading[0].text,
        }}
      />
      <div
        className="d-flex flex-column"
        style={{
          rowGap: "1rem",
        }}
      >
        {items.map((item, index) => (
          <div key={index} className="faq-accordion accordion">
            <div className="accordion-item">
              <h5
                className="accordion-header"
                id={`faq-accordion-heading-${index}`}
              >
                <button
                  className={`accordion-button ${openIndex === index ? "" : "collapsed"}`}
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={openIndex === index ? "true" : "false"}
                  aria-controls={`faq-accordion-collapse-${index}`}
                >
                  {item.question[0]?.text}
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
                id={`faq-accordion-collapse-${index}`}
                className={`accordion-collapse collapse ${openIndex === index ? "show" : ""}`}
                aria-labelledby={`faq-accordion-heading-${index}`}
              >
                <div className="accordion-body">
                  <p>{item.answer[0]?.text}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
