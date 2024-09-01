'use client'
import dynamic from "next/dynamic";
import { heroContent } from "@/app/lib/data";
import { ContactCard } from "./components/ContactCard";
import { Hero } from "@/app/components/Hero";
import { SectionContainer } from "@/app/ui/SectionContainer";
// import { Map } from "@/app/contacto/ui/Map";
const DynamicMap = dynamic(() => import("@/app/contacto/components/Map"), {ssr: false})

export default function Home() {
  const { title, heroImage } = heroContent.contacto

  return (
    <main className="flex flex-col">
      <Hero title={title} breadCrumb="Contacto" heroImage={heroImage} />

      <SectionContainer className='pb-20 w-full'>
        <ContactCard />
      </SectionContainer>

      <DynamicMap />
    </main>
  );
}
