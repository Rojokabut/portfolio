"use client"

import React from 'react'

import { Calendar , University, GraduationCap} from 'lucide-react'

export default function formation() {
  const formations = [
    {
      date: "2024 -2025",
      diplome : "LICENCE Informatique (Programmation)",
      ecole: "IFT Ambondrona"
    },
    {
      date: "2025 (5 jours)",
      diplome : "Cértificat Création d'application mobile avec React Native",
      ecole: "Orange Digital Center"
    },
    {
      date: "2021 (6 mois)",
      diplome : "Certificat Anglais parlé",
      ecole: "FLTC Tsaralalana"
    },
    {
      date: "2019 - 2020",
      diplome : "Bacc série C",
      ecole: "Aceem Ivato"
    }
  ]
  return (
    <div className='w-full mt-5 grid md:grid-cols-2 grid-cols-1 xl:gap-5 lg:gap-2 gap-4'>
      {
        formations.map(({date, diplome, ecole})=> (
            <div key={date} className='animate__animated animate__backInDown flex flex-col bg-gradient-to-br from-[#0f172a] to-[#1e293b] p-6 rounded-2xl shadow-lg text-gray-100 font-semibold space-y-2'>
              <div className='flex space-x-2 items-start'>
                <Calendar stroke='gray' size={30} className=''/> 
                <span>{date}</span>
              </div>
              <div className='flex space-x-2 items-center'>
                <GraduationCap stroke='gray' size={30} className=''/> 
                <span className=''>{diplome}</span>
              </div>
              <div className='flex space-x-2 items-center'>
                <University stroke='gray' size={30} className=''/> 
                <span>{ecole}</span>
              </div>
            </div>
        ))
      }
      
      
    </div>
  )
}
