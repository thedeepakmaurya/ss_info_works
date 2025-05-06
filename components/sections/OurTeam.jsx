import Image from "next/image";
import Link from "next/link";

const OurTeam = ({ team }) => {
  return (
    <section className="container"> 
      <div className="text-center mb-6 lg:mb-12">
        <h5>Meet the Team</h5>
        <h2>
          Meet our dedicated team
          <br /> of developers.
        </h2>
      </div>
      <div className="grid gap-8 place-items-center lg:grid-cols-4">
        {team.map(({ name, position, image, linkedin }, index) => {
          return (
            <div key={index} className="relative flex h-96  lg:h-80 justify-center">
              <Image
                className="h-full rounded-xl shadow object-cover"
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
