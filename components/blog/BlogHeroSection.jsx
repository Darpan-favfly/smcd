import dayjs from "dayjs";
import { CiCalendarDate } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";

const BlogHeroSection = () => {
  // Hardcoded data
  const data = {
    heading:
      "The Rise of Lab-Grown Diamonds: Revolutionizing the Jewelry Industry",
    description:
      "This is an example description for the blog post. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    featured_image: {
      url: "https://images.prismic.io/complymyrera/ZlV9tKWtHYXtT1bt_Zk3TFiol0Zci9WUl_OverseasDirectInvestment-ODI-UnderFEMAInIndia-11KeyPointsToBeConsidered-1-.png?auto=format%2Ccompress&rect=0%2C0%2C1200%2C600&w=1200&fit=max",
      alt: "Example Image",
    },
    published_date: "2023-06-28",
  };

  return (
    <div className="place-item layout-02 place-hover">
      <div
        className="place-inner bg-white mt-3"
        style={{
          boxShadow: "0 0 30px 0 rgb(0 0 0 / 0.07)",
          position: "relative",
          borderRadius: 12,
          MozBorderRadius: 12,
          WebkitBorderRadius: 12,
          msBorderRadius: 12,
          OBorderRadius: 12,
          WebkitBackfaceVisibility: "hidden",
          MozBackfaceVisibility: "hidden",
          overflow: "hidden",
        }}
      >
        <div className="entry-detail p-2 p-md-3">
          <div className="mb-4 d-flex justify-content-between">
            <div className="d-flex" style={{ gap: 14 }}>
              <div className="meta_date">
                <i>
                  <CiCalendarDate />
                </i>
                27 Jun, 2024
              </div>
            </div>
          </div>
          <div
            className="d-flex justify-content-between _align-items-center"
            style={{ flexDirection: "column" }}
          >
            <h1
              className="place-title blog_title pb-2"
              style={{ fontSize: 30 }}
            >
              Capturing The Perfect Groom Mehndi Poses: A Guide To Timeless
              Photos
            </h1>
            <div className="meta_author mb-3">
              <i>
                <CiUser />
              </i>
              <a target="_blank" href="/author/gurupriya-dutta">
                <span style={{ color: "rgb(254, 79, 112)" }}>
                  Gurupriya Dutta
                </span>
              </a>
            </div>
          </div>
          <div className="blog_description mb-3" style={{ fontSize: 16 }}>
            <p>
              Weddings are magical moments, full of dreams, planning, and love.
              While brides often steal the spotlight with their intricate
              mehndi, grooms are starting to shine too. Groom mehndi is becoming
              more popular, and capturing these designs and emotions perfectly
              is key to a great wedding album by the{" "}
              <a href="/wedding-photographers-in-kolkata">
                <strong>Best Wedding Photographers in Kolkata</strong>
              </a>
              . Swoon through the best groom mehndi poses, which ensure that
              your wedding memories are truly spectacular. From classic to
              creative shots, you’ll find tips here to make sure every detail of
              your mehndi is beautifully showcased.
            </p>
          </div>
          <div className="featured-image-blog">
            <img
              alt="couple mehndi pose ideas"
              fetchpriority="high"
              loading="eager"
              width={1200}
              height={600}
              src="https://images.prismic.io/shaadibook/Zn0FsJbWFbowe7m-_image12.jpg?auto=format%2Ccompress&rect=0%2C60%2C823%2C412&w=3840&fit=max"
              style={{
                color: "transparent",
                height: "auto",
                borderRadius: 15,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHeroSection;
