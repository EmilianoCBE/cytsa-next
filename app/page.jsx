'use client'
import { MainHero } from "@/app/components/MainHero";
import { Scroller } from "@/app/ui/Scroller";
import { Productos } from "@/app/components/Productos";
import { SectionContainer } from "@/app/ui/SectionContainer";
import EmblaCarousel from "@/app/components/EmblaCarousel";
import { SecondaryButton } from "@/app/ui/Buttons";

export default function Home() {
  return (
    <main>
      <MainHero />
      <Scroller />
      <SectionContainer>
        <Productos />
      </SectionContainer>
      <SectionContainer className="pb-12 md:pb-20">
        
        <div className="flex flex-col-reverse md:flex-row gap-4 py-8 md:py-16">
          <EmblaCarousel className='md:w-[50vw]'/>
          <div className='md:px-16 md:w-[50vw] flex items-start flex-col'>
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <span className="text-lg font-medium text-gray-800">Acerca de Nosotros</span>
            </div>
            <h2 className="text-xl md:text-[42px] font-bold border-b md:leading-10 pb-8 mb-7">
              Somos la mejor opción en la fabricación y asesoría en la adquisición de piezas de PVC fabricadas.
            </h2>
            <p className='text-md'>
              Conexiones y transformaciones plásticas monterrey nace en el año de 1998 en el municipio de Santa Catarina, Nuevo León, ante la necesidad de proveer conexiones de PVC de fabricación y diámetros especiales a Constructoras, contratistas, distribuidores e instaladores independientes, que encontraban en este rubro dificultades para la localización de dichas piezas especiales.​ Gracias al compromiso y la calidad que ofrecemos a nuestros clientes y al público en general.
            </p>
            <SecondaryButton link='/nosotros' text='Conoce más' classNames='mt-8' />
          </div>
        </div>
      </SectionContainer>
    </main>
  );
}
