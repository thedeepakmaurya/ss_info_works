import Heading from "../ui/Heading";
import TeamCard from "../blocks/TeamCard";

const OurTeam = ({ team }) => {
  return (
    <section className="container">
      <Heading
        title={"Meet the Team"}
        description={"Meet our dedicated team of developers."}
      />
      <div className="grid place-items-center gap-8 lg:grid-cols-4">
        {team?.map((details, index) => (
          <TeamCard key={index} {...details} />
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
