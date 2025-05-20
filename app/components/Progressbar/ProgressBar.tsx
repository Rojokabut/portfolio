'use client';

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type ProgressBarProps = {
  label: string;
  target: number;
};

export default function ProgressBar({ label, target }: ProgressBarProps) {
  const [value, setValue] = useState(0);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!inView) return;

    let v = 0;
    const interval = setInterval(() => {
      v += 1;
      setValue(v);
      if (v >= target) clearInterval(interval);
    }, 20);

    return () => clearInterval(interval);
  }, [inView, target]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      onViewportEnter={() => setInView(true)}
    >
      <div className="flex justify-between text-sm text-gray-300 mb-1">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2">
        <div
          className="bg-gradient-to-r from-[#479ff6] to-[#a200ff] h-2 rounded-full transition-all duration-300 ease-in-out"
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </motion.div>
  );
}
