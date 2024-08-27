import { Hero } from "@/app/components/Hero";
import { heroContent, nosotrosCardsContent } from "@/app/lib/data";
import { SectionContainer } from "@/app/ui/SectionContainer";
import { InfoCard } from "@/app/nosotros/components/InfoCard";

export default function Home() {
  const { title, heroImage } = heroContent.nosotros

  return (
    <main className='flex flex-col items-center'>
      <Hero title={title} breadCrumb={'Nosotros'} heroImage={heroImage}/>

      <SectionContainer className="flex flex-col items-center justify-center py-10 md:py-20 gap-4 px-8">
        {
          nosotrosCardsContent.map((card, index) => (
            <InfoCard key={index} {...card} />
          ))
        }
      </SectionContainer>
    </main>
  )
}