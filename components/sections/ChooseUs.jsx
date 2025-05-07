import {
  CiBookmarkCheck,
  CiLight,
  CiHeart,
  CiRead,
  CiVolumeHigh,
  CiUser,
} from "react-icons/ci";
import Heading from "../ui/Heading";

const ChooseUs = ({ features }) => {
  const icons = {
    CiBookmarkCheck,
    CiLight,
    CiHeart,
    CiRead,
    CiVolumeHigh,
    CiUser,
  };

  return (
    <section className="container">
      <Heading
        title={"Why Choose Us"}
        description={"We Execute Our Ideas from  Start to Finish"}
      />
      <div className="grid gap-4 lg:grid-cols-2">
        {features?.map(({ title, description, icon }, index) => {
          const Icon = icons[icon];
          return (
            <div
              key={index}
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
        })}
      </div>
    </section>
  );
};

export default ChooseUs;
