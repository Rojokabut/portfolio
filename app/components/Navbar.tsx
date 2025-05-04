import React from 'react'

import { Github , Menu} from 'lucide-react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div className='lg:hidden fixed w-full z-10 overflow-hidden'>
      <div className='flex items-center justify-between bg-[#0f172a] px-3 py-1 w-full rounded-b-lg'>
        <div className='flex items-center justify-center space-x-2 cursor-pointer'>
            <Menu className='text-gray-300 ' width={20} height={20}/>
            <Link href="#" className='text-gray-400 font-semibold'>Rojoniaina</Link>
        </div>
        <Link href="https://github.com/Rojokabut" target="_blank" className='flex flex-row space-x-1 items-center justify-center bg-gray-800 hover:bg-gray-900 rounded-lg px-4 py-1 cursor-pointer'>
            <Github width={18} height={18} color='white'/>
            <span className='text-white'>Github</span>
        </Link>
      </div>
    </div>
  )
}
