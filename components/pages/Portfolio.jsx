import data from "../../public/db/data.json";
import PortfolioCard from "../blocks/PortfolioCard";

export default function PortfolioPage() {
  const { projects } = data;

  return (
    <main className="pb-5">
      <section className="container">
        <div className="grid gap-8 lg:grid-cols-4">
          {projects?.map((project, index) => (
            <PortfolioCard key={index} {...project} />
          ))}
        </div>
      </section>
    </main>
  );
}
