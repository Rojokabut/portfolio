"use client";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "RAVELOMANANA",
    },
    {
      text: "Rojoniaina",
      className:"text-lg"
    },
    
    {
      text: "Aceternity.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="f  ">

      <TypewriterEffectSmooth words={words} />
      
    </div>
  );
}

export default TypewriterEffectSmoothDemo;