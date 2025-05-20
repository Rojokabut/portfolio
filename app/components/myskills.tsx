'use client';

import React, { useRef } from 'react';
import backend from "../logo/backend-development.png";
import Image from 'next/image';
import { Code, Figma } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import ProgressBar from './Progressbar/ProgressBar';
import skills from './data/skills';

export default function Myskills() {
  const ref = useRef<HTMLDivElement | null>(null);

  return (
    <div id="developpement" className="w-full space-y-2 text-white overflow-hidden">
      <div className="text-sm text-center">
        <h1 className="text-white text-2xl font-bold block lg:hidden">Mes compétences</h1>
        <span>
          Un aperçu de mes compétences en développement web et mobile...
        </span>
      </div>

      <div className="space-y-2 lg:space-y-3">
        <div ref={ref} className="flex flex-col lg:flex-row gap-3">
          {/* Frontend */}
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
            className="flex-1 bg-gray-900 p-6 rounded-2xl shadow-lg space-y-4 border border-blue-950"
          >
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-blue-400 to-blue-800 p-3 rounded-xl">
                <Figma width={30} height={30} />
              </div>
              <h2 className="text-xl font-semibold">Frontend Development</h2>
            </div>

            {skills
              .filter((s) =>
                ["React.js", "React Native", "Next.js", "Tailwind CSS"].includes(s.label)
              )
              .map((skill) => (
                <ProgressBar key={skill.label} label={skill.label} target={skill.target} />
              ))}
          </motion.div>

          {/* Backend */}
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
            className="flex-1 bg-gray-900 p-6 rounded-2xl shadow-md space-y-4 border border-blue-950"
          >
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-br from-white to-blue-300 p-3 rounded-xl">
                <Image alt="backend" src={backend} width={30} height={30} />
              </div>
              <h2 className="text-xl font-semibold">Backend Development</h2>
            </div>

            {skills
              .filter((s) => ["Node.js", "Next.js", "Django"].includes(s.label))
              .map((skill) => (
                <ProgressBar key={skill.label} label={skill.label} target={skill.target} />
              ))}
          </motion.div>
        </div>

        {/* Langages */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          className="bg-gray-900 p-6 rounded-2xl shadow-md space-y-4 border border-blue-950"
        >
          <div className="flex items-center space-x-4">
            <div className="bg-gradient-to-br from-[#17223c] to-[#2f3e56] p-3 rounded-xl">
              <Code stroke="blue" width={30} height={30} />
            </div>
            <h2 className="text-xl font-semibold">Langages</h2>
          </div>

          {skills
            .filter((s) => ["TypeScript", "JavaScript", "Python"].includes(s.label))
            .map((skill) => (
              <ProgressBar key={skill.label} label={skill.label} target={skill.target} />
            ))}
        </motion.div>
      </div>
    </div>
  );
}
