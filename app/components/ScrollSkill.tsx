"use client";
import Image from "next/image";

type ToolsType = {
  label: string;
  image: string;
};

const tools: ToolsType[] = [
  {
    label: "postman",
    image: "/logo/postman1.png", 
  },
  {
    label: "react",
    image: "/logo/react.png",
  },
  {
    label: "TypeScript",
    image: "/logo/typescript.png",
  },
  {
    label: "Vscode",
    image: "/logo/vscode.webp",
  },
  {
    label: "JavaScript",
    image: "/logo/javascript.png",
  },
  {
    label: "Bootstrap",
    image: "/logo/bootstrap.png", 
  },
  {
    label: "Expo Go",
    image: "/logo/expoGo.png",
  },
  {
    label: "Express",
    image: "/logo/Expressjs.png",
  },
  {
    label: "Git",
    image: "/logo/git.png", 
  },
  {
    label: "Github",
    image: "/logo/github.png",
  },
  {
    label: "Mongo DB",
    image: "/logo/mongodb.png",
  },
  {
    label: "MySql",
    image: "/logo/mysql.png", 
  },
  {
    label: "Node JS",
    image: "/logo/node.png",
  },
  {
    label: "Tailwind CSS",
    image: "/logo/tailwind.png",
  },
  {
    label: "Next JS",
    image: "/logo/nextjs.png", 
  },
  {
    label: "Framer Motion",
    image: "/logo/framer-motion.png",
  },
  {
    label: "Django",
    image: "/logo/django.png",
  },
  // ajoute autant que tu veux
];

export default function ScrollSkills() {
  return (
    <div className="overflow-hidden whitespace-nowrap relative py-4">
      <div className="animate-marquee flex space-x-8">
        {[...tools, ...tools].map((tool, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-white ck px-4 py-2 rounded-xl shadow"
          >
            <Image
              src={tool.image}
              alt={tool.label}
              width={50}
              height={50}
              className="object-contain"
            />
            <span className="text-gray-800">
                {tool.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
