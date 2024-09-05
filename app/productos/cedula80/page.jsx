import { Hero } from "@/app/components/Hero";
import { heroContent, productosCedula80 } from "@/app/lib/data";
import { SectionContainer } from "@/app/ui/SectionContainer";
import Image from "next/image";
import { ProductCardDetail } from "@/app/productos/components/ProductCard";
import { SubBreadcrumb } from "@/app/ui/SubBreadcrumb";

export default function Home() {
  const { title, heroImage } = heroContent.cedula80

  return (
    <main className='flex flex-col items-center'>
      <Hero title={title} breadCrumb='Cédula 80' heroImage={heroImage}/>
      <SectionContainer className='pb-10 md:pb-20 w-full'>
        <div className="flex flex-col md:flex-row pb-10 md:pb-20">
          <div className='md:w-[50vw] flex items-start flex-col'>
              <h2 className="text-2xl w-full md:w-auto text-center md:text-start md:text-[42px] font-bold border-b md:leading-10 pb-8 mb-7">
                Sistema Cédula 80
              </h2>
              <p className='text-md mb-3'>
                Excelente resistencia química, paredes lisas, bajo peso, facilidad de instalación, durable, fabricación de acuerdo a la Norma ASTM D1785.Soporta una presión de 15.4 kg/cm2 o 220 PSI.
              </p>
              <p className='text-md mb-3'>
                La tubería cédula 80 cuenta además con la aprobación de la norma NSF-61 (nacional sanitización foundatión) para su aplicación en agua potable e incluso en presencia de pH menores a 5.
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
            productosCedula80.slice(0, 2).map((product, index) => (
              <ProductCardDetail key={index} title={product.titleDetail} image={product.image} titleExist={false}/>
            ))
          }
        </div>

        <div className="flex flex-col md:flex-row pb-10 md:pb-20 gap-6">
          <div className='md:w-[50%] flex items-start flex-col'>
            {/* <h2 className="text-2xl w-full md:w-auto text-center md:text-start md:text-[42px] font-bold border-b md:leading-10 pb-8 mb-7">
              Sistema C-900
            </h2> */}
            <p className='text-md mb-3'>
              La tubería cédula 80 no se oxida ni se corroe, garantizando así un sistema de alto rendimiento a través del tiempo y con un mínimo de mantenimiento.
            </p>
            <p className='text-md mb-3'>
              Se aplica a plantas de suministro de agua ,torres de enfriamiento, sistemas ácidos en refinerías metalmecánica y talleres de cromado, línea de químicos, línea de desechos, inyección de cloro y dióxido de cloro, sistema de manejo de cáusticos entre otras.
            </p>
            {/* <p className='text-md mb-3'>
              Anillo o sello hermético: anillo tipo rieber para c-900 norma ASTM F-477
            </p>
            <div className='mb-3'>
              <SubBreadcrumb text='Un elemento de caucho flexible que proporciona un sello efectivo entre la campana y el tubo.' />
              <SubBreadcrumb text='Un elemento de refuerzo moldeado en polipropileno, fusionado al caucho que sirve para mantener el sello en su lugar durante el ensamble de la junta y el proceso de formado de la campana.' />
              <SubBreadcrumb text='El sello se fabrica en dos materiales. Para los diámetros hasta 200mm se usa elastómero termoplástico en el área de sello y polipropileno en la banda de refuerzo.' />
            </div> */}
          </div>
          <div className="flex flex-col md:w-[50%] gap-6">
            <p className='text-md mb-3'>
            No se recomienda el uso de tubería de PVC en sistemas de conducción y almacenamiento de aire o gas tampoco se recomienda llevar a cabo la prueba de hermeticidad del sistema con aire o cualquier tipo de gas comprimido ya que puede generarse una sobrepresión excesiva y causar fallas explosivas que pueden dañar al personal.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-10 md:pb-20">
          {
            productosCedula80.slice(2).map((product, index) => (
              <ProductCardDetail key={index} title={product.titleDetail} image={product.image} titleExist={false}/>
            ))
          }
        </div>
      </SectionContainer>
    </main>
  )
}