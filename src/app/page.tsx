import Hero from '@/sections/Hero';
import About from '@/sections/About';
import Skills from '@/sections/Skills';
import Experience from '@/sections/Experience';
import PortfolioSection from '@/sections/PortfolioSection';
import Certificates from '@/sections/Certificates';
import Contact from '@/sections/Contact';
import { Analytics } from '@vercel/analytics/next';

export default function Home() {
    return (
        <>
            <Analytics />
            <Hero />
            <About />
            <PortfolioSection limit={3} />
            <Skills />
            <Experience />
            <Certificates />
            <Contact />
        </>
    );
}
