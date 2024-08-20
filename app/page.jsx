import { MainHero } from "@/app/components/MainHero";
import { Scroller } from "@/app/ui/Scroller";
import { Productos } from "@/app/components/Productos";
import { SectionContainer } from "@/app/ui/SectionContainer";
import EmblaCarousel from "@/app/components/EmblaCarousel";

export default function Home() {
  return (
    <main>
      <MainHero />
      <Scroller />
      <SectionContainer>
        <Productos />
      </SectionContainer>
      <SectionContainer className="pb-12 md:pb-20">
        <h2 className="text-xl md:text-[42px] font-bold">
          Acerca de Nosotros
        </h2>
        <div className="flex flex-col-reverse md:flex-row gap-4 py-8 md:py-16">
          <EmblaCarousel className='md:w-[50vw]'/>
          <div className='md:px-16 md:w-[50vw] flex items-center'>
            <p className='text-lg'>
              Conexiones y transformaciones plásticas monterrey nace en el año de 1998 en el municipio de Santa Catarina, Nuevo León, ante la necesidad de proveer conexiones de PVC de fabricación y diámetros especiales a Constructoras, contratistas, distribuidores e instaladores independientes, que encontraban en este rubro dificultades para la localización de dichas piezas especiales.​ Gracias al compromiso y la calidad que ofrecemos a nuestros clientes y al público en general, después de estos 24 años somos la mejor opción en la fabricación y asesoría en la adquisición de piezas de PVC fabricadas.
            </p>
          </div>
        </div>
      </SectionContainer>
    </main>
  );
}
