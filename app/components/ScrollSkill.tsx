"use client"
import Image from "next/image"

interface Skill {
  label: string
  image: string
  category: "frontend" | "backend" | "tools" | "mobile"
}

const skills: Skill[] = [
  // Frontend
  { label: "React", image: "/logo/react.png", category: "frontend" },
  { label: "Next.js", image: "/logo/nextjs.png", category: "frontend" },
  { label: "TypeScript", image: "/logo/typescript.png", category: "frontend" },
  { label: "JavaScript", image: "/logo/javascript.png", category: "frontend" },
  { label: "Tailwind CSS", image: "/logo/tailwind.png", category: "frontend" },
  { label: "Bootstrap", image: "/logo/bootstrap.png", category: "frontend" },
  { label: "Framer Motion", image: "/logo/framer-motion.png", category: "frontend" },

  // Backend
  { label: "Node.js", image: "/logo/node.png", category: "backend" },
  { label: "Express", image: "/logo/Expressjs.png", category: "backend" },
  { label: "Laravel", image: "/logo/laravel.png", category: "backend" },
  { label: "PHP", image: "/logo/php.png", category: "backend" },
  { label: "Django", image: "/logo/django.png", category: "backend" },
  { label: "MongoDB", image: "/logo/mongodb.png", category: "backend" },
  { label: "MySQL", image: "/logo/mysql.png", category: "backend" },

  // Tools
  { label: "Git", image: "/logo/git.png", category: "tools" },
  { label: "GitHub", image: "/logo/github.png", category: "tools" },
  { label: "Postman", image: "/logo/postman1.png", category: "tools" },
  { label: "VS Code", image: "/logo/vscode.webp", category: "tools" },

  // Mobile
  { label: "Expo Go", image: "/logo/expoGo.png", category: "mobile" },
]


export default function ScrollSkills() {
  // Dupliquer les skills pour un défilement continu
  const duplicatedSkills = [...skills, ...skills]

  return (
    <div className="w-full py-8 overflow-hidden">
      {/* Titre */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
          Technologies & Outils
        </h2>
        <p className="text-slate-400 text-sm">Les technologies que j&apos;utilise au quotidien</p>
      </div>

      <div className="relative">
        {/* Gradient de fade sur les côtés */}
        <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-slate-950 to-transparent z-10" />
        <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-slate-950 to-transparent z-10" />

        {/* Conteneur de défilement */}
        <div className="flex animate-marquee space-x-6 min-w-max">
          {duplicatedSkills.map((skill, index) => (
            <SkillCard key={`${skill.label}-${index}`} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  )
}

// Composant pour chaque carte de compétence
interface SkillCardProps {
  skill: Skill
}

function SkillCard({ skill }: SkillCardProps) {
  return (
    <div
      className={`
        flex flex-col items-center justify-center px-6 py-4 rounded-2xl
        border-2 transition-all duration-300 hover:scale-105 hover:shadow-lg
        bg-slate-800/50 backdrop-blur-sm hover:bg-slate-700/50 min-w-[120px]
        border-slate-700/50 hover:border-blue-500/50 group
      `}
    >
      <div className="relative w-14 h-14 mb-3 group-hover:scale-110 transition-transform duration-300">
        <Image
          src={skill.image || "/placeholder.svg"}
          alt={`${skill.label} logo`}
          fill
          className="object-contain rounded-lg"
          sizes="56px"
        />
      </div>
      <span className="text-slate-300 text-sm font-medium text-center leading-tight group-hover:text-white transition-colors duration-300">
        {skill.label}
      </span>
    </div>
  )
}
