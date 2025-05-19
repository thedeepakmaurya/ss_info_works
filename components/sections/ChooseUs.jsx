"use client";
import { motion } from "framer-motion";
import Heading from "../ui/Heading";
import FeaturesCard from "../blocks/FeaturesCard";

const ChooseUs = ({ features }) => {
  return (
    <section className="container">
      <Heading
        title={"Why Choose Us"}
        description={"We Execute Our Ideas from Start to Finish"}
      />
      <div className="grid gap-4 lg:grid-cols-2">
        {features?.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <FeaturesCard index={index} {...feature} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ChooseUs;
