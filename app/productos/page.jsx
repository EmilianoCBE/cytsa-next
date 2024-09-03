import { Hero } from "@/app/components/Hero";
import { heroContent } from "@/app/lib/data";
import { SectionContainer } from "@/app/ui/SectionContainer";
import { SubBreadcrumb } from '@/app/ui/SubBreadcrumb'
import { productos } from '@/app/lib/data'
import { ProductCard } from "@/app/components/ProductCard";

export default function Home() {
  const { title, description, heroImage } = heroContent.productos

  return (
    <main className='flex flex-col items-center'>
      <Hero title={title} description='Productos' heroImage={heroImage}/>
      <SectionContainer className='pb-20 w-full'>
        <div className="flex flex-col gap-5 items-center md:items-start border-b border-[#d1d1d1] pb-12">
          <SubBreadcrumb text='Nuestros productos' />
          <h2 className='text-2xl md:text-[50px] text-center md:text-start font-bold'>
            {description}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-10 md:pt-20">
          {
            productos.map((card, index) => (
              <ProductCard key={index} {...card} />
            ))
          }
        </div>
      </SectionContainer>
    </main>
  )
}