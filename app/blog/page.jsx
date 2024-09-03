import { Hero } from "@/app/components/Hero";
import { entradasBlog, heroContent} from "@/app/lib/data";
import { SectionContainer } from "@/app/ui/SectionContainer";
import { EntradaBlog } from "@/app/blog/components/EntradaBlog";

export default function Home() {
  const { title, heroImage } = heroContent.blog

  return (
    <main className='flex flex-col'>
      <Hero title={title} breadCrumb="Blog" heroImage={heroImage} />

      <SectionContainer className='flex flex-col gap-5 mb-20'>
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