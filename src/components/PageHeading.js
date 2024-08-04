const PageHeading = ({ title, description }) => {
  return (
    <div className="text-center mb-3 mb-md-4" data-aos="flip-up"
      data-aos-anchor-placement="bottom-bottom" data-aos-easing="linear"
      data-aos-duration="500">
      <h2 className="mb-2 text-primary fw-semibold lh-sm">{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default PageHeading;