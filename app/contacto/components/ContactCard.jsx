import { FacebookOutlined, InstagramOutlined, WhatsAppOutlined } from '@ant-design/icons'
import React from 'react'

export const ContactCard = () => {
  return (
    <section className='flex justify-center flex-col items-start gap-10 py-10 px-8 md:px-16'>
      <h1 className='text-2xl md:text-[50px] font-bold'>Contáctanos</h1>
      <div className=''>
        <p className='text-xl py-2'>Puede comunicarse por teléfono al:</p>
        <a href="tel:+8180327700" className='text-orange-500 text-lg font-bold'>(81)80-32-77-00</a>

        <p className='text-xl py-2'>
          Así mismo por medio de fax al:
        </p>
        <a href="tel:+8180327700" className='text-orange-500 text-lg font-bold'>(81)80-32-77-00</a>

        <p className='text-xl py-2'>
          También puede mandarnos un mensaje por Whatsapp:
        </p>
        <a href="tel:+8180327700">
          <div className='flex items-center gap-2'>
            <WhatsAppOutlined style={{fontSize: '30px', color:'#F97316'}}/>
            <p className='text-orange-500 font-bold text-lg'>Whatsapp</p>
          </div>
        </a>

        <p className='text-xl py-2'>O puedes seguirnos en nuestras redes sociales:</p>
      </div>
      <div className='flex gap-4'>
        <a href="https://www.facebook.com/profile.php?id=61555752673989">
          <FacebookOutlined style={{fontSize: '30px', color:'#F97316'}}/>
        </a>
        <a href="https://www.instagram.com/cytsapvc/">
          <InstagramOutlined style={{fontSize: '30px', color:'#F97316'}}/>
        </a>
      </div>
    </section>
  )
}
