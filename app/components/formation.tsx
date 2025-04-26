"use client"

import React from 'react'

import { Calendar , University, GraduationCap} from 'lucide-react'

export default function formation() {
  return (
    <div className='w-full mt-5 grid md:grid-cols-2 grid-cols-1 xl:gap-5 lg:gap-2 gap-4'>
      <div className='flex flex-col bg-gradient-to-br from-[#0f172a] to-[#1e293b] p-6 rounded-2xl shadow-lg text-gray-100 font-semibold space-y-2'>
        <div className='flex space-x-2 items-start'>
          <Calendar stroke='gray' size={20} className=''/> 
          <span>2024 - 2025</span>
        </div>
        <div className='flex space-x-2 items-center'>
          <GraduationCap stroke='gray' size={20} className=''/> 
          <span className=''>LICENCE Informatique (Programmation)</span>
        </div>
        <div className='flex space-x-2 items-center'>
          <University stroke='gray' size={20} className=''/> 
          <span>IFT Ambondrona</span>
        </div>
      </div>
      <div className='flex flex-col bg-gradient-to-br from-[#0f172a] to-[#1e293b] p-6 rounded-2xl shadow-lg text-gray-100 font-semibold space-y-2'>
        <div className='flex space-x-2 items-start'>
          <Calendar stroke='gray' size={20} className=''/> 
          <span>2025 (5 jours)</span>
        </div>
        <div className='flex space-x-2 items-center'>
          <GraduationCap stroke='gray' size={20} className=''/> 
          <span>Certificat Création d&apos;application mobile avec React Native</span>
        </div>
        <div className='flex space-x-2 items-center'>
          <University stroke='gray' size={20} className=''/> 
          <span>Orange Digital Center</span>
        </div>
      </div>
      <div className='flex flex-col bg-gradient-to-br from-[#0f172a] to-[#1e293b] p-6 rounded-2xl shadow-lg text-gray-100 font-semibold space-y-2'>
        <div className='flex space-x-2 items-start'>
          <Calendar stroke='gray' size={20} className=''/> 
          <span>2021 (6 mois)</span>
        </div>
        <div className='flex space-x-2 items-center'>
          <GraduationCap stroke='gray' size={20} className=''/> 
          <span>Certificat Anglais parlé</span>
        </div>
        <div className='flex space-x-2 items-center'>
          <University stroke='gray' size={20} className=''/> 
          <span>FLTC Tsaralalana</span>
        </div>
      </div>
      <div className='flex flex-col bg-gradient-to-br from-[#0f172a] to-[#1e293b] p-6 rounded-2xl shadow-lg text-gray-100 font-semibold space-y-2'>
        <div className='flex space-x-2 items-start'>
          <Calendar stroke='gray' size={20} className=''/> 
          <span>2019 - 2020</span>
        </div>
        <div className='flex space-x-2 items-center'>
          <GraduationCap stroke='gray' size={20} className=''/> 
          <span>Bacc série C</span>
        </div>
      </div>
    </div>
  )
}
