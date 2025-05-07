import ApplicationDevelopment from "../sections/ApplicationDevelopment";
import DigitalMarketing from "../sections/DigitalMarketing";
import SeoService from "../sections/SeoService";
import WebDevelopment from "../sections/WebDevelopment";

const Services = () => {
  return (
    <main className="pb-5">
      <WebDevelopment />
      <ApplicationDevelopment />
      <DigitalMarketing />
      <SeoService />
    </main>
  );
};

export default Services;
