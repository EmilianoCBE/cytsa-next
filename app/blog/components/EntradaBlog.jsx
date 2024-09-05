import { SecondaryButton } from '@/app/ui/Buttons'
import React from 'react'

export const EntradaBlog = ({date, title, link, image}) => {
  return (
      <div className='w-[345px] md:w-[430px]'>
        <div className='w-full h-full relative overflow-hidden'>
          <div className="flex items-end justify-end bg-center bg-cover bg-no-repeat h-[224px] md:h-[280px] transition-all duration-300 hover:scale-105"
            style={{ backgroundImage: `url(${image})` }}
          >
            {/* <div className='bg-white rounded-full p-3 w-[80px]'>
              <Image src="/logo.png" alt="" width={60} height={60}/>
            </div> */}
            {/* <div className='bg-white w-20 h-20 flex justify-center items-center'>
              <span className='text-[14px]'>{date}</span>
            </div> */}
          </div>
          <div className='bg-white py-4 flex justify-start items-center border-b border-[#d9d9d9]'>
            <span className=''>{date}</span>
          </div>
          <a href={link} className='pointer hover:text-red-700 transition-all ease-in-out text-black '>
            <h2 className='pt-3 font-bold text-lg'>
              {title}
            </h2>
          </a> 
          <SecondaryButton link={link} text='Ver más' classNames='mt-3'/>
        </div>
      </div>
  )
}
