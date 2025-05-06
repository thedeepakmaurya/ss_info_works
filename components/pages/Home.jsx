import data from "../../public/db/data.json";
import OurServices from "../sections/OurServices";
import Testimonials from "../sections/Testimonials";
import Introduction from "../sections/Introduction";
import Slider from "../sections/Slider";
import ChooseUs from "../sections/ChooseUs";

export default function HomePage() {
  const { services, testimonials, features } = data;

  return (
    <>
      <Slider />
      <Introduction />
      <OurServices services={services} />
      <ChooseUs features={features}/>
      <Testimonials testimonials={testimonials} />
    </>
  );
}
