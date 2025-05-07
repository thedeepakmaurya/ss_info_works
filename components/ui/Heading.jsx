const Heading = ({ title, description }) => {
  return (
    <div className="mx-auto pb-6 text-center lg:w-[40%] lg:pb-10">
      <h5>{title}</h5>
      <h2>{description}</h2>
    </div>
  );
};

export default Heading;
