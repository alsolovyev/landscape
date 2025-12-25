import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
import Portfolio from "@/components/home/Portfolio";
import Contact from "@/components/home/Contact";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Testimonials />
      <Contact />
    </div>
  );
}
