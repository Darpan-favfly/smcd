import HeadingComponent from "../heading/HeadingComponent";

const featuredProducts = [
  "https://static.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2024/05_may/india-homepage/special-offer/special-offer-250-29052024.jpg",
  "https://static.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2024/05_may/india-homepage/special-offer/special-offer-500-29052024.jpg",
  "https://static.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2024/05_may/india-homepage/special-offer/special-offer-750-29052024.jpg",
  "https://static.malabargoldanddiamonds.com/media/wysiwyg/offer_page/2024/05_may/india-homepage/special-offer/special-offer-1000-29052024.jpg",
];

const FeaturedProductSection = () => {
  return (
    <>
      <section>
        <HeadingComponent
          data={{
            heading: "Featured Products",
            description: "Check out our latest featured products.",
          }}
        />
        <div className="container">
          <div className="row" style={{ rowGap: 15 }}>
            {featuredProducts.map((image, index) => (
              <div className="col-lg-3 col-6" key={index}>
                <img
                  src={image}
                  alt={`Featured Product ${index + 1}`}
                  style={{ borderRadius: "10px" }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedProductSection;
