"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Eye , FileWarning} from 'lucide-react'

import Ecommerce from '../images/e-commerce.webp'
import Portf from '../images/capt_portfolio.jpg'

export default function myproject() {
  return (
    <div className='overflow-hidden'>
      <div className='text-center mb-1'>
        <h1 className='text-white text-2xl font-bold lg:hidden self-center'>Mes Projets</h1>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 w-full gap-2 '>
        <div className='bg-gray-800 rounded-t-xl rounded-b-xl'>
          <Image alt='ecommerce' src={Ecommerce} className='w-full rounded-t-xl'/>
          <div className='px-5 space-y-2 py-2 '>
            <h1 className='text-white font-bold text-xl'>Platerforme E-commerce </h1>
            {/* <p className='text-sm text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptas accusamus atque, molestiae culpa sint natus accusantium sed
            </p> */}
            <button className='bg-red-400 hover:bg-red-500 cursor-auto text-white px-3 py-1 rounded-lg text-sm flex space-x-1'>
              <FileWarning stroke='white' size={20}/>
              <span>Pas encore disponible</span>
            </button>
          </div>
        </div>
        <div className='bg-gray-800 rounded-t-xl rounded-b-xl'>
          <Image alt='ecommerce' src={Portf} className='w-full rounded-t-xl'/>
          <div className='px-5 py-2 '>
            <h1 className='text-white font-bold text-xl'>Portfolio </h1>
            <div className='flex lg:flex-row flex-col gap-1 mt-2'>
              <span className='text-white px-3 py-1 bg-blue-400 rounded-lg w-fit text-xs'>Next JS</span>
              <span className='text-white px-3 py-1 bg-violet-400 rounded-lg w-fit text-xs'>TypeScript</span>
              <span className='text-white px-3 py-1 bg-red-400 rounded-lg w-fit text-xs'>Tailwind CSS</span>
            </div>
            <button className='bg-blue-700 hover:bg-blue-800 text-white px-3 py-1 rounded-lg text-sm mt-10'>
              <Link href="https://github.com/Rojokabut/portfolio" className='flex items-center justify-center space-x-1' target="_blank">
                <Eye stroke='white' size={20}/>
                <span>Voir le code</span>
              </Link> 
            </button>
          </div>
        </div>
      </div>
    </div>
    
  )
}
