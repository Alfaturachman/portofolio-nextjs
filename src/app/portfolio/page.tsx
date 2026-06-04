import { Metadata } from 'next';
import PortfolioSection from '@/sections/PortfolioSection';

export const metadata: Metadata = {
    title: 'Portfolio | Alfaturachman Maulana Pahlevi',
    description: 'Explore the projects and solutions I have built.',
    openGraph: {
        title: 'Portfolio | Alfaturachman Maulana Pahlevi',
        description: 'Explore the projects and solutions I have built.',
        url: 'https://almavi.vercel.app/portfolio',
    },
};

export default function PortfolioPage() {
    return (
        <div className="mt-8 bg-secondary">
            <PortfolioSection />
        </div>
    );
}
