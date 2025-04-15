"use client";
import { motion } from "framer-motion";

export default function PrimaryButton({
  children,
  className = "",
  type,
  onClick,
  ref,
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
      className={`primary-button ${className}`}
      type={type}
      onClick={onClick}
      ref={ref}
    >
      {children}
    </motion.button>
  );
}
