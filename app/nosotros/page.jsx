import { Hero } from "@/app/components/Hero";
import { heroContent, nosotrosCardsContent } from "@/app/lib/data";
import { SectionContainer } from "@/app/ui/SectionContainer";
import { InfoCard } from "@/app/nosotros/components/InfoCard";
import EmblaCarousel from "@/app/components/EmblaCarousel";
import { SecondaryButton } from "@/app/ui/Buttons";

export default function Home() {
  const { title, heroImage } = heroContent.nosotros

  return (
    <main className='flex flex-col items-center'>
      <Hero title={title} breadCrumb={'Nosotros'} heroImage={heroImage}/>

      <SectionContainer className="flex flex-col py-10 md:py-20 gap-4 px-8">

        <div className="flex flex-col-reverse md:flex-row gap-4 py-8 md:py-16">
          <EmblaCarousel className='md:w-[50vw] h-[200px] md:h-auto'/>
          <div className='md:px-16 md:w-[50vw] flex items-start flex-col'>
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-2 h-2 bg-red-700 rounded-full"></div>
              <span className="text-lg font-medium text-gray-800">Acerca de Nosotros</span>
            </div>
            <h2 className="text-2xl md:text-[42px] font-bold border-b md:leading-10 pb-8 mb-7">
              Somos la mejor opción en la fabricación y asesoría en la adquisición de piezas de PVC fabricadas.
            </h2>
            <p className='text-md'>
              Conexiones y transformaciones plásticas monterrey nace en el año de 1998 en el municipio de Santa Catarina, Nuevo León, ante la necesidad de proveer conexiones de PVC de fabricación y diámetros especiales a Constructoras, contratistas, distribuidores e instaladores independientes, que encontraban en este rubro dificultades para la localización de dichas piezas especiales.​ Gracias al compromiso y la calidad que ofrecemos a nuestros clientes y al público en general.
            </p>
            <SecondaryButton link='/nosotros' text='Conoce más' classNames='mt-8' />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
          {
            nosotrosCardsContent.map((card, index) => (
              <div key={index} className={`${
                index === 0 ? 'md:col-span-5' :
                index === 1 ? 'md:col-span-2' :
                index === 2 ? 'md:col-span-3' :
                ''
              }`}>
                <InfoCard {...card} />
              </div>
            ))
          }
        </div>
      </SectionContainer>
    </main>
  )
}