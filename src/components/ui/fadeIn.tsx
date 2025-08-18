"use client";
import { ReactNode } from "react";
import { motion } from "motion/react";
export default function FadeIn({ children }: { children: ReactNode }) {
  return (
    <motion.div
      className=" h-full"
      initial={{ opacity: 0, translateY: 1 }}
      whileInView={{
        opacity: 1,
        translateY: 0,
        transition: { duration: 0.5 },
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}
