import React from "react";
import Banner from "../HomeBanner/Banner";
import { motion } from "framer-motion";
import MotionTest from "../MotionComponents/MotionTest";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div>
      <MotionTest></MotionTest>
      </div>
    </div>
  );
};

export default Home;
