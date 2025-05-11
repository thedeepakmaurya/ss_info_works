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
          const { image, intro, title, article, technologies } = brief;
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
                {technologies?.length > 0 && (
                  <div className="flex flex-wrap gap-4 lg:col-span-2">
                    {technologies?.map((technology, i) => {
                      return (
                        <p
                          key={i}
                          className={`rounded-full bg-blue-200 px-4 py-1 text-sm font-medium`}
                        >
                          {technology}
                        </p>
                      );
                    })}
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
};

export default Services;
