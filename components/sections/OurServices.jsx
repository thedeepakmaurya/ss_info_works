import ServicesCard from "../blocks/ServicesCard";
import Heading from "../ui/Heading";

const OurServices = ({ services }) => {
  return (
    <section className="container">
      <Heading title={"Our Services"} description={"Our Best Services"} />
      <div className="grid gap-6 lg:grid-cols-4">
        {services?.map((service, index) => (
          <ServicesCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default OurServices;
