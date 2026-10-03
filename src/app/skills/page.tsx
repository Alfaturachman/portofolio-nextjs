import { Metadata } from 'next';
import Skills from '@/sections/Skills';
import Breadcrumb from '@/components/Breadcrumb';
import Tx from '@/components/Tx';

export const metadata: Metadata = {
    title: 'Skills | Alfaturachman Maulana Pahlevi',
    description:
        'Full-stack and machine learning toolset: languages, frontend, backend, database, infrastructure, and the data science stack I use to build and ship models.',
    openGraph: {
        title: 'Skills | Alfaturachman Maulana Pahlevi',
        description:
            'Full-stack and machine learning toolset: languages, frontend, backend, database, infrastructure, and the data science stack I use to build and ship models.',
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
