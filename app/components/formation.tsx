"use client"

import React from 'react'
import { useRef, useState, useEffect } from 'react'
import { Calendar , University, GraduationCap} from 'lucide-react'

export default function Formation() {
  const formations = [
    {
      date: "2024 - 2025",
      diplome : "LICENCE en Informatique (Programmation)",
      ecole: "IFT Ambondrona",
      animation: 'animate__slideUp'
    },
    {
      date: "2025 ",
      diplome : "Attestaion Création d'application mobile",
      ecole: "Orange Digital Center",
      animation: "animate__slideInUp"
    },
    {
      date: "2021 ",
      diplome : "Certificat Anglais parlé",
      ecole: "FLTC Tsaralalana",
      animation: "animate__slideInUp"
    },
    {
      date: "2019 - 2020",
      diplome : "Bacc série C",
      ecole: "Aceem Ivato",
      animation: 'animate__slideUp'
    }
  ]

  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        },
        {
          threshold: 0.9,
        }
      );
  
      const currentRef = ref.current;
      if (currentRef) {
        observer.observe(currentRef);
      }
  
      return () => {
        if (currentRef) observer.unobserve(currentRef);
      };
    }, []);
  return (
    <div ref={ref} className='overflow-hidden'>
      <div className='text-center mb-1'>
        <h1 className='text-white text-2xl font-bold lg:hidden self-center'>Formations</h1>
      </div>
      <div className={`${isVisible ? 'block' : 'hidden'} w-full grid md:grid-cols-2 grid-cols-1 xl:gap-5 lg:gap-2 gap-4`}>
        {
          formations.map(({date, diplome, ecole, animation})=> (
              <div key={date} className={`animate__animated ${animation} flex flex-col bg-gradient-to-br from-[#0f172a] to-[#1e293b] p-6 rounded-2xl shadow-lg text-gray-100 font-semibold space-y-2`}>
                <div className='flex space-x-2 items-start'>
                  <Calendar  size={20} className='text-blue-400'/> 
                  <span className='text-gray-300'>{date}</span>
                </div>
                <div className='flex space-x-2 items-center'>
                  <GraduationCap  size={20} className='text-blue-400'/> 
                  <span className='text-gray-300'>{diplome}</span>
                </div>
                <div className='flex space-x-2 items-center'>
                  <University  size={20} className='text-blue-400'/> 
                  <span className='text-gray-300'>{ecole}</span>
                </div>
              </div>
          ))
        }
        
        
      </div>
    </div>
    
  )
}
