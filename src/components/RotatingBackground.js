import React from "react";
import { motion } from "framer-motion";
import "./RotatingBackground.css";

const RotatingBackground = () => (
  <motion.div
    className="rotating-background-container"
    animate={{ rotate: 360 }}
    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
  >
    <img
      src="/assets/images/background.png"
      alt="Rotating"
      className="rotating-image"
    />
  </motion.div>
);

export default RotatingBackground;
