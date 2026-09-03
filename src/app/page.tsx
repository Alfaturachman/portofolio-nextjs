import Hero from '@/sections/Hero';
import Skills from '@/sections/Skills';
import Experience from '@/sections/Experience';
import Education from '@/sections/Education';
import PortfolioSection from '@/sections/PortfolioSection';
import Certificates from '@/sections/Certificates';
import Contact from '@/sections/Contact';
import { Analytics } from '@vercel/analytics/next';

export default function Home() {
    return (
        <>
            <Analytics />
            <Hero />
            <PortfolioSection limit={2} />
            <Experience compact />
            <Education />
            <Certificates limit={2} />
            <Skills preview />
            {/* <Contact /> */}
        </>
    );
}
