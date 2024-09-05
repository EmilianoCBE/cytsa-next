import { Hero } from "@/app/components/Hero";
import { heroContent, productosHidraulico } from "@/app/lib/data";
import { SectionContainer } from "@/app/ui/SectionContainer";
import Image from "next/image";
import { ProductCardDetail } from "@/app/productos/components/ProductCard";
import { SubBreadcrumb } from "@/app/ui/SubBreadcrumb";

export default function Home() {
  const { title, heroImage } = heroContent.hidraulico

  return (
    <main className='flex flex-col items-center'>
      <Hero title={title} breadCrumb='Hidráulico' heroImage={heroImage}/>
      <SectionContainer className='pb-10 md:pb-20 w-full'>
        <div className="flex flex-col md:flex-row pb-10 md:pb-20 gap-6">
          <div className='md:w-[50vw] flex items-start flex-col'>
              <h2 className="text-2xl w-full md:w-auto text-center md:text-start md:text-[42px] font-bold border-b md:leading-10 pb-8 mb-7">
                Conexiones Hidráulicas Sistema Inglés
              </h2>
              <p className='text-md mb-3'>
              Las conexiones hidráulicas sistema inglés se utilizan en las redes de agua potable, tanto en sistemas de riego, plantas de tratamiento,
              líneas principales como secundarias, etc.
              </p>
              {/* <p className='text-md mb-3'>
                Se fabrican en dos series con la siguiente rigidez.
              </p>
              <p className='text-md mb-3'>
                Serie 25 a 1.0 kgf/cm2 y Serie 20 a 1.9 kgf/cm2.
              </p> */}
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
            productosHidraulico.slice(0, 2).map((product, index) => (
              <ProductCardDetail key={index} title={product.titleDetail} image={product.image} />
            ))
          }
        </div>

        <div className="flex flex-col md:flex-row pb-10 md:pb-20 gap-6">
          <div className='md:w-[50vw] flex items-start flex-col'>
              <h2 className="text-2xl w-full md:w-auto text-center md:text-start md:text-[42px] font-bold border-b md:leading-10 pb-8 mb-7">
                Conexiones Hidráulicas Sistema Métrico
              </h2>
              <p className='text-md mb-3'>
                Las conexiones Hidráulicas con campana sistema métrico se utilizan en líneas principales para el abastecimiento de agua potable,
                sistemas de riego, plantas de tratamiento, entre otras.
              </p>
              {/* <p className='text-md mb-3'>
                Se fabrican en dos series con la siguiente rigidez.
              </p>
              <p className='text-md mb-3'>
                Serie 25 a 1.0 kgf/cm2 y Serie 20 a 1.9 kgf/cm2.
              </p> */}
          </div>
          <div className="flex flex-col md:w-[50vw]">
            {/* <Image
              src="/hidraulicoCover.jpg"
              fill={true}
              objectFit="cover"
              alt="Alcantarillado"
            /> */}
            <SubBreadcrumb text='Resistente a al corrosión.' />
            <SubBreadcrumb text='Ligero.' />
            <SubBreadcrumb text='No contamina el fluido que transporta.' />
            <SubBreadcrumb text='Bajo coefeiciente de fricción.' />
            <SubBreadcrumb text='No se incrusta.' />
            <SubBreadcrumb text='Resistente a al Electrolisis.' />
            <SubBreadcrumb text='Facil instalación.' />
          </div>
        </div>

        {/* <div className="flex flex-col md:flex-row pb-10 md:pb-20">
          <div className='md:w-[30vw] flex items-start flex-col'>
              <h2 className="text-2xl w-full md:w-auto text-center md:text-start md:text-[42px] font-bold border-b md:leading-10 pb-8 mb-7">
                Ventajas Sístema Inglés
              </h2>
          </div>
          <div className="flex flex-col md:w-[70vw] gap-6">
            <div className="flex flex-col md:flex-row gap-6">
              <p className='text-md mb-3 md:w-[33%]'>
                Resistente a la corrosión, ligero.
              </p>
              <p className='text-md mb-3 md:w-[33%]'>
                No contamina el fluido que transporta.
              </p>
              <p className='text-md mb-3 md:w-[33%]'>
                Bajo coefeiciente de fricción.
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-6">
              <p className='text-md mb-3 md:w-[50%]'>
                No se incrusta.
              </p>
              <p className='text-md mb-3 md:w-[50%]'>
                Resistente a al Electrolisis
              </p>
              <p className='text-md mb-3 md:w-[50%]'>
                Facil instalación.
              </p>
            </div>
          </div>
        </div> */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-10 md:pb-20">
          {
            productosHidraulico.slice(2).map((product, index) => (
              <ProductCardDetail key={index} title={product.titleDetail} image={product.image} />
            ))
          }
        </div>
      </SectionContainer>
    </main>
  )
}