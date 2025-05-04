"use client";

import React from 'react'
import Image from 'next/image'
import { Wrench , DatabaseZapIcon} from 'lucide-react'

import mongodb from '../logo/mongodb.png'
import mysql from '../logo/mysql.png'

export default function Tools() {
  return (
    <div className='overflow-hidden'>
      <div className='text-center mb-1'>
        <h1 className='text-white text-2xl font-bold lg:hidden self-center'>Database & Tools</h1>
      </div>
      <div id="deux-elements" className="w-full grid md:grid-cols-2 grid-cols-1 xl:gap-5 lg:gap-2 gap-4 overflow-hidden">
        {/* Database card */}
        <div className="animate__animated animate__bounceInLeft animate__slow px-4 py-3 rounded-2xl bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white shadow-lg space-y-5">
          <div className="flex items-center space-x-4">
            <div className="bg-gradient-to-tr from-gray-200 to-white p-3 rounded-xl">
              <DatabaseZapIcon width={35} height={35} className='text-blue-500'/>
            </div>
            <h2 className="text-xl font-semibold">Databases</h2>
          </div>

          <div className="flex gap-3">
            <div className='bg-white p-5 rounded-xl'>
              <Image src={mongodb} alt='mongodb' width={50} height={50} />
            </div>
            <div className='bg-white p-5 rounded-xl'>
              <Image src={mysql} alt='mysql' width={50} height={50} />
            </div>
          </div>
        </div>

        {/* Tools card */}
        <div className="animate__animated animate__bounceInRight px-4 py-3 rounded-2xl bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white shadow-lg space-y-5">
          <div className="flex items-center space-x-4">
            <div className="bg-gradient-to-r from-blue-200 to-blue-600 p-3 rounded-xl">
              <Wrench width={30} height={30} />
            </div>
            <h2 className="text-xl font-semibold">Tools & Others</h2>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 bg-gray-700 text-white rounded-xl font-medium">VsCode</div>
            <div className="p-3 bg-gray-700 text-white rounded-xl font-medium">Pycharm</div>
            <div className="p-3 bg-gray-700 text-white rounded-xl font-medium">Git / Github</div>
            <div className="p-3 bg-gray-700 text-white rounded-xl font-medium">Expo Go</div>
          </div>
        </div>
      </div>
    </div>
   
  )
}
