
import data from "../../public/db/data.json";
import PriceCard from "../blocks/PriceCard";

export default function PricePage() {
  const { pricing } = data;

  

  return (
    <main className="pb-5">
      <section className="container grid gap-10 lg:grid-cols-3 ">
        {pricing?.map(
          (details, index) => <PriceCard key={index} {...details} />
        )}
      </section>
    </main>
  );
}
