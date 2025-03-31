import Link from "next/link";
import data from "../../public/db/data.json";

export default function PricePage() {
  const { pricing } = data;

  return (
    <section className="grid gap-6 px-3 lg:grid-cols-4 lg:px-20">
      {pricing.map(({ title, description, price, features }, index) => {
        return (
          <div
            key={index}
            className="rounded-sm border border-orange-200 bg-orange-50"
          >
            <div className="border-b border-dashed border-orange-200 p-4">
              <h4 className="mb-1 font-medium">{title}</h4>
              <p className="mb-4 text-sm">{description}</p>
              <h5>
                ₹ <span className="text-3xl font-bold">{price}/-</span>
              </h5>
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
              <Link href="/contact">
                <button className="w-full cursor-pointer rounded-sm bg-gradient-to-r from-orange-400 to-blue-400 to-50% px-4 py-1.5 text-white transition-all duration-300 ease-in-out hover:scale-105">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        );
      })}
    </section>
  );
}
