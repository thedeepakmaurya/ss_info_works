const ServicesCard = ({ title, highlights, description }) => {
  return (
    <div className="rounded-xl h-full transition-all hover:scale-105 p-2 shadow">
      <div
        className={`${title === "Custom Software Development" ? "bg-yellow-100" : title === "MLM Software Development" ? "bg-green-100" : title === "Web Development / Design" ? "bg-red-100" : title === "Android & iOS Development" ? "bg-blue-100" : title === "SEO/SMO & Marketing" ? "bg-cyan-100" : "bg-fuchsia-100"} h-full space-y-2 rounded-xl p-6 shadow`}
      >
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mb-4">{description.slice(0, 60)}</p>
        <div className="flex flex-wrap gap-2">
          {highlights?.map((highlight, i) => (
            <span
              key={i}
              className={`${title === "Custom Software Development" ? "bg-yellow-200" : title === "MLM Software Development" ? "bg-green-200" : title === "Web Development / Design" ? "bg-red-200" : title === "Android & iOS Development" ? "bg-blue-200" : title === "SEO/SMO & Marketing" ? "bg-cyan-200" : "bg-fuchsia-200"} shrink-0 rounded-full px-4 py-1 text-sm font-medium`}
            >
              {highlight}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
