"use client"

import Link from "next/link"
// import {TypewriterEffectSmooth} from "@/components/ui/typewriter-effect"
import React from 'react'
import Image from 'next/image'
import { Typewriter } from "react-simple-typewriter"

import {  Phone, Calendar, Facebook, Linkedin, Github ,Download, LocateFixed} from "lucide-react";


export default function myprofile() {
//     const noms = [
//         {
//           text: "RAVELOMANANA",
//           className:"text-xl font-bold ",
//         },
//         {
//           text: "Rojoniaina",
//           className:"text-xl font-bold text-blue-500",
//         },
       
//       ];
  return (
    <div id="profile" className="relative lg:w-1/3 w-full text-white bg-gradient-to-r from-[#0f172a] to-[#1e293b] rounded-2xl lg:px-4 xl:px-5 md:24 sm:px-15 px-5 py-2 shadow-md mt-40">
        <div className="absolute -mx-5 sm:-mx-15 top-[-120px] w-full flex items-center justify-center">
            <Image 
                src="/photo1.png" 
                alt="photo de profil" 
                width={200} 
                height={200}
                className="rounded-full shadow-xl"
            />
        </div>
        <div className=" flex flex-col items-center justify-center mt-20">
            <label htmlFor="" className="font-bold text-xl ">RAVELOMANANA Rojoniaina</label>
            <div id="information" className="flex flex-col items-center justify-center ">
                {/* <TypewriterEffectSmooth words={noms}/> */}
                <label htmlFor="" className="text-md text-white">Développeur web et mobile</label>
                <div id="Reseau sociaux" className="flex  space-x-2">
                    <Link href="https://www.linkedin.com/in/rojoniaina-ravelomanana-6351782a2" target="_blank" className="bg-gray-700 p-1 rounded-md hover:bg-gray-600">
                        <Linkedin size={20} stroke="gray"/>
                    </Link>
                    <Link href="https://www.facebook.com/profile.php?id=100095456943803" target="_blank" className="bg-gray-700 p-1 rounded-md hover:bg-gray-600">
                        <Facebook size={20} stroke="gray"/>
                    </Link>
                    <Link href="https://github.com/Rojokabut" target="_blank" className="bg-gray-700 p-1 rounded-md hover:bg-gray-600">
                        <Github size={20} stroke="gray"/>
                    </Link>
                    {/* <button className="bg-gray-700 p-1 rounded-md hover:bg-gray-600">
                        <MessageCircle size={20} stroke="gray"/>
                    </button> */}
                </div>
            </div>
        </div>
        <div className="flex flex-col mt-5 px-10 bg-blue-800 py-2 rounded-tr-3xl rounded-bl-3xl border-t border-b border-t-blue-500 border-b-blue-500">
            <span className="text-blue-100 text-lg font-bold">
                 
                  <Typewriter
                    words={[`"Du code, de la créativité, et du soupçon de café."`, ]}
                    loop={1} // 0 = infini
                    cursor
                    cursorStyle="|"
                    typeSpeed={100}
                    deleteSpeed={50}
                    delaySpeed={1500}
                    />  
            </span>
            <span className="flex justify-center text-green-300 text-lg font-bold">
               Bienvenue sur mon portfolio!
            </span>
        </div>
       
        {/* contact */}
        <div id="contact" className="bg-black-950 rounded-xl xl:px-5 px-1 py-2 mt-10 space-y-3 ">
            <div className="w-full flex space-x-2 items-center hover:bg-gray-900 px-5 py-2 rounded-md cursor-pointer">
                <Phone size={30} className="bg-white text-violet-500 p-2 rounded-md"/>
                <span className="text-sm">+261 34 05 633 35</span>
            </div>
            <div className="w-full flex space-x-2 items-center hover:bg-gray-900 px-5 py-2 rounded-md cursor-pointer">
                <LocateFixed size={30} className="bg-white text-violet-500 p-2 rounded-md"/>
                <span className="text-sm">099 AVA Avarajozoro Ambatolampy Tsimahafotsy</span>
            </div>
            <div className="w-full flex space-x-2 items-center hover:bg-gray-900 px-5 py-2 rounded-md cursor-pointer">
                <Calendar size={30} className="bg-white text-violet-500 p-2 rounded-md"/>
                <span className="text-sm">23 Septembre 2002</span>
            </div>
        </div>

        <div className="flex items-center justify-center mt-3 ">
            <a href='/CV_RAVELOMANANA_Rojoniaina.pdf' download className="bg-violet-600 text-white px-6 py-1 rounded-lg hover:bg-violet-700 flex space-x-1">
                <Download stroke="white" size={20} className="animate-bounce-slow"/>
                <span>Download CV</span>
            </a>
        </div>

    </div>
  )
}
