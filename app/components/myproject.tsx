"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Eye} from 'lucide-react'

import Ecommerce from '../images/e-commerce.webp'
import Portf from '../images/capt_portfolio.jpg'

export default function myproject() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 w-full gap-2 '>
      <div className='bg-gray-800 hover:bg-gray-900 cursor-pointer rounded-t-xl rounded-b-xl'>
        <Image alt='ecommerce' src={Ecommerce} className='w-full rounded-t-xl'/>
        <div className='px-5 space-y-2 py-2 '>
          <h1 className='text-white font-bold text-xl'>Platerforme E-commerce </h1>
          <p className='text-sm text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Voluptas accusamus atque, molestiae culpa sint natus accusantium sed
          </p>
          <button className='bg-blue-700 hover:bg-blue-800 text-white px-3 py-1 rounded-lg text-sm flex space-x-1'>
            <Eye stroke='white' size={20}/>
            <span>Voir le code</span>
          </button>
        </div>
      </div>
      <div className='bg-gray-800 hover:bg-gray-900 cursor-pointer rounded-t-xl rounded-b-xl'>
        <Image alt='ecommerce' src={Portf} className='w-full rounded-t-xl'/>
        <div className='px-5 space-y-2 py-2 '>
          <h1 className='text-white font-bold text-xl'>Portfolio </h1>
          <ul className='text-white '>
            <li>Next JS</li>
            <li>TypeScript</li>
            <li>Tailwind CSS</li>
          </ul>
          <button className='bg-blue-700 hover:bg-blue-800 text-white px-3 py-1 rounded-lg text-sm  '>
            <Link href="https://github.com/Rojokabut/portfolio" className='flex items-center justify-center space-x-1' target="_blank">
              <Eye stroke='white' size={20}/>
              <span>Voir le code</span>
            </Link> 
          </button>
        </div>
      </div>
    </div>
  )
}
