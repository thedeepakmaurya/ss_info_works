"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "../ui/Button";
import Heading from "../ui/Heading";
import data from "@/public/db/data.json";

const Introduction = () => {
  const { aboutinfo } = data;

  return (
    <section className="container">
      <Heading
        title={"About Company"}
        description={"Application & Website Development Company"}
      />
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-10">
        <motion.div
          className="h-80 w-full object-cover lg:h-full"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Image
            className="h-full w-full rounded-xl object-cover shadow"
            src="/img/banner/about.webp"
            alt="works"
            width={600}
            height={1200}
            priority
          />
        </motion.div>
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {aboutinfo.map((info, index) => (
            <p key={index}>{info}</p>
          ))}
          <Button text="Learn more" url="/about" style="" />
        </motion.div>
      </div>
    </section>
  );
};

export default Introduction;
