import { useEffect } from "react";
import { BiLoaderAlt } from "react-icons/bi";

const PageLoader = () => {
  useEffect(() => {
    // body overflow hidden
    document.body.style.overflow = "hidden";
    return () => {
      // body overflow auto
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <>
      <div className="h-screen">
        <BiLoaderAlt className="animate-spin" />
      </div>
      <style jsx>{`
        .h-screen {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
          background: rgba(255, 255, 255);
        }
      `}</style>
    </>
  );
};

export default PageLoader;
