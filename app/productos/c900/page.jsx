import { Hero } from "@/app/components/Hero";
import { heroContent, productosC900 } from "@/app/lib/data";
import { SectionContainer } from "@/app/ui/SectionContainer";
import Image from "next/image";
import { ProductCardDetail } from "@/app/productos/components/ProductCard";
import { SubBreadcrumb } from "@/app/ui/SubBreadcrumb";

export default function Home() {
  const { title, heroImage } = heroContent.c900

  return (
    <main className='flex flex-col items-center'>
      <Hero title={title} breadCrumb='C-900' heroImage={heroImage}/>
      <SectionContainer className='pb-10 md:pb-20 w-full'>
        <div className="flex flex-col md:flex-row pb-10 md:pb-20">
          <div className='md:w-[50vw] flex items-start flex-col'>
              <h2 className="text-2xl w-full md:w-auto text-center md:text-start md:text-[42px] font-bold border-b md:leading-10 pb-8 mb-7">
                Sistema C-900
              </h2>
              <p className='text-md mb-3'>
              Especificaciones de Conexiones de pvc tipo c-900 clase 165 rd-25 y rd-18 clase 235.
              </p>
              <p className='text-md mb-3'>
                Se utiliza principalmente para la conducción y abastecimiento de agua potable y sistemas de líneas de drenaje pluvial, entre otras
              </p>
              
          </div>
          <div className="flex md:w-[50vw] relative">
            <Image
              src="/hidraulicoCover.jpg"
              fill={true}
              objectFit="cover"
              alt="Alcantarillado"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-10 md:pb-20">
          {
            productosC900.slice(0, 2).map((product, index) => (
              <ProductCardDetail key={index} title={product.titleDetail} image={product.image} />
            ))
          }
        </div>

        <div className="flex flex-col md:flex-row pb-10 md:pb-20 gap-6">
          <div className='md:w-[50%] flex items-start flex-col'>
            {/* <h2 className="text-2xl w-full md:w-auto text-center md:text-start md:text-[42px] font-bold border-b md:leading-10 pb-8 mb-7">
              Sistema C-900
            </h2> */}
            <p className='text-md mb-3'>
              Las piezas se fabrican en tubería sistema Rd-25 clase 165 resiste 11.60 (kgf/cm2) 
            </p>
            <p className='text-md mb-3'>
              Rd-18 clase 235 que resiste (14.00 kgf/cm2)
            </p>
            <p className='text-md mb-3'>
              Anillo o sello hermético: anillo tipo rieber para c-900 norma ASTM F-477
            </p>
            <div className='mb-3'>
              <SubBreadcrumb text='Un elemento de caucho flexible que proporciona un sello efectivo entre la campana y el tubo.' />
              <SubBreadcrumb text='Un elemento de refuerzo moldeado en polipropileno, fusionado al caucho que sirve para mantener el sello en su lugar durante el ensamble de la junta y el proceso de formado de la campana.' />
              <SubBreadcrumb text='El sello se fabrica en dos materiales. Para los diámetros hasta 200mm se usa elastómero termoplástico en el área de sello y polipropileno en la banda de refuerzo.' />
            </div>
          </div>
          <div className="flex flex-col md:w-[50%] gap-6">
            <p className='text-md mb-3'>
              Tipo de cemento para la fabricación de las piezas de pvc:
            </p>
            <div>
              <p className='text-md mb-3'>
                NMX T-021 E ISO 16433 compuesto por:
              </p>
              <SubBreadcrumb text='Para diámetros de 110mm a los 315 mm se utiliza el cemento marca Weld-on 719 blanco para todo tipo de cedulas y clases hasta 30” de diámetro, viscosidad gruesa, con tiempo lento de fraguado, formulación de máxima calidad y gran resistencia para sistemas de conexiones  industriales de grandes dimensiones.' />
              <p className='text-md mb-3'>
                Los procesos de corte de tubería, formado de campana, ensamblado de piezas y demás pasos para la elaboración de las mismas, son exclusivos de cytsa de cv.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-10 md:pb-20">
          {
            productosC900.slice(2).map((product, index) => (
              <ProductCardDetail key={index} title={product.titleDetail} image={product.image} />
            ))
          }
        </div>
      </SectionContainer>
    </main>
  )
}