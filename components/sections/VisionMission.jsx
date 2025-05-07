import Image from "next/image";
import Heading from "../ui/Heading";

const VisionMission = () => {
  return (
    <section className="container space-y-14">
      {/* our Vision */}
      <div>
        <Heading
          title={"Our Vision"}
          description={"Empowering the digital future, one solution at a time"}
        />
        <div className="grid gap-6 lg:gap-10 lg:grid-cols-2">
          <div>
            <Image
              className="h-80 rounded-xl object-cover shadow"
              src="/img/banner/vision.webp"
              alt="vision"
              width={600}
              height={1200}
            />
          </div>
          <div>
            <p>
              <strong>At Ss Infoworks Technology</strong>, our vision is to
              become the top recognized regional leader in custom software
              innovation for forward-thinking businesses across industries. By
              investing in a growing team of makers, doers, and thinkers who
              live at the bleeding edge of technology, we plan to bring
              tomorrow's solutions to life today. By forging long-term
              collaborative partnerships with clients grounded-xl in
              transparency and trust, we will work tirelessly to understand
              needs, users and markets on a deeper level that informs tailored
              solutions perfectly aligned to diverse business goals. Leveraging
              the latest techniques like design sprints, rapid prototyping and
              agile development; our vision sets the stage to deliver 100+
              software projects annually to the highest standards of excellence.
              We envision our work and contributions making a meaningful
              difference for partners while boosting prosperity and opportunity
              in our community. Our team welcomes growth opportunities that
              allow us to experiment, take risks, learn rapidly and continue
              raising the bar on innovation through technology.
            </p>
          </div>
        </div>
      </div>
      {/* our mission */}
      <div>
        <Heading
          title={"Our Mission"}
          description={"Driven by innovation, Focused on your success"}
        />
        <div className="grid gap-6 lg:gap-10 lg:grid-cols-2">
          <div>
            <Image
              className="h-80 rounded-xl object-cover shadow"
              src="/img/banner/mission.webp"
              alt="mission"
              width={600}
              height={1200}
            />
          </div>
          <div>
            <p>
              <strong>At Ss Infoworks Technology</strong>, our mission is to be
              the leading web and mobile app development resource in the Delhi
              for startups and businesses who want to unlock their potential
              through technology innovation. We leverage deep expertise with
              today's most cutting-edge platforms, frameworks, and design
              practices to craft custom solutions that solve real business
              challenges and deliver tangible ROI across web, native, and
              emerging tech. Our collaborative, transparent process centered
              around understanding needs first enables us to solve problems
              creatively and build exactly what our clients require for
              long-term success with users and markets. Backed by proven
              experience transforming ideas into elegant apps, websites and
              custom platforms loved by customers - our team of creative
              developers and expert designers deliver solutions that grow with
              our partners and set them apart digitally. Through a relentless
              focus on quality, communication and results - our mission is to
              forge partnerships that spark innovation and big thinking for
              businesses in the region through smart, useful software.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
