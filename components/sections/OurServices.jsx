import Heading from "../ui/Heading";

const OurServices = ({ services }) => {
  return (
    <section className="container">
      <Heading title={'Our Services'} description={'Our Best Services'} />
      <div className="grid gap-6 lg:grid-cols-4">
        {services?.map(({ title, description, highlights }, index) => {
          return (
            <div key={index} className="rounded-xl p-2 shadow">
              <div
                className={`${title === "Customize Software Development" ? "bg-yellow-100" : title === "MLM Software Development" ? "bg-green-100" : title === "Web Development / Design" ? "bg-red-100" : title === "Android & IOS Application" ? "bg-blue-100" : title === "SEO/SMO & Marketing" ? "bg-cyan-100" : "bg-fuchsia-100"} h-full space-y-2 rounded-xl p-6 shadow`}
              >
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="mb-4">{description.slice(0, 60)}</p>
                <div className="flex flex-wrap gap-2">
                  {highlights?.map((highlight, i) => (
                    <span
                      key={i}
                      className={`${title === "Customize Software Development" ? "bg-yellow-200" : title === "MLM Software Development" ? "bg-green-200" : title === "Web Development / Design" ? "bg-red-200" : title === "Android & IOS Application" ? "bg-blue-200" : title === "SEO/SMO & Marketing" ? "bg-cyan-200" : "bg-fuchsia-200"} shrink-0 rounded-full px-4 py-1 text-sm font-medium`}
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default OurServices;
