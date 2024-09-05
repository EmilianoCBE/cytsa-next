import { Hero } from "@/app/components/Hero";
import { heroContent, productosC900 } from "@/app/lib/data";
import { SectionContainer } from "@/app/ui/SectionContainer";
import Image from "next/image";
import { ProductCardDetail } from "@/app/productos/components/ProductCard";

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

        <div className="flex flex-col md:flex-row pb-10 md:pb-20">
          <div className='md:w-[30vw] flex items-start flex-col'>
              <h2 className="text-2xl w-full md:w-auto text-center md:text-start md:text-[42px] font-bold border-b md:leading-10 pb-8 mb-7">
                Ventajas
              </h2>
          </div>
          <div className="flex flex-col md:w-[70vw] gap-6">
            <div className="flex flex-col md:flex-row gap-6">
              <p className='text-md mb-3 md:w-[50%]'>
                Flexible, Las conexiones de PVC soportan las deformaciones del terreno como los asentamientos, además tiene la capacidad de deformarse
                sin perder su hermeticidad.
              </p>
              <p className='text-md mb-3 md:w-[50%]'>
                Unión con anillo tipo riber, es compuesto por un anillo de material elastómero el cual cuenta con un alma de acero rígido, el anillo tipo Riber genera un sello hermético y protege la conexión de vibraciones, y asentamientos de la tierra.
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-6">
              <p className='text-md mb-3 md:w-[50%]'>
                Ligereza, debido a que su peso es significativamente menor a otro tipo de conexiones, hace mas sensillo e menejo y la instalacion, logrando
                un mejor rendimiento en la obra.
              </p>
              <p className='text-md mb-3 md:w-[50%]'>
                Compatibilidad, las conexiones de pvc alcantarillado serie métrica es compatible con la línea sanitaria ya que ambos sistemas son métricos, esto facilita la instalación y su interconexión con cualquier tipo de marca y serie.
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