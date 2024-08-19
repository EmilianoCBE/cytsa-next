import { MainHero } from "@/app/components/MainHero";
import { Scroller } from "@/app/ui/Scroller";
import { Productos } from "@/app/components/Productos";
import { SectionContainer } from "@/app/ui/SectionContainer";

export default function Home() {
  return (
    <main>
      <MainHero />
      <Scroller />
      <SectionContainer>
        <Productos />
      </SectionContainer>

    </main>
  );
}
