"use client"
import { motion } from "framer-motion";
import ContactDetail from "../blocks/ContactDetail";
import ContactForm from "../blocks/ContactForm";
import Map from "../blocks/Map";

export default function ContactPage() {
  return (
    <main>
      <section className="container grid gap-10 lg:grid-cols-5 lg:gap-20">
        <motion.div
          className="lg:col-span-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <ContactDetail />
        </motion.div>

        <motion.div
          className="lg:col-span-3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <ContactForm />
        </motion.div>
      </section>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <Map />
      </motion.div>
    </main>
  );
}
