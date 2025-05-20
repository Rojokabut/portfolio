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
    let interval: NodeJS.Timeout;

    if (inView) {
      let v = 0;
      interval = setInterval(() => {
        v += 1;
        setValue(v);
        if (v >= target) clearInterval(interval);
      }, 10);
    } else {
      setValue(0);
    }

    return () => clearInterval(interval);
  }, [inView, target]);

  return (
    <motion.div
      viewport={{ once: false, amount: 0.5 }} // `amount` est optionnel pour définir à partir de combien d'affichage on considère "en vue"
      onViewportEnter={() => setInView(true)}
      onViewportLeave={() => setInView(false)}
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
