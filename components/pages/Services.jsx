import data from "@/public/db/data.json";
import Image from "next/image";
import SubServiceCard from "../blocks/SubServiceCard";

const Services = ({ serviceId }) => {
  const { servicesbrief } = data;
  const article = servicesbrief?.filter((service) =>
    service?.id.includes(serviceId),
  );

  return (
    <main>
      <section className="container">
        {article?.map((brief, index) => {
          const { image, intro, title, article, subServices } = brief;
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
                {article?.length > 0 && (
                  <div className="space-y-6 lg:col-span-2">
                    {article?.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                )}
              </div>
              <div className="mt-6 grid gap-10 lg:grid-cols-3">
                {subServices?.map((details, index) => (
                  <SubServiceCard key={index} {...details} />
                ))}
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
};

export default Services;
