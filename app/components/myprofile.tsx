"use client"

import Link from "next/link"

import React from 'react'
import Image from 'next/image'

import {  Phone, Calendar, Facebook, Linkedin, Github ,Download, LocateFixed} from "lucide-react";

export default function myprofile() {
  return (
    <div id="profile" className="relative lg:w-1/3 w-full text-white bg-gradient-to-r from-[#0f172a] to-[#1e293b] rounded-2xl lg:px-4 xl:px-5 md:24 sm:px-15 px-5 py-2 shadow-md mt-32">
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
                <label htmlFor="" className="text-md text-white">Développeur web et mobile</label>
                <div id="Reseau sociaux" className="flex  space-x-2">
                    <Link href="" target="_blank" className="bg-gray-700 p-1 rounded-md hover:bg-gray-600">
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
        <div className="text-white text-sm mt-5">
            Développeur fullstack orienté web et mobile, je maîtrise les technologies modernes pour concevoir des interfaces 
            réactives et des backends solides. Je transforme des besoins complexes en expériences fluides et performantes,
            prêtes pour le monde réél.
        </div>
        {/* contact */}
        <div id="contact" className="bg-gray-800 rounded-xl xl:px-5 px-1 py-2 mt-2 space-y-3 ">
            <div className="w-full flex space-x-2 items-center hover:bg-gray-900 px-5 py-2 rounded-md cursor-pointer">
                <Phone size={30} stroke="black" className="bg-white p-2 rounded-md"/>
                <span className="text-sm">+261 34 05 633 35</span>
            </div>
            <div className="w-full flex space-x-2 items-center hover:bg-gray-900 px-5 py-2 rounded-md cursor-pointer">
                <LocateFixed size={30} stroke="black" className="bg-white p-2 rounded-md"/>
                <span className="text-sm">099 AVA Avarajozoro Ambatolampy Tsimahafotsy</span>
            </div>
            <div className="w-full flex space-x-2 items-center hover:bg-gray-900 px-5 py-2 rounded-md cursor-pointer">
                <Calendar size={30} stroke="black" className="bg-white p-2 rounded-md"/>
                <span className="text-sm">23 Septembre 2002</span>
            </div>
        </div>

        <div className="flex items-center justify-center mt-5 ">
            <button className="bg-violet-600 text-white px-6 py-1 rounded-lg hover:bg-violet-700 flex space-x-1">
                <Download stroke="white" size={20} className="animate-bounce-slow"/>
                <span>Download CV</span>
            </button>
        </div>

    </div>
  )
}
