import React from "react";
import { motion } from "framer-motion";

const Preloader = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.5, 1] }}
        exit={{ scale: 1 }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <h2>Loading...</h2>
      </motion.div>
    </div>
  );
};

export default Preloader;
