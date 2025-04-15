"use client";
import { motion } from "framer-motion";

export default function Title({ children, className = "" }) {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.8 },
      }}
      className={`title ${className}`}
    >
      {children}
    </motion.h1>
  );
}
