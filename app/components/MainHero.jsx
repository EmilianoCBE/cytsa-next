'use client'
import { motion } from 'framer-motion';
import Image from "next/image"
import Link from "next/link"
import { MainButton } from '@/app/ui/Buttons';

export const MainHero = () => {
  return (
    <div className='flex flex-col md:flex-row md:h-screen pt-[113px] md:pt-[133px]'>
      {/* <div className='md:w-[45vw] flex gap-5 flex-col justify-center md:justify-start items-start py-11 bg-[url("/hero.webp")]  md:bg-[url("/fondo.webp")] bg-cover md:bg-contain bg-bottom bg-no-repeat px-8 h-[80vh] md:h-auto'>
        <h1 className='text-2xl md:text-[50px] text-slate-100 md:text-black font-bold leading-10 md:leading-[56px]'>CONEXIONES Y TRANSFORMACIONES PLÁSTICAS DE MONTERREY</h1>
        <Link href="/contacto">
          <button className='p-3 bg-red-700 rounded-md text-slate-100 hover:bg-white hover:text-red-700 border-red-700 border transition-all ease-in-out'>
            Contáctanos
          </button>
        </Link>
      </div> */}
      <div className='md:w-[45vw] flex gap-5 flex-col justify-center items-start py-11 bg-[url("/hero.webp")]  md:bg-none bg-cover bg-bottom bg-no-repeat px-8 h-[80vh] md:h-auto'>
        <motion.h1 
          className='text-2xl md:text-[50px] text-slate-100 md:text-black font-bold leading-10 md:leading-[56px]'
          initial={{ opacity: 0, x: -100 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{
            type: "spring", 
            stiffness: 100, 
            damping: 7, 
            duration: 1.2,
            delay: 0.4
          }}
        >
          CONEXIONES Y TRANSFORMACIONES PLÁSTICAS DE MONTERREY
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, x: -100 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{
            type: "spring", 
            stiffness: 100, 
            damping: 7, 
            duration: 1.4,
            delay: 0.6
          }}
        >
          <MainButton link="/contacto" text="Contáctanos" />
        </motion.div>
      </div>
      <div className='hidden md:block md:w-[55vw] bg-[url("/hero.webp")] bg-cover bg-center'>
        
      </div>
    </div>
  )
}
