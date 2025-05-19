import React from 'react'

import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'

export default function Navbar() {
  return (
    <div className='lg:hidden fixed w-full z-10 overflow-hidden'>
      <div className='flex items-center justify-between 
        bg-[#0f172a]/60 backdrop-blur-sm 
        px-3 py-1 w-full rounded-b-lg shadow-md'>
        
        <div className='flex items-center justify-center space-x-2 cursor-pointer'>
          <Link href="#" className='text-gray-300 font-semibold'>Rojoniaina</Link>
        </div>
        
        <Link href="https://github.com/Rojokabut" target="_blank"
          className='flex flex-row space-x-1 items-center justify-center 
          bg-gray-800 hover:bg-gray-900 rounded-lg px-4 py-1 cursor-pointer'>
          <FaGithub size={18} color='white'/>
          <span className='text-white'>Github</span>
        </Link>
      </div>
    </div>

  )
}
