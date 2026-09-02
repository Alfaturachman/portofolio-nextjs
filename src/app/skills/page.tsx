import { Metadata } from 'next';
import Skills from '@/sections/Skills';
import Breadcrumb from '@/components/Breadcrumb';
import Tx from '@/components/Tx';

export const metadata: Metadata = {
    title: 'Skills | Alfaturachman Maulana Pahlevi',
    description: 'Explore the tools and technologies I master.',
    openGraph: {
        title: 'Skills | Alfaturachman Maulana Pahlevi',
        description: 'Explore the tools and technologies I master.',
        url: 'https://almavi.vercel.app/skills',
    },
};

export default function SkillsPage() {
    return (
        <div className="route-content">
            <Skills>
                <Breadcrumb items={[{ label: <Tx k="navbar.skills" /> }]} />
            </Skills>
        </div>
    );
}
