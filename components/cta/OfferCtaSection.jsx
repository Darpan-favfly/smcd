import dynamic from "next/dynamic";
import { PrismicNextLink } from "@prismicio/next";

const CountdownTimer = dynamic(
  () => import("@/components/global/CountdownTimer"),
  {
    ssr: false,
  }
);

const OfferCtaSection = ({ slice }) => {
  const { heading, sub_heading, image, button_link, button_label, end_date } =
    slice?.primary;

  const targetDate = new Date(end_date);

  return (
    <section className="container">
      <div
        style={{ borderRadius: "10px" }}
        className="deal-timer position-relative d-flex align-items-center overflow-hidden "
      >
        <div
          className="background-img"
          style={{
            backgroundImage: `url(${image?.url})`,
          }}
        />
        <div className="position-relative offer-cta-text">
          <div>
            <p className="text_dash text-uppercase text-red fw-normal theme-color">
              {sub_heading[0]?.text}
            </p>
            <h2 className="fs-60 fw-normal">{heading[0]?.text}</h2>
            <CountdownTimer date={targetDate} />
            <PrismicNextLink
              href={button_link.url}
              className="btn-link default-underline text-uppercase fw-medium mt-3"
            >
              {button_label}
            </PrismicNextLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferCtaSection;
