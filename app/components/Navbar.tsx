import React from 'react'

import { Github } from 'lucide-react'

export default function Navbar() {
  return (
    <div className='lg:hidden fixed w-full z-10 overflow-hidden'>
      <div className='flex items-center justify-between bg-[#0f172a] px-3 py-1 w-full rounded-b-lg'>
        <label htmlFor="" className='text-gray-400 font-semibold'>Rojoniaina</label>
        <div className='flex flex-row space-x-1 items-center justify-center bg-gray-800 hover:bg-gray-900 rounded-lg px-4 py-1 cursor-pointer'>
            <Github width={18} height={18} color='white'/>
            <span className='text-white'>Github</span>
        </div>
      </div>
    </div>
  )
}
