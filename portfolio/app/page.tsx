import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ParallaxGradientBackground } from '@/components/layout/ParallaxGradientBackground';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Experience } from '@/components/sections/Experience';
import { Projects } from '@/components/sections/Projects';
import { Certifications } from '@/components/sections/Certifications';
import { HobbyProjects } from '@/components/sections/HobbyProjects';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <ParallaxGradientBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Certifications />
        <HobbyProjects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
