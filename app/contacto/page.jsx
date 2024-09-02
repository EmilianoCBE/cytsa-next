'use client'
import dynamic from "next/dynamic";
import { heroContent } from "@/app/lib/data";
import { ContactCard } from "@/app/contacto/components/ContactCard";
import { Hero } from "@/app/components/Hero";
import { SectionContainer } from "@/app/ui/SectionContainer";
import { SubBreadcrumb } from '@/app/ui/SubBreadcrumb'
import { contactCardContent } from "@/app/lib/data";
// import { Map } from "@/app/contacto/ui/Map";

const DynamicMap = dynamic(() => import("@/app/contacto/components/Map"), {ssr: false})

export default function Home() {
  const { title, heroImage } = heroContent.contacto

  return (
    <main className="flex flex-col">
      <Hero title={title} breadCrumb="Contacto" heroImage={heroImage} />

      <SectionContainer className='pb-20 w-full'>
        <div className='flex justify-center flex-col items-start gap-8 md:gap-16'>
          <div className='flex flex-col gap-5 items-center md:items-start'>
            <SubBreadcrumb text='Pongámonos en Contacto' />
            <h2 className='text-2xl md:text-[50px] text-center md:text-start font-bold'>Nuestros medios de comunicación</h2>
          </div>

          <div className="flex flex-col md:flex-row md:justify-evenly gap-4">
            {
              contactCardContent.map((content, index) => (
                <ContactCard key={index} {...content} />
              ))
            }
          </div>
        </div>
      </SectionContainer>

      <DynamicMap />
    </main>
  );
}
