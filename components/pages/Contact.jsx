import ContactDetail from "../sections/ContactDetail";
import ContactForm from "../sections/ContactForm";
import Map from "../sections/Map";

export default function ContactPage() {
  return (
    <section className="container grid gap-10 lg:grid-cols-5 lg:gap-20">
      <ContactDetail />
      <ContactForm />
      <Map />
    </section>
  );
}
