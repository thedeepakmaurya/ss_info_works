"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { LuChevronRight } from "react-icons/lu";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const SliderContainer = ({ img, tagline }) => {
  return (
    <div
      className="flex h-[400px] w-full flex-col items-center justify-center text-white lg:h-[500px] lg:py-10"
      style={{
        background: `linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${img})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex-1">
        <div className="flex h-full flex-col items-center justify-center gap-4">
          <motion.h1
            className="text-center text-4xl font-extrabold lg:w-[70%] lg:text-6xl"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {tagline}
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              className="flex items-center gap-2 text-lg font-medium"
              href="/contact"
            >
              Get Started <LuChevronRight />
            </Link>
          </motion.p>
        </div>
      </div>

      <motion.div
        className="hidden flex-wrap justify-center gap-10 font-semibold lg:flex"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <p>01. Website Development / Design</p>
        <p>02. Android & IOS Application</p>
        <p>03. SEO / SMO Marketing</p>
        <p>04. Digital Marketing</p>
      </motion.div>
    </div>
  );
};

export default SliderContainer;
