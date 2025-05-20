"use client";

import React from 'react'
import Image from 'next/image'
import { DatabaseZapIcon,  Settings2} from 'lucide-react'
import {motion} from 'framer-motion'


import vscode from '../logo/vscode.webp'
import postman from '../logo/postman1.png'
import mongodb from '../logo/mongodb.png'
import mysql from '../logo/mysql.png'
import expoGo from '../logo/expoGo.png'
import git from '../logo/git.png'
import github from '../logo/github.png'
import { fadeIn } from '../variants';

export default function Tools() {
  return (
    <div className='overflow-hidden'>
      <div className='text-center mb-1'>
        <h1 className='text-white text-2xl font-bold lg:hidden self-center'>Tools & Database</h1>
      </div>
      <div id="deux-elements" className="w-full grid md:grid-cols-2 grid-cols-1 xl:gap-5 lg:gap-2 gap-4 ">
        {/* Database card */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: true}}
        className=" px-4 py-3 rounded-2xl bg-gray-900 border border-blue-950 text-white shadow-lg space-y-5">
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
        </motion.div>

        {/* Tools card */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: true}}
         className=" px-4 py-3 rounded-2xl bg-gray-900 [#0f172a] [#1e293b] text-white border border-blue-950 shadow-lg space-y-5">
          <div className="flex items-center space-x-4">
            <div className="bg-gradient-to-tr from-gray-200 to-white p-3 rounded-xl">
              <Settings2 width={35} height={35} className='text-blue-500'/>
            </div>
            <h2 className="text-xl font-semibold">Tools & Others</h2>
          </div>

          <div className="grid lg:grid-cols-3 grid-cols-2 gap-3">
            <div className="flex items-center justify-center p-3 bg-white rounded-xl font-medium">
              <Image alt='vscode' src={vscode} className='lg:w-full md:w-[50%]  w-[60%]'/>
            </div>
            <div className="flex items-center justify-center p-3 bg-white rounded-xl font-medium">
              <Image alt='postman' src={postman} className='lg:w-full md:w-[50%] w-[60%]'/>
            </div>
            <div className="flex items-center justify-center p-3 bg-white  rounded-xl font-medium">
              <Image alt='postman' src={github} className='lg:w-full md:w-[50%] w-[60%]'/>
            </div>
            <div className="flex items-center justify-center p-3 bg-white  rounded-xl font-medium">
              <Image alt='vscode' src={git} className='lg:w-full md:w-[50%] w-[60%]'/>
            </div>
            <div className="flex items-center justify-center p-3 bg-white  rounded-xl font-medium">
              <Image alt='expoGo' src={expoGo} className='lg:w-full md:w-[50%] w-[60%]'/>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
   
  )
}
