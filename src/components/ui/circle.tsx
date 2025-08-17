"use client";
import { motion } from "motion/react";

export default function Circle({
  position,
}: {
  position: "top-right" | "bottom-left";
}) {
  const positionClasses = {
    "top-right": "top-0 right-0",
    "bottom-left": "bottom-0 left-0",
  };
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: [0, -20, 0] }}
      transition={{
        duration: 4,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className={`bg-azure opacity-25 w-20 h-20 rounded-full absolute ${positionClasses[position]}`}
    ></motion.div>
  );
}
