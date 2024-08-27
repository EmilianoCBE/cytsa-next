import { productos } from '@/app/lib/data'
import { ProductCard } from '@/app/components/ProductCard'

export const Productos = () => {
  return (
    <section className='pt-4 md:pt-8 '>
      <h2 className='text-2xl md:text-[42px] font-bold'>
        Nuestros Productos
      </h2>
      <div className='flex flex-col md:flex-row gap-4 justify-center md:justify-between py-8 md:py-16'>
        {
          productos.map((producto, index) => (
            <ProductCard key={index} {...producto} />
          ))
        }
      </div>
    </section>
  )
}
