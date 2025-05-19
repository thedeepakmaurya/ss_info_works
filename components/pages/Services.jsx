"use client";

import data from "@/public/db/data.json";
import Image from "next/image";
import SubServiceCard from "../blocks/SubServiceCard";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const Services = ({ serviceId }) => {
  const { servicesbrief } = data;
  const article = servicesbrief?.filter((service) =>
    service?.id.includes(serviceId),
  );

  return (
    <main>
      <section className="container">
        {article?.map((brief, index) => {
          const {
            image,
            intro,
            title,
            article: paragraphs,
            subServices,
          } = brief;

          return (
            <motion.article
              key={index}
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="space-y-10"
            >
              {/* Image + Text */}
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-10">
                <motion.div variants={fadeUp}>
                  <Image
                    className="h-60 rounded-xl object-cover lg:h-[500px]"
                    src={image}
                    alt="web development"
                    width={600}
                    height={600}
                  />
                </motion.div>

                <motion.div variants={fadeUp}>
                  <h2 className="text-3xl font-bold">
                    <span className="text-orange-400">{title?.main}</span>{" "}
                    {title?.span}
                  </h2>
                  <div className="mt-4 space-y-6">
                    {intro?.map((item, idx) => (
                      <motion.p key={idx} variants={fadeUp}>
                        {item}
                      </motion.p>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Main Paragraphs */}
              {paragraphs?.length > 0 && (
                <motion.div className="space-y-6" variants={staggerContainer}>
                  {paragraphs.map((para, idx) => (
                    <motion.p key={idx} variants={fadeUp}>
                      {para}
                    </motion.p>
                  ))}
                </motion.div>
              )}

              {/* SubServices */}
              <motion.div
                className="grid gap-10 lg:grid-cols-2"
                variants={staggerContainer}
              >
                {subServices?.map((details, idx) => (
                  <motion.div key={idx} variants={fadeUp}>
                    <SubServiceCard {...details} />
                  </motion.div>
                ))}
              </motion.div>
            </motion.article>
          );
        })}
      </section>
    </main>
  );
};

export default Services;
