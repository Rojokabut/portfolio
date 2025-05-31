"use client";


import Myskills from "./components/myskills";
import Myproject from "./components/myproject";
import Myprofile from "./components/myprofile";
import Tools from "./components/tools";
import Formation from "./components/formation";
import Navbar from "./components/Navbar";
import About from './components/about'
import ScrollSkills from "./components/ScrollSkill";
import Telechargement from "./components/telechargement";

import { useState } from "react";

export default function Home() {
  const [activeComponent, setActiveComponent] = useState("about");

  return (
    <div className="w-full">
      <Navbar />
      <Telechargement/>
      <div className="bg-[#C9D6FF] pb-10">
        <div className="w-full lg:flex lg:flex-row lg:space-x-2 space-y-2  to-[#fff] [#5462c1] [#b667f8]  sm:px-10 md:px-36 lg:px-10 pt-5 lg:py-5 md:py-5 xl:py-10 ">
          {/* Profile */}
          <Myprofile />

          {/* Contenu */}
          <div className="z-10 lg:w-2/3 w-full  bg-[#0f172a] rounded-lg px-5 sm:px-10 py-5 shadow-md">
            <div id="titre" className="hidden lg:block">
              <h1 className="text-4xl font-bold text-[#473ce2] font-sans font-rowdies">Portfolio</h1>
            </div>

            {/* Boutons de navigation */}
            <div id="nav" className="hidden lg:flex justify-end space-x-2 mb-5 mt-3">

              <button
                className={`text-sm px-3 py-1 rounded ${
                  activeComponent === "about" ? "text-blue-500 font-semibold" : "text-gray-400 hover:text-blue-300  hover:border-b hover:border-blue-300"
                }`}
                onClick={() => setActiveComponent("about")}
              >
                A propos
              </button>

              <button
                className={`text-sm px-3 py-1 rounded ${
                  activeComponent === "skills" ? "text-blue-500 font-semibold" : "text-gray-400 hover:text-blue-300 hover:border-b hover:border-blue-300"
                }`}
                onClick={() => setActiveComponent("skills")}
              >
                Compétences
              </button>

              <button
                className={`text-sm px-3 py-1 rounded ${
                  activeComponent === "projects" ? "text-blue-500 font-semibold" : "text-gray-400 hover:text-blue-300 hover:border-b hover:border-blue-300"
                }`}
                onClick={() => setActiveComponent("projects")}
              >
                Projets
              </button>

              <button
                className={`text-sm px-3 py-1 rounded ${
                  activeComponent === "formation" ? "text-blue-500 font-semibold" : "text-gray-400 hover:text-blue-300 hover:border-b hover:border-blue-300"
                }`}
                onClick={() => setActiveComponent("formation")}
              >
                Formations
              </button>

              <button
                className={`text-sm px-3 py-1 rounded ${
                  activeComponent === "tools" ? "text-blue-500 font-semibold" : "text-gray-400 hover:text-blue-300 hover:border-b hover:border-blue-300"
                }`}
                onClick={() => setActiveComponent("tools")}
              >
                Outils
              </button>
            </div>

            {/* Affichage conditionnel */}
            <div className="lg:block hidden">
              {activeComponent === "about" && <About />}
              {activeComponent === "skills" && <Myskills />}
              {activeComponent === "projects" && <Myproject />}
              {activeComponent === "tools" && <Tools />}
              {activeComponent === "formation" && <Formation />}
            </div>
            
            <div className="lg:hidden flex flex-col space-y-24">
              <About />
              <div>
                <ScrollSkills/>
              </div>
              <Myskills />
              <Myproject />
              <Tools />
              <Formation />
            </div>
          </div>
        </div>
        <div className="hidden lg:block">
          <ScrollSkills/>
        </div>
      </div>

    </div>
  );
}
