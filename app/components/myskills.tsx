"use client"

import React, { useState, useEffect } from 'react';
import frontend from "../logo/front.png";
import backend from "../logo/backend-development.png";
import Image from 'next/image';

import { Code } from 'lucide-react';

export default function Myskills() {
  const [reactProgress, setReactProgress] = useState(0);
  const [reactNativeProgress, setReactNativeProgress] = useState(0);
  const [nextProgress, setNextProgress] = useState(0);
  const [DjangoProgress, setDjangoProgress] = useState(0)

  useEffect(() => {
    let progress = 0;
    const interval = setInterval(() => {
      if (progress >= 80) {
        clearInterval(interval);
      } else {
        progress += 1;
        setReactProgress(progress);
        setReactNativeProgress(progress - 5);
        setNextProgress(progress);
        setDjangoProgress(progress - 10)
      }
    }, 5);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="developpement" className="w-full mt-5 space-y-2 text-white">
      <div className="text-sm text-center">
        Un aperçu de mes compétences en développement web et mobile...
      </div>

      <div className="flex flex-col lg:flex-row gap-2 ">
        {/* Frontend */}
        <div className="animate__animated animate__backInDown flex-1 bg-gradient-to-br from-[#0f172a] to-[#1e293b] p-6 rounded-2xl shadow-lg space-y-4">
          <div className="flex items-center space-x-4">
            <div className="bg-gradient-to-r from-blue-400 to-blue-800 p-3 rounded-xl">
              <Image alt="frontend" src={frontend} width={30} height={30} />
            </div>
            <h2 className="text-xl font-semibold">Frontend Development</h2>
          </div>

          {[{ label: "Riact.js", value: reactProgress },
            { label: "React Native", value: reactNativeProgress },
            { label: "Next.js", value: nextProgress },
            { label: "Tailwind CSS", value: reactProgress }
          ].map(({ label, value }) => (
            <div key={label}>
              <div className="flex justify-between text-sm text-gray-300 mb-1">
                <span>{label}</span>
                <span>{value}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full transition-all duration-300 ease-in-out" style={{ width: `${value}%` }}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Backend */}
        <div className="animate__animated animate__backInUp flex-1 bg-gradient-to-br from-[#0f172a] to-[#1e293b] p-6 rounded-2xl shadow-md space-y-4">
          <div className="flex items-center space-x-4">
            <div className="bg-gradient-to-br from-white to-blue-300 p-3 rounded-xl">
              <Image alt="backend" src={backend} width={30} height={30} />
            </div>
            <h2 className="text-xl font-semibold">Backend Development</h2>
          </div>

          {[ {label: "Node.js", value:reactProgress}, 
            {label: "Next.js", value: reactProgress}, 
            {label:"Django", value: DjangoProgress}
          ].map(({label, value}) => (
            <div key={label}>
              <div className="flex justify-between text-sm text-gray-300 mb-1">
                <span>{label}</span>
                <span>{value}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full transition-all duration-300 ease-in-out" style={{ width: `${value}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Langages */}
      <div className="animate__animated animate__backInDown bg-gradient-to-br from-[#0f172a] to-[#1e293b] p-6 rounded-2xl shadow-md space-y-4">
        <div className="flex items-center space-x-4">
          <div className="bg-gradient-to-br from-[#17223c] to-[#2f3e56] p-3 rounded-xl">
            <Code stroke='blue' width={30} height={30} />
          </div>
          <h2 className="text-xl font-semibold">Langages</h2>
        </div>

        {[{label: "TypeScript", value:reactNativeProgress},
         {label: "JavaScript", value:reactProgress}, 
         {label: "Python", value:reactNativeProgress}
        ].map(({label, value}) => (
          <div key={label}>
            <div className="flex justify-between text-sm text-gray-300 mb-1">
              <span>{label}</span>
              <span>{value}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div className="bg-blue-500 h-2 rounded-full transition-all duration-300 ease-in-out" style={{ width: `${value}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
