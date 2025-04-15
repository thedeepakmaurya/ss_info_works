import data from "../../public/db/data.json";
import Button from "../ui/Button";

export default function PricePage() {
  const { pricing } = data;

  return (
    <section className="grid gap-6 px-3  lg:grid-cols-4 lg:px-20">
      {pricing.map(({ title, description, price, features }, index) => {
        return (
          <div
            key={index}
            className="rounded-xl border border-orange-200 bg-orange-50"
          >
            <div className="border-b border-dashed border-orange-200 p-4">
              <h3>{title}</h3>
              <p className="mb-4 text-sm">{description}</p>
              <h4>
                ₹
                <span className="text-3xl font-semibold text-red-400">
                  {price}/-
                </span>
              </h4>
            </div>
            <div className="p-4">
              <ul className="mb-4 space-y-1 text-sm">
                {features.map((feature, i) => {
                  return (
                    <li key={i} className="flex gap-2">
                      <i className="ri-check-double-line"></i> {feature}
                    </li>
                  );
                })}
              </ul>
              <Button text="Get Started" url="/contact" style="w-full" />
            </div>
          </div>
        );
      })}
    </section>
  );
}
