import Image from "next/image";
import data from "@/public/db/data.json";

const Service = ({ slug }) => {
  const { servicesPage } = data;
  const filteredServices = servicesPage.filter((item) =>
    item.slug.includes(slug),
  );
  return (
    <section className="container">
      {filteredServices.map((item, index) => {
        return (
          <div className="space-y-6" key={index}>
            <Image
              className="h-96 w-full rounded-xl object-cover"
              src={item.img}
              alt={item.title}
              width={1200}
              height={600}
            />
            <h2>{item.title}</h2>
            {item.paragraph.map((paragraph, index) => (
              <p key={index} className="mb-6">
                {paragraph}
              </p>
            ))}
            <h2>Technologies that we use</h2>
            <ul className="flex gap-8">
              {item.technologies.map((tech, index) => (
                <li key={index} className="mb-2 text-blue-400 capitalize">
                  {tech}
                </li>
              ))}
              <li></li>
            </ul>
          </div>
        );
      })}
    </section>
  );
};

export default Service;
