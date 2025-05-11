import data from "@/public/db/data.json";
import Image from "next/image";

const Services = ({ serviceId }) => {
  const { servicesbrief } = data;
  const article = servicesbrief?.filter((service) =>
    service?.id.includes(serviceId),
  );

  return (
    <main>
      <section className="container">
        {article?.map((brief, index) => {
          const { image, intro, title } = brief;
          return (
            <article key={index}>
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-10">
                <Image
                  className="h-60 rounded-xl object-cover lg:h-[500px]"
                  src={image}
                  alt="web development"
                  width={600}
                  height={600}
                />
                <div>
                  <h2>
                    <span className="text-orange-400"> {title?.main}</span>{" "}
                    {title?.span}
                  </h2>
                  <div className="space-y-6">
                    {intro?.map((item, index) => (
                      <p key={index}>{item}</p>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
};

export default Services;
