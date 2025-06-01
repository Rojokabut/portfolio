"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Eye } from 'lucide-react'
import {motion} from 'framer-motion'
import { fadeIn } from '../variants'

import Chat from '../images/chat.png'

import Portf from '../images/capt.png'

export default function myproject() {
  return (
    <div className='overflow-hidden'>
      <div className='text-center mb-1'>
        <h1 className='text-white text-2xl font-bold lg:hidden self-center'>Mes Projets</h1>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 w-full gap-2 '>
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false}}
        className='  bg-gray-900 border border-blue-950 rounded-t-xl rounded-b-xl'>
          <Image alt='ecommerce' src={Chat} className='w-full rounded-t-xl'/>
          <div className='px-5 space-y-2 py-2 '>
            <h1 className='text-white font-bold text-xl'>Message de discussion (Ancien projet)</h1>
            <p className='text-sm text-gray-300'>
              Cette application permet aux utilisateurs de discuter en temps réel grâce à un système de messagerie instantanée.
              Elle est construite avec ReactJS côté frontend et Node.js avec Socket.io côté backend pour gérer les connexions en temps réel.
            </p>
            <div className='flex flex-wrap gap-2'>
              <span className='text-white px-3 py-1 bg-blue-400 rounded-lg w-fit text-xs'>ReactJS</span>
              <span className='text-white px-3 py-1 bg-violet-400 rounded-lg w-fit text-xs'>JavaScript</span>
              <span className='text-white px-3 py-1 bg-green-400 rounded-lg w-fit text-xs'>Tailwind CSS</span>
              <span className='text-white px-3 py-1 bg-yellow-400 rounded-lg w-fit text-xs'>Socket.io</span>
              <span className='text-white px-3 py-1 bg-red-400 rounded-lg w-fit text-xs'>Nodejs/Express</span>
              <span className='text-white px-3 py-1 bg-orange-400 rounded-lg w-fit text-xs'>Mongo DB</span>
            </div>

            <div className='flex flex-wrap gap-2 '>
              <button className=' bg-blue-700 hover:bg-blue-800 text-white px-3 py-1 rounded-lg text-sm '>
                <Link href="https://github.com/Rojokabut/frontend_chat" className='flex items-center justify-center space-x-1' target="_blank">
                  <Eye stroke='white' size={20}/>
                  <span>Voir le code frontend</span>
                </Link> 
              </button>
              <button className=' bg-blue-700 hover:bg-blue-800 text-white px-3 py-1 rounded-lg text-sm '>
                <Link href="https://github.com/Rojokabut/backend_chat" className='flex items-center justify-center space-x-1' target="_blank">
                  <Eye stroke='white' size={20}/>
                  <span>Voir le code backend</span>
                </Link> 
              </button>
            </div>
            
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false}}
        className='bg-gray-900 rounded-t-xl rounded-b-xl border border-blue-950'>
          <Image alt='ecommerce' src={Portf} className='w-full rounded-t-xl'/>
          <div className='px-5 py-2 '>
            <h1 className='text-white font-bold text-xl'>Portfolio </h1>
            <p className='text-gray-300 text-sm'>
              Ce portfolio présente mes projets, compétences et outils utilisés en développement web. 
              Il est développé avec Next.js pour la performance, TypeScript pour la robustesse du code, 
              et Tailwind CSS pour un design moderne et responsive.
            </p>

            <div className='flex flex-wrap gap-2 mt-5'>
              <span className='text-white px-3 py-1 bg-blue-400 rounded-lg w-fit text-xs'>Next JS</span>
              <span className='text-white px-3 py-1 bg-violet-400 rounded-lg w-fit text-xs'>TypeScript</span>
              <span className='text-white px-3 py-1 bg-green-400 rounded-lg w-fit text-xs'>Tailwind CSS</span>
            </div>
            <button className='bg-blue-700 hover:bg-blue-800 text-white px-3 py-1 rounded-lg text-sm mt-10'>
              <Link href="https://github.com/Rojokabut/portfolio" className='flex items-center justify-center space-x-1' target="_blank">
                <Eye stroke='white' size={20}/>
                <span>Voir le code</span>
              </Link> 
            </button>
          </div>
        </motion.div>
      </div>
    </div>
    
  )
}
