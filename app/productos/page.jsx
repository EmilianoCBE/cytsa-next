import { Hero } from "@/app/components/Hero";
import { heroContent, nosotrosCardsContent } from "@/app/lib/data";
import { SectionContainer } from "@/app/ui/SectionContainer";

export default function Home() {
  const { title, description, heroImage } = heroContent.nosotros

  return (
    <main className='flex flex-col items-center'>
      <Hero title={title} description={description} heroImage={heroImage}/>
      <SectionContainer>
        Productos
      </SectionContainer>
    </main>
  )
}