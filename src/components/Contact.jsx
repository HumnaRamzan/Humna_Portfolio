import React from "react";
import { CONTACT } from "../constants/index";
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center text-4xl my-10"
      >
        Get In Touch
      </motion.h2>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-center tracking-tighter"
      >
        <p className="my-4 ">{CONTACT.phoneNo}</p>
        <p className="my-4 ">{CONTACT.email}</p>
        <p className="my-4 ">{CONTACT.address}</p>
      </motion.div>
    </div>
  );
};

export default Contact;
