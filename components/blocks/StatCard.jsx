import { CiStar, CiUser, CiBookmarkCheck, CiFaceSmile } from "react-icons/ci";

const StatCard = ({ value, title, icon }) => {
  const icons = {
    CiStar,
    CiUser,
    CiBookmarkCheck,
    CiFaceSmile,
  };

  const Icon = icons[icon];

  return (
    <div className="relative overflow-hidden rounded-xl bg-blue-100 p-4 lg:p-6 shadow">
      <div>
        <h3 className="text-2xl font-bold">{value}</h3>
        <p className="capitalize">{title}</p>
      </div>
      <div className="absolute top-0 right-0 flex h-14 w-14 items-center justify-center rounded-tr-xl rounded-bl-full bg-blue-400">
        {Icon && <Icon size="32" color="white" />}
      </div>
    </div>
  );
};

export default StatCard;
