import Image from "next/image";
import Heading from "../ui/Heading";
import StatCard from "../blocks/StatCard";
import data from "@/public/db/data.json";

const HowStarted = ({ stat }) => {
  const { aboutinfo } = data;
  return (
    <section className="container">
      <Heading
        title={"How it started"}
        description={"Empowering the World Through Digital Innovation"}
      />
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-10">
        <div className="order-2 row-span-2 space-y-4 lg:order-1">
          {aboutinfo.map((info, index) => (
            <p key={index}>{info}</p>
          ))}
        </div>
        <div className="order-1 h-48 lg:order-2">
          <Image
            className="h-full rounded-xl object-cover shadow"
            src="/img/banner/digital_innovation.webp"
            alt="digital_innovation"
            width={1200}
            height={600}
          />
        </div>
        <div className="order-3 grid grid-cols-2 gap-4 lg:order-3">
          {stat?.map((item, index) => (
            <StatCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowStarted;
