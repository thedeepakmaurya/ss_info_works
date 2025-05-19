"use client";
import { motion } from "framer-motion";
import Heading from "../ui/Heading";
import TeamCard from "../blocks/TeamCard";

const OurTeam = ({ team }) => {
  return (
    <section className="container">
      <Heading
        title={"Meet the Team"}
        description={"Meet our dedicated team of developers."}
      />
      <div className="grid place-items-center gap-8 lg:grid-cols-4">
        {team?.map((details, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <TeamCard key={index} {...details} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
