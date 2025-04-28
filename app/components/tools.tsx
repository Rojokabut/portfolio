"use client"

import React from 'react'
import Image from 'next/image'
import { Wrench } from 'lucide-react'
import bdd from "../logo/data.png"

import mongodb from '../logo/mongodb.png'
import mysql from '../logo/mysql.png'


export default function tools() {
  return (
            <div id="deux elements " className="w-full lg:flex  lg:space-x-3 space-y-2 lg:space-y-0">
              <div className=" animate__animated animate__bounceInLeft lg:w-1/2 w-full px-6 py-3 rounded-2xl bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white shadow-lg space-y-5">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-tr from-gray-200 to-white p-3 rounded-xl">
                    <Image alt="backend" src={bdd} className="" width={35} height={35}/>
                  </div>
                  <h2 className="text-xl font-semibold">Databases</h2>
                </div>

                <div className="flex gap-3">
                  {/* <div className="p-3 bg-gray-700 text-white rounded-xl font-medium">MySQL</div>
                  <div className="p-3 bg-gray-700 text-white rounded-xl font-medium">MongoDB</div>
                  <div className="p-3 bg-gray-700 text-white rounded-xl font-medium">PostgreSQL</div> */}
                    <div className='bg-white p-5 rounded-xl'>
                        <Image src={mongodb} alt='mongodb' width={50} height={50}/>
                    </div>
                    <div className='bg-white p-5 rounded-xl'>
                        <Image src={mysql} alt='mysql' width={50} height={50}/>
                    </div>

                </div>
              </div>

              <div className="animate__animated animate__bounceInRight lg:w-1/2 w-full px-6 py-3 rounded-2xl bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white shadow-lg space-y-5">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-blue-200 to-blue-600 p-3 rounded-xl">
                    <Wrench  className="" width={30} height={30}/>
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
  )
}
