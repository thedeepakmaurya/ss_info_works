import data from "../../public/db/data.json";
import OurServices from "../sections/OurServices";
import Testimonials from "../sections/Testimonials";
import Introduction from "../sections/Introduction";
import ChooseUs from "../sections/ChooseUs";
import HeroSlider from "../sections/HeroSlider";

export default function HomePage() {
  const { services, testimonials, features } = data;

  return (
    <main className="pb-5 overflow-hidden">
      <HeroSlider />
      <Introduction />
      <OurServices services={services} />
      <ChooseUs features={features} />
      <Testimonials testimonials={testimonials} />
    </main>
  );
}
