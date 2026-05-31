import Hero from '@/sections/Hero';
import About from '@/sections/About';
import Skills from '@/sections/Skills';
import Experience from '@/sections/Experience';
import PortfolioSection from '@/sections/PortfolioSection';
import Certificates from '@/sections/Certificates';
import Contact from '@/sections/Contact';

export default function Home() {
    return (
        <>
            <Hero />
            <About />
            <Skills />
            <Experience />
            <PortfolioSection />
            <Certificates />
            <Contact />
        </>
    );
}
