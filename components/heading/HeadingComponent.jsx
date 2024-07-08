const HeadingComponent = ({ data }) => {
  return (
    <>
      <div className="mt-3">
        <h2 className="section-title fw-normal fs-40 text-center ">
          {data.heading}
        </h2>
        <p className="font-special fs-18 mb-4 text-secondary text-center">
          {data.sub_heading}
        </p>
      </div>
    </>
  );
};

export default HeadingComponent;
