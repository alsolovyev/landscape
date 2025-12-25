import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
import Portfolio from "@/components/home/Portfolio";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Services />
      <Portfolio />
      <About />
    </div>
  );
}
