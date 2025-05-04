import {
  CiCircleCheck,
  CiLaptop,
  CiMobile1,
  CiMobile3,
  CiShoppingCart,
} from "react-icons/ci";
import data from "../../public/db/data.json";
import Button from "../ui/Button";

export default function PricePage() {
  const { pricing } = data;

  const icons = {
    CiLaptop,
    CiShoppingCart,
    CiMobile1,
    CiMobile3,
  };

  return (
    <section className="container grid gap-10 lg:grid-cols-3">
      {pricing.map(({ title, description, price, features, icon }, index) => {
        const Icon = icons[icon];

        return (
          <div
            key={index}
            className="group transition-all duration-300 ease-in-out relative h-fit rounded border hover:border-blue-200 hover:bg-blue-50 border-orange-200 bg-orange-50"
          >
            <div className="absolute top-0 right-0 flex h-18 w-18 items-center justify-center rounded-bl-full group-hover:bg-blue-400 bg-orange-400">
              {Icon && <Icon size="36" color="white" />}
            </div>
            <div className="border-b group-hover:border-blue-200 border-orange-200 p-8">
              <h3>{title}</h3>
              <p className="mb-4">{description}</p>
              <h4>
                ₹
                <span className="text-3xl font-semibold group-hover:text-blue-400 text-orange-400">
                  {" "}
                  {price}/-
                </span>
              </h4>
            </div>
            <div className="p-8">
              <ul className="mb-4 space-y-1">
                {features.map((feature, i) => {
                  return (
                    <li key={i} className="flex gap-2">
                      <CiCircleCheck className="shrink-0" />
                      {feature}
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
