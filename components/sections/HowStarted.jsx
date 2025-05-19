"use client";

import Image from "next/image";
import Heading from "../ui/Heading";
import StatCard from "../blocks/StatCard";
import data from "@/public/db/data.json";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const HowStarted = ({ stat }) => {
  const { aboutinfo } = data;

  const [textRef, textInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [statRef, statInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="container">
      <Heading
        title={"How it started"}
        description={"Empowering the world through innovation."}
      />
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-10">
        <motion.div
          ref={textRef}
          variants={fadeInUp}
          initial="hidden"
          animate={textInView ? "visible" : "hidden"}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="order-2 row-span-2 space-y-4 lg:order-1"
        >
          {aboutinfo.map((info, index) => (
            <p key={index}>{info}</p>
          ))}
        </motion.div>

        <div className="order-1 h-48 lg:order-2">
          <Image
            className="h-full rounded-xl object-cover shadow"
            src="/img/banner/digital_innovation.webp"
            alt="digital_innovation"
            width={1200}
            height={600}
          />
        </div>

        <motion.div
          ref={statRef}
          variants={fadeInUp}
          initial="hidden"
          animate={statInView ? "visible" : "hidden"}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="order-3 grid grid-cols-2 gap-4 lg:order-3"
        >
          {stat?.map((item, index) => (
            <StatCard key={index} {...item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowStarted;
