import Image from "next/image";
import { CiStar, CiUser, CiBookmarkCheck, CiFaceSmile } from "react-icons/ci";
import Heading from "../ui/Heading";

const HowStarted = ({ stat }) => {
  const icons = {
    CiStar,
    CiUser,
    CiBookmarkCheck,
    CiFaceSmile,
  };

  return (
    <section className="container">
      <Heading
        title={"How it started"}
        description={"Empowering the World Through Digital Innovation"}
      />
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-10">
        <div className="order-2 row-span-2 space-y-4 lg:order-1">
          <p>
            “<strong>At Ss Infoworks Technology</strong>, we are driven by a
            passion for technology and innovation. Founded with the vision to
            deliver smart, scalable, and future-ready digital solutions, we
            specialize in providing end-to-end IT services that empower
            businesses to grow, transform, and thrive in a digital-first world.
          </p>
          <p>
            With a strong focus on quality, performance, and customer
            satisfaction, we bring together a talented team of developers,
            designers, and strategists who are committed to pushing boundaries
            and delivering impactful solutions. From custom Website Development
            software development, mobile and web applications, Social Media
            Promotions, SEO and IT consulting—our offerings are tailored to meet
            the unique needs of every client.
          </p>
          <p>
            What sets us apart is our collaborative approach, transparent
            communication, and unwavering commitment to excellence. Whether
            you're a startup or an enterprise, Ss Infoworks Technology is your
            trusted technology partner, helping you stay ahead in a rapidly
            evolving digital landscape.
          </p>
          <p>
            <strong> Innovation. Integrity. Impact</strong>. That’s the Ss
            Infoworks promise.”
          </p>
        </div>
        <div className="order-1 h-48 lg:order-2">
          <Image
            className="h-full rounded-xl object-cover shadow"
            src="/img/banner/digital_innovation.jpg"
            alt="digital_innovation"
            width={1200}
            height={600}
          />
        </div>
        <div className="order-3 grid grid-cols-2 gap-4 lg:order-3">
          {stat?.map(({ title, value, icon }, index) => {
            const Icon = icons[icon];
            return (
              <div
                key={index}
                className="relative overflow-hidden rounded-xl bg-blue-100 p-6 shadow"
              >
                <div>
                  <h3 className="text-2xl font-bold">{value}</h3>
                  <p className="capitalize">{title}</p>
                </div>
                <div className="absolute top-0 right-0 flex h-14 w-14 items-center justify-center rounded-tr-xl rounded-bl-full bg-blue-400">
                  {Icon && <Icon size="32" color="white" />}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowStarted;
