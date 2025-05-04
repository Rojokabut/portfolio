"use client";

import React, { useState, useEffect, useRef } from 'react';
import backend from "../logo/backend-development.png";
import Image from 'next/image';
import { Code , Figma } from 'lucide-react';

export default function Myskills() {
  const [reactProgress, setReactProgress] = useState(0);
  const [reactNativeProgress, setReactNativeProgress] = useState(0);
  const [nextProgress, setNextProgress] = useState(0);
  const [DjangoProgress, setDjangoProgress] = useState(0);

  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 1,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      let progress = 0;
      const interval = setInterval(() => {
        if (progress >= 80) {
          clearInterval(interval);
        } else {
          progress += 1;
          setReactProgress(progress);
          setReactNativeProgress(progress - 5);
          setNextProgress(progress);
          setDjangoProgress(progress - 10);
        }
      }, 10);
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  return (
    <div
      ref={ref}
      id="developpement"
      className="w-full space-y-2 text-white overflow-hidden"
    >
      <div className="text-sm text-center">
        <h1 className='text-white text-2xl font-bold block lg:hidden'>Mes skills</h1>
        <span>
          Un aperçu de mes compétences en développement web et mobile...
        </span>
      </div>

      <div className={`${isVisible ? 'block' : 'hidden'} space-y-2 lg:space-y-0`}>
        <div className="flex flex-col lg:flex-row gap-2 ">
          {/* Frontend */}
          <div className="animate__animated animate__backInLeft animate__slow flex-1 bg-gradient-to-br from-[#0f172a] to-[#1e293b] p-6 rounded-2xl shadow-lg space-y-4">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-blue-400 to-blue-800 p-3 rounded-xl">
                <Figma width={30} height={30} />
              </div>
              <h2 className="text-xl font-semibold">Frontend Development</h2>
            </div>

            {[{ label: "React.js", value: reactProgress },
              { label: "React Native", value: reactNativeProgress },
              { label: "Next.js", value: nextProgress },
              { label: "Tailwind CSS", value: reactProgress }
            ].map(({ label, value }) => (
              <ProgressBar key={label} label={label} value={value} />
            ))}
          </div>

          {/* Backend */}
          <div className="animate__animated animate__backInUp animate__slow flex-1 bg-gradient-to-br from-[#0f172a] to-[#1e293b] p-6 rounded-2xl shadow-md space-y-4">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-br from-white to-blue-300 p-3 rounded-xl">
                <Image alt="backend" src={backend} width={30} height={30} />
              </div>
              <h2 className="text-xl font-semibold">Backend Development</h2>
            </div>

            {[{ label: "Node.js", value: reactProgress },
              { label: "Next.js", value: reactProgress },
              { label: "Django", value: DjangoProgress }
            ].map(({ label, value }) => (
              <ProgressBar key={label} label={label} value={value} />
            ))}
          </div>
        </div>

        {/* Langages */}
        <div className="animate__animated animate__backInRight animate__slow bg-gradient-to-br from-[#0f172a] to-[#1e293b] p-6 rounded-2xl shadow-md space-y-4">
          <div className="flex items-center space-x-4">
            <div className="bg-gradient-to-br from-[#17223c] to-[#2f3e56] p-3 rounded-xl">
              <Code stroke='blue' width={30} height={30} />
            </div>
            <h2 className="text-xl font-semibold">Langages</h2>
          </div>

          {[{ label: "TypeScript", value: reactNativeProgress },
            { label: "JavaScript", value: reactProgress },
            { label: "Python", value: reactNativeProgress }
          ].map(({ label, value }) => (
            <ProgressBar key={label} label={label} value={value} />
          ))}
        </div>
      </div>
    </div>
  );
}

type ProgressBarProps = {
  label: string;
  value: number;
};

function ProgressBar({ label, value }: ProgressBarProps) {
  return (
    <div>
      <div className="flex justify-between text-sm text-gray-300 mb-1">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2">
        <div
          className="bg-gradient-to-r from-[#479ff6] to-[#a305ff] h-2 rounded-full transition-all duration-300 ease-in-out"
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </div>
  );
}
