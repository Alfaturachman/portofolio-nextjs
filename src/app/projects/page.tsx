import { Metadata } from 'next';
import Projects from '@/sections/Projects';
import Breadcrumb from '@/components/Breadcrumb';
import Tx from '@/components/Tx';

export const metadata: Metadata = {
    title: 'Projects | Alfaturachman Maulana Pahlevi',
    description: 'Explore the projects and solutions I have built.',
    openGraph: {
        title: 'Projects | Alfaturachman Maulana Pahlevi',
        description: 'Explore the projects and solutions I have built.',
        url: 'https://almavi.vercel.app/projects',
    },
};

export default function ProjectsPage() {
    return (
        <div className="route-content">
            <Projects>
                <Breadcrumb items={[{ label: <Tx k="navbar.portfolio" /> }]} />
            </Projects>
        </div>
    );
}
