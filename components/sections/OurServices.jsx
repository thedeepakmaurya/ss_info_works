"use client";
import { motion } from "framer-motion";
import ServicesCard from "../blocks/ServicesCard";
import Heading from "../ui/Heading";

const OurServices = ({ services }) => {
  return (
    <section className="container">
      <Heading title={"Our Services"} description={"Our Best Services"} />
      <div className="grid gap-6 lg:grid-cols-4">
        {services?.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <ServicesCard {...service} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
