"use client";
import Image from "next/image";

type ToolsType = {
  label: string;
  image: string;
};

const tools: ToolsType[] = [
  // 🌐 Frontend principal
  {
    label: "React",
    image: "/logo/react.png",
  },
  {
    label: "Next JS",
    image: "/logo/nextjs.png", 
  },
  {
    label: "TypeScript",
    image: "/logo/typescript.png",
  },
  {
    label: "JavaScript",
    image: "/logo/javascript.png",
  },
  {
    label: "Tailwind CSS",
    image: "/logo/tailwind.png",
  },
  {
    label: "Bootstrap",
    image: "/logo/bootstrap.png", 
  },
  {
    label: "Framer Motion",
    image: "/logo/framer-motion.png",
  },

  // ⚙️ Backend & API
  {
    label: "Node JS",
    image: "/logo/node.png",
  },
  {
    label: "Express",
    image: "/logo/Expressjs.png",
  },
  {
    label: "Django",
    image: "/logo/django.png",
  },
  {
    label: "Mongo DB",
    image: "/logo/mongodb.png",
  },
  {
    label: "MySql",
    image: "/logo/mysql.png", 
  },

  // 🧪 Développement & outils
  {
    label: "Git",
    image: "/logo/git.png", 
  },
  {
    label: "Github",
    image: "/logo/github.png",
  },
  {
    label: "Postman",
    image: "/logo/postman1.png", 
  },
  {
    label: "Vscode",
    image: "/logo/vscode.webp",
  },

  // 📱 Mobile / autres
  {
    label: "Expo Go",
    image: "/logo/expoGo.png",
  },
];


export default function ScrollSkills() {
  return (
    <div className="overflow-hidden w-full py-4">
      <div className="flex animate-marquee space-x-6 min-w-max">
        {[...tools, ...tools].map((tool, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-white px-4 py-2 rounded-xl shadow-md"
          >
            <Image
              src={tool.image}
              alt={tool.label}
              width={50}
              height={50}
              className="object-contain"
            />
            <span className="text-gray-800 text-sm mt-1 text-center">
              {tool.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
