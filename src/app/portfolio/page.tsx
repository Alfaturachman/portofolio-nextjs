import { Metadata } from 'next';
import PortfolioSection from '@/sections/PortfolioSection';
import Breadcrumb from '@/components/Breadcrumb';

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
        <div className="pt-[20px]">
            <PortfolioSection>
                <Breadcrumb items={[{ label: 'Portfolio' }]} />
            </PortfolioSection>
        </div>
    );
}
