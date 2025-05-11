import Heading from "../ui/Heading";
import FeaturesCard from "../blocks/FeaturesCard";

const ChooseUs = ({ features }) => {
  return (
    <section className="container">
      <Heading
        title={"Why Choose Us"}
        description={"We Execute Our Ideas from  Start to Finish"}
      />
      <div className="grid gap-4 lg:grid-cols-2">
        {features?.map((feature, index) => (
          <FeaturesCard key={index} index={index} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default ChooseUs;
