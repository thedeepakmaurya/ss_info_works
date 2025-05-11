import {
  CiCircleCheck,
  CiLaptop,
  CiMobile1,
  CiMobile3,
  CiShoppingCart,
} from "react-icons/ci";
import Button from "../ui/Button";

const PriceCard = ({ title, description, price, features, icon }) => {
  const icons = {
    CiLaptop,
    CiShoppingCart,
    CiMobile1,
    CiMobile3,
  };

  const Icon = icons[icon];

  return (
    <div className="group relative overflow-hidden rounded-xl bg-orange-100 shadow transition-all duration-300 ease-in-out hover:bg-blue-100">
      <div className="absolute top-0 right-0 flex h-18 w-18 items-center justify-center rounded-tr-xl rounded-bl-full bg-orange-400 group-hover:bg-blue-400">
        {Icon && <Icon size="36" color="white" />}
      </div>
      <div className="flex h-full flex-col">
        <div className="flex-1 space-y-4 p-6 group-hover:border-blue-200">
          <h3 className="w-[80%]">{title}</h3>
          <p>{description}</p>
          <h4>
            ₹
            <span className="text-3xl font-semibold text-orange-400 group-hover:text-blue-400">
              {price}/-
            </span>
          </h4>
          <ul className="space-y-1">
            {features?.map((feature, i) => (
              <li key={i} className="flex gap-2">
                <CiCircleCheck className="shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="p-6">
          <Button text="Get Started" url="/contact" style="w-full" />
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
