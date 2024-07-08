const SecondaryHeroSection = ({ slice }) => {
  const { heading, description } = slice?.primary || {};
  return (
    <div
      className="secondary-hero-section"
      style={{ backgroundImage: `url(${slice?.primary.image.url})` }}
    >
      <div className="content">
        <h1>{heading[0]?.text}</h1>
        <p>{description[0]?.text}</p>
      </div>
    </div>
  );
};

export default SecondaryHeroSection;
