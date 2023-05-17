import React from "react";
import { motion } from "framer-motion";

export const MotionTest = () => {
  return (
    <motion.div className="w-20 m-10"
    animate={{ x: [0, 100, 0] }}>
    <div className="bg-lime-600 h-20 w-20">

    </div>
    </motion.div>
  );
};

export default MotionTest;
