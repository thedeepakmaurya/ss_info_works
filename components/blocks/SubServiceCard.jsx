import {
  CiLaptop,
  CiMobile1,
  CiMobile3,
  CiShoppingCart,
} from "react-icons/ci";

const SubServiceCard = ({
  title,
  description,
  features,
  builtUsing,
  bestfor,
  icon,
}) => {
  const icons = {
    CiLaptop,
    CiMobile1,
    CiMobile3,
    CiShoppingCart
  };

  const Icon = icons[icon];
  return (
    <div className="group relative space-y-4 overflow-hidden rounded-xl bg-orange-100 p-6 shadow hover:bg-blue-100">
      <div className="absolute top-0 right-0 flex h-18 w-18 items-center justify-center rounded-tr-xl rounded-bl-full bg-orange-400 group-hover:bg-blue-400">
        <Icon size="36" color="white" />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <h3>Key Features</h3>
      <ul>
        {features?.map((feature, i) => (
          <li key={i}>{feature}</li>
        ))}
      </ul>
      {builtUsing?.length > 0 && (
        <>
          <h3>Built Using</h3>
          <ul>
            {builtUsing?.map((stack, i) => (
              <li key={i}>{stack}</li>
            ))}
          </ul>
        </>
      )}
      <h3>Best For</h3>
      <ul>
        {bestfor?.map((industry, i) => (
          <li key={i}>{industry}</li>
        ))}
      </ul>
    </div>
  );
};

export default SubServiceCard;
