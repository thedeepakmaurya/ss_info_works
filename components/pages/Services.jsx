"use client";

import data from "@/public/db/data.json";
import Image from "next/image";
import SubServiceCard from "../blocks/SubServiceCard";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
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
          const { image, intro, title, article, subServices } = brief;

          return (
            <motion.article
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
              className="space-y-10"
            >
              {/* Image + Text Block */}
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
                    <span className="text-orange-400"> {title?.main}</span>{" "}
                    {title?.span}
                  </h2>
                  <div className="space-y-6 mt-4">
                    {intro?.map((item, idx) => (
                      <motion.p key={idx} variants={fadeUp}>
                        {item}
                      </motion.p>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Full Article Paragraph */}
              {article?.length > 0 && (
                <motion.div
                  className="space-y-6 lg:col-span-2"
                  variants={staggerContainer}
                >
                  {article?.map((paragraph, idx) => (
                    <motion.p key={idx} variants={fadeUp}>
                      {paragraph}
                    </motion.p>
                  ))}
                </motion.div>
              )}

              {/* Sub Services */}
              <motion.div
                className="mt-6 grid gap-10 lg:grid-cols-2"
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
