import Image from "next/image";
import Button from "../ui/Button";
import Heading from "../ui/Heading";
import data from "@/public/db/data.json";

const Introduction = () => {
  const { aboutinfo } = data;
  return (
    <section className="container">
      <Heading
        title={"About Company"}
        description={"Application & Wesite Development Company"}
      />
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-10">
        <div className="h-80 w-full object-cover lg:h-full">
          <Image
            className="h-full w-full rounded-xl object-cover shadow"
            src="/img/banner/technology.webp"
            alt="works"
            width={600}
            height={1200}
            priority
          />
        </div>
        <div className="space-y-4">
          {aboutinfo.map((info, index) => (
            <p key={index}>{info}</p>
          ))}
          <Button text="Learn more" url="/about" style="" />
        </div>
      </div>
    </section>
  );
};

export default Introduction;
