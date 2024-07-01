import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  LinkedinIcon,
} from "react-share";

const ShareSection = ({ url }) => {
  return (
    <>
      <div className="share-links clearfix">
        <div className="row justify-content-end">
          <div className="col-sm-auto text-xl-end d-flex align-items-center">
            <span className="share-links-title me-2">Share:</span>
            <div className="social-links">
              <div>
                <FacebookShareButton url={url}>
                  <FacebookIcon size={30} round={true} />
                </FacebookShareButton>
              </div>
              <div>
                <WhatsappShareButton url={url}>
                  <WhatsappIcon size={30} round={true} />
                </WhatsappShareButton>
              </div>
              <div>
                <LinkedinShareButton url={url}>
                  <LinkedinIcon size={30} round={true} />
                </LinkedinShareButton>
              </div>
              <div>
                <TwitterShareButton url={url}>
                  <TwitterIcon size={30} round={true} />
                </TwitterShareButton>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .share-links-title {
          font-size: 20px;
          font-weight: 500;
          margin-bottom: 0;
        }
        .social-links {
          display: flex;
        }
        .social-links div {
          margin-right: 10px;
        }
      `}</style>
    </>
  );
};

export default ShareSection;
