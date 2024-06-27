import dynamic from "next/dynamic";

const CountdownTimer = dynamic(
  () => import("@/components/global/CountdownTimer"),
  {
    ssr: false,
  }
);

const OfferCtaSection = () => {
  const targetDate = new Date("2024-06-28T06:50:00");

  return (
    <section
      className="deal-timer position-relative d-flex align-items-center overflow-hidden container mx-auto"
      style={{ borderRadius: "10px" }}
    >
      <div
        className="background-img"
        style={{
          backgroundImage:
            'url("https://uomo-html.flexkitux.com/images/home/demo20/banner-4.jpg")',
        }}
      />
      <div className="container px-2 px-md-3 px-lg-4 px-xl-5 position-relative">
        <div className="px-2 px-md-3 px-lg-4 px-xl-5">
          <div className="px-2 px-md-3 px-lg-4 px-xl-5">
            <div className="pb-2 mb-3 mb-xl-3 mb-xxl-4">
              <p className="text_dash text-uppercase text-red fw-normal theme-color">
                Deal of the week
              </p>
              <h2 className="fs-60 fw-normal">Summer Collection</h2>
              <CountdownTimer date={targetDate} />
              <a
                href="./shop1.html"
                className="btn-link default-underline text-uppercase fw-medium mt-3"
              >
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferCtaSection;