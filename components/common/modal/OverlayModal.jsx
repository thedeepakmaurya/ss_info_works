"use client";

import { motion } from "framer-motion";

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const OverlayModal = ({ content }) => {
  return (
    <motion.section
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex h-screen w-full cursor-pointer items-center justify-center backdrop-blur-none backdrop-brightness-75 backdrop-filter"
    >
      <div
        className="w-[90%] xl:w-[50%]"
        onClick={(e) => e.stopPropagation()}
      >
        {content}
      </div>
    </motion.section>
  );
};

export default OverlayModal;
