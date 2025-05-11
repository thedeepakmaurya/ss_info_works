import {
  CiBookmarkCheck,
  CiLight,
  CiHeart,
  CiRead,
  CiVolumeHigh,
  CiUser,
} from "react-icons/ci";

const FeaturesCard = ({ icon, index, title, description }) => {
  const icons = {
    CiBookmarkCheck,
    CiLight,
    CiHeart,
    CiRead,
    CiVolumeHigh,
    CiUser,
  };

  const Icon = icons[icon];

  return (
    <div
      className={`flex gap-6 rounded-xl bg-blue-50 p-4 shadow ${index === 0 ? "bg-yellow-50" : index === 1 ? "bg-purple-50" : index === 2 ? "bg-red-50" : index === 3 ? "bg-green-50" : index === 4 ? "bg-blue-50" : "bg-orange-50"}`}
    >
      <div>
        <Icon
          size={40}
          className={`rounded-full ${index === 0 ? "bg-yellow-200" : index === 1 ? "bg-purple-200" : index === 2 ? "bg-red-200" : index === 3 ? "bg-green-200" : index === 4 ? "bg-blue-200" : "bg-orange-200"} p-1`}
        />
      </div>
      <div className="flex flex-col gap-1">
        <h4 className="font-semibold">{title}</h4>
        <p> {description}</p>
      </div>
    </div>
  );
};

export default FeaturesCard;
