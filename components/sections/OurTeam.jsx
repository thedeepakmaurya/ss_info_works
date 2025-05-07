import Image from "next/image";
import Link from "next/link";
import Heading from "../ui/Heading";

const OurTeam = ({ team }) => {
  return (
    <section className="container">
      <Heading
        title={"Meet the Team"}
        description={"Meet our dedicated team of developers."}
      />
      <div className="grid place-items-center gap-8 lg:grid-cols-4">
        {team.map(({ name, position, image, linkedin }, index) => {
          return (
            <div
              key={index}
              className="relative flex h-96 justify-center lg:h-80"
            >
              <Image
                className="h-full rounded-xl object-cover shadow"
                src={image}
                alt="member"
                width={1000}
                height={600}
              />
              <div className="absolute bottom-4 flex w-[90%] items-center justify-between rounded-xl bg-white/80 p-3 backdrop-blur-lg">
                <div>
                  <h3 className="text-lg font-medium">{name}</h3>
                  <p className="text-sm">{position}</p>
                </div>
                <Link href={linkedin}>
                  <i className="ri-linkedin-line ri-xl rounded-xl-sm bg-blue-400 p-1 text-white"></i>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default OurTeam;
