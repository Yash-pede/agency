import AnimatedBG from "@/components/sections/AnimatedBG";
import Hero from "@/components/sections/Hero";
import InfiniteCursol from "@/components/sections/InfiniteCursol";
import Projects from "@/components/sections/Projects";
export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center space-y-7 py-8 md:py-10">
      <AnimatedBG />
      <Hero />
      <InfiniteCursol />
      <Projects />
    </section>
  );
}
