import { Metadata } from 'next';
import PortfolioSection from '@/sections/PortfolioSection';
import Breadcrumb from '@/components/Breadcrumb';
import Tx from '@/components/Tx';

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
        <div className="route-content">
            <PortfolioSection>
                <Breadcrumb items={[{ label: <Tx k="navbar.portfolio" /> }]} />
            </PortfolioSection>
        </div>
    );
}
