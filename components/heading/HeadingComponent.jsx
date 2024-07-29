const HeadingComponent = ({ data }) => {
  return (
    <div className="text-center">
      <h2 className="section-title fw-normal fs-38">{data?.heading}</h2>
      <p className="font-special fs-16 mb-4 text-secondary">
        {data?.sub_heading}
      </p>
    </div>
  );
};

export default HeadingComponent;
