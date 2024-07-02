import dynamic from "next/dynamic";
import HeadingComponent from "../heading/HeadingComponent";
import Link from "next/link";

const CountdownTimer = dynamic(
  () => import("@/components/global/CountdownTimer"),
  {
    ssr: false,
  }
);

const OfferCtaSection = () => {
  const targetDate = new Date("2024-07-02T06:50:00");

  return (
    <>
      {/* <HeadingComponent
        data={{
          heading: "Our Offer Zone!",
          description: "Checkout our Offers of the Day!",
        }}
      /> */}
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
                <Link
                  href="/collection"
                  className="btn-link default-underline text-uppercase fw-medium mt-3"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OfferCtaSection;
