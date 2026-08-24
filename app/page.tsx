import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Impact } from "@/components/sections/Impact";
import { DeepDive } from "@/components/sections/DeepDive";
import { Culture } from "@/components/sections/Culture";
import { Portfolio } from "@/components/sections/Portfolio";
import { Skills } from "@/components/sections/Skills";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Impact />
        <DeepDive />
        <Culture />
        <Portfolio />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
