"use client";

import { motion } from "framer-motion";
import { IoCloseOutline } from "react-icons/io5";
import ContactForm from "../blocks/ContactForm";

const PopupForm = ({ onClose }) => {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="mx-auto rounded-xl bg-white shadow-lg lg:w-[60%]"
    >
      <h4 className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
        Contact Us{" "}
        <IoCloseOutline
          onClick={onClose}
          size={28}
          className="cursor-pointer"
        />
      </h4>
      <div className="p-6">
        <ContactForm />
      </div>
    </motion.section>
  );
};

export default PopupForm;
