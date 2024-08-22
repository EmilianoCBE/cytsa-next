import { Hero } from "@/app/components/Hero";
import { entradasBlog, heroContent} from "@/app/lib/data";
import { SectionContainer } from "@/app/ui/SectionContainer";
import { EntradaBlog } from "@/app/blog/components/EntradaBlog";

export default function Home() {
  const { title, description, heroImage } = heroContent.nosotros

  return (
    <main className='flex flex-col items-center'>
      <SectionContainer className='pt-[113px] md:pt-[133px] flex flex-col gap-5 md:h-screen'>
        <h1 className='text-2xl md:text-[50px] font-bold'>
          Notas del blog
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {
            entradasBlog.map((card, index) => (
              <EntradaBlog key={index} {...card} />
            ))
          }
        </div>
      </SectionContainer>
    </main>
  )
}