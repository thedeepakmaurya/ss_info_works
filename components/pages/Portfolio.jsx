"use client";
import { motion } from "framer-motion";
import data from "../../public/db/data.json";
import PortfolioCard from "../blocks/PortfolioCard";

export default function PortfolioPage() {
  const { projects } = data;

  return (
    <main className="pb-5">
      <section className="container">
        <div className="grid gap-8 lg:grid-cols-4">
          {projects?.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <PortfolioCard key={index} {...project} />
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
