import React from 'react'
import {motion} from 'framer-motion'
import { fadeIn } from '../variants';
import { FaReact } from 'react-icons/fa';
import { AiOutlineCloudServer } from 'react-icons/ai';
import { MdWavingHand } from 'react-icons/md'; // 👋 style très parlant
// import { HiHandRaised } from 'react-icons/hi2'; // ✋ moderne et simple



export default function about() {
  return (
    <div className='overflow-hidden'>
        <div className='text-center'>
            <h1 className='lg:hidden block text-white text-2xl font-bold '>A propos</h1>
        </div>
        <motion.div 
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false}}
            className='bg-gray-900 p-6 rounded-2xl shadow-lg  border border-blue-950 flex flex-col space-y-2 text-gray-300 mt-6'>
            <div className='text-white flex space-x-2'>
                <span className='text-blue-400 text-xl font-bold'>Bonjour!</span>
                <motion.div
                    animate={{
                        rotate: [0, 20, -10, 20, -5, 0], // rotation "waving"
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatDelay: 1,
                        ease: "easeInOut"
                    }}
                    className="inline-block"
                    >
                    <MdWavingHand size={25} className="text-yellow-400" />
                </motion.div>

            </div>
            <p className='sm:text-lg text-sm'>
                Je m&apos;appelle <span className='font-bold text-white'>Rojo, </span> 
                je suis un développeur fullStack passionné par les technologies modernes et l&apos;apprentissage continu.  
            </p>
            <p className='sm:text-lg text-sm'>
                J&apos;aime concevoir des applications performantes et intuitives, aussi bien pour le web et pour le mobile,
               en utilisant des frameworks web modernes et des outils backend performants
            </p>
            <p className='sm:text-lg text-sm'>
                Curieux et motivé, je cherche constamment à progresser, à découvrir de nouvelles pratiques de développement, 
                et à relever des défis techniques concrets. 
            </p>
        </motion.div>
       <div className="mt-10">
            <h1 className="text-xl font-bold col-span-full text-white">Qu&apos;est-ce que je fais ?</h1>
            <div className='xl:flex xl:space-x-4 space-y-4 xl:space-y-0 space-x-0 mt-2'>
                <motion.div
                    variants={fadeIn("right", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once: false}}
                    className='bg-[#C9D6FF] flex items-center space-x-3 p-4 rounded-xl '>
                    <div>
                        <FaReact size={60} className='text-blue-500'/>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold text-blue-500">Développement Frontend</h2>
                        <p className="text-gray-900 flex flex-col space-y-1 mt-2">
                            <span>
                                Création d’interfaces modernes, responsives et intuitives à l’aide de technologies comme React.js, React Native, Next.js et Tailwind CSS.  
                            </span>
                            <span>
                                Mise en place d’une expérience utilisateur fluide, accessible et optimisée pour tous les supports.
                            </span> 
                        </p>
                    </div>
                    
                </motion.div>

                <motion.div
                    variants={fadeIn("left", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once: false}}
                    className='flex items-center space-x-3 bg-[#C9D6FF] p-4 rounded-xl'>
                    <div>
                        <AiOutlineCloudServer size={60} className='text-blue-500'/>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold text-blue-500">Développement Backend</h2>
                        <p className="text-gray-900 flex flex-col space-y-1 mt-2">
                            <span>
                                Conception d’APIs performantes et sécurisées avec Node.js, Express et Django.  
                            </span>
                            <span>
                                Gestion des bases de données (MongoDB, MySQL), de l’authentification, et de la logique serveur pour assurer stabilité et scalabilité.
                            </span>
                        </p>
                    </div>
                    
                </motion.div>
            </div>
        </div>

    </div>
  )
}
