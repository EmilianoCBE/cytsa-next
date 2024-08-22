import Image from 'next/image'
import React from 'react'

export const EntradaBlog = ({date, title, link}) => {
  return (
      <a href={link} target='_blank' className='cursor-pointer border border-slate-500 px-4 py-4 w-[350px] hover:bg-orange-500 transition-all ease-in-out text-black hover:text-slate-100'>
        <div className='w-full h-full py-3'>
          <div className="flex items-center gap-3">
            <div className='bg-white rounded-full p-3 w-[80px]'>
              <Image src="/logo.png" alt="" width={60} height={60}/>
            </div>
            <span>
              {date}
            </span>
          </div>
          <h2 className='pt-3 font-bold text-md'>
            {title}
          </h2>
        </div>
      </a>
  )
}
