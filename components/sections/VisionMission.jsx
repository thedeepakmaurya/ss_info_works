import Image from "next/image";
import Heading from "../ui/Heading";
import data from "@/public/db/data.json";

const VisionMission = () => {
  const { vision } = data;
  return (
    <section className="container space-y-14">
      {vision?.map((detail, index) => {
        const { title, description, img, paragraph } = detail;
        return (
          <div key={index}>
            <Heading title={title} description={description} />
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-10">
              <div>
                <Image
                  className="h-80 rounded-xl object-cover shadow"
                  src={img}
                  alt="vision"
                  width={600}
                  height={1200}
                />
              </div>
              <div>
                <p>{paragraph}</p>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default VisionMission;
