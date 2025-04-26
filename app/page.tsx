"use client";

import Myskills from "./components/myskills";
import Myproject from "./components/myproject";
import Myprofile from "./components/myprofile";
import Tools from "./components/tools";
import Back from "./components/back";
import Formation from "./components/formation";

import { useEffect, useState } from "react";

export default function Home() {
  const [activeComponent, setActiveComponent] = useState("skills");

  return (
    <div className="w-full ">
      {/* <Back /> */}
      <div className=" w-full lg:flex lg:flex-row lg:space-x-2 space-y-2 bg-gradient-to-br from-[#1e293b] to-[#B8C0FF] sm:px-10 md:px-36 lg:px-10 pt-5 lg:py-5 md:py-5 xl:py-10">
        {/* Profile */}
        <Myprofile />

        {/* Contenu */}
        <div className="z-10 lg:w-2/3 w-full bg-gradient-to-r from-[#0f172a] to-[#1e293b] rounded-lg px-5 sm:px-10 py-5 shadow-md">
          <div id="titre" className="hidden lg:block">
            <h1 className="text-4xl font-bold text-white">Portfolio</h1>
          </div>

          {/* Boutons de navigation */}
          <div id="nav" className="flex justify-end space-x-2 mb-5 mt-3">
            <button
              className={`text-sm px-3 py-1 rounded ${
                activeComponent === "skills" ? "text-blue-500 font-semibold" : "text-gray-400 hover:text-blue-300"
              }`}
              onClick={() => setActiveComponent("skills")}
            >
              My Skills
            </button>

            <button
              className={`text-sm px-3 py-1 rounded ${
                activeComponent === "projects" ? "text-blue-500 font-semibold" : "text-gray-400 hover:text-blue-300"
              }`}
              onClick={() => setActiveComponent("projects")}
            >
              Projets
            </button>

            <button
              className={`text-sm px-3 py-1 rounded ${
                activeComponent === "formation" ? "text-blue-500 font-semibold" : "text-gray-400 hover:text-blue-300"
              }`}
              onClick={() => setActiveComponent("formation")}
            >
              Formations
            </button>

            <button
              className={`text-sm px-3 py-1 rounded ${
                activeComponent === "tools" ? "text-blue-500 font-semibold" : "text-gray-400 hover:text-blue-300"
              }`}
              onClick={() => setActiveComponent("tools")}
            >
              Outils
            </button>
          </div>

          {/* Affichage conditionnel */}
          <div>
            {activeComponent === "skills" && <Myskills />}
            {activeComponent === "projects" && <Myproject />}
            {activeComponent === "tools" && <Tools />}
            {activeComponent === "formation" && <Formation />}
          </div>
        </div>
      </div>
    </div>
  );
}
