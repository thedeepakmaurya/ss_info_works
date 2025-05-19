"use client";
import { motion } from "framer-motion";
import data from "../../public/db/data.json";
import PriceCard from "../blocks/PriceCard";

export default function PricePage() {
  const { pricing } = data;

  return (
    <main className="pb-5">
      <section className="container grid gap-10 lg:grid-cols-3">
        {pricing?.map((details, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <PriceCard key={index} {...details} />
          </motion.div>
        ))}
      </section>
    </main>
  );
}
