import ContactDetail from "../blocks/ContactDetail";
import ContactForm from "../blocks/ContactForm";
import Map from "../blocks/Map";

export default function ContactPage() {
  return (
    <main>
      <section className="container grid gap-10 lg:grid-cols-5 lg:gap-20">
        <ContactDetail />
        <ContactForm />
      </section>
      <Map />
    </main>
  );
}
