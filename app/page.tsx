import Hero from '@/app/sections/Hero';
import About from '@/app/sections/About';
import Skills from '@/app/sections/Skills';
import Experience from '@/app/sections/Experience';
import PortfolioSection from '@/app/sections/PortfolioSection';
import Certificates from '@/app/sections/Certificates';
import Contact from '@/app/sections/Contact';

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
