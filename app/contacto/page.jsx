'use client'
import dynamic from "next/dynamic";
import { ContactCard } from "./components/ContactCard";
// import { Map } from "@/app/contacto/ui/Map";
const DynamicMap = dynamic(() => import("@/app/contacto/components/Map"), {ssr: false})

export default function Home() {
  return (
    <main className="flex flex-col md:flex-row md:pt-[133px]">
      <section className="md:w-[50vw]">
        <ContactCard />
      </section>
      <section className="md:w-[50vw]">
        <DynamicMap />
      </section>
    </main>
  );
}
