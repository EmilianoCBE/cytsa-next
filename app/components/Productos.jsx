import { productos } from '@/app/lib/data'
import { ProductCard } from '@/app/components/ProductCard'

export const Productos = () => {
  return (
    <section className='pt-4 md:pt-8 '>
      <h2 className='text-2xl md:text-[42px] font-bold'>
        Nuestros Productos
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-10 md:pt-20">
        {
          productos.map((producto, index) => (
            <ProductCard key={index} {...producto} />
          ))
        }
      </div>
    </section>
  )
}
