"use client";

import Image from "next/image";
import Heading from "../ui/Heading";
import data from "@/public/db/data.json";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const VisionMission = () => {
  const { vision } = data;

  return (
    <section className="container space-y-14">
      {vision?.map((detail, index) => {
        const { title, description, img, paragraph } = detail;
        const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

        return (
          <motion.div
            key={index}
            ref={ref}
            variants={fadeInUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Heading title={title} description={description} />
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-10 items-stretch">
              <div className="lg:h-full object-cover h-80">
                <Image
                  className="h-full w-full rounded-xl object-cover shadow"
                  src={img}
                  alt="vision"
                  width={600}
                  height={1200}
                />
              </div>
              <div>
                <p>{paragraph}</p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </section>
  );
};

export default VisionMission;
