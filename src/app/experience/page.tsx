import { Metadata } from 'next';
import Experience from '@/sections/Experience';
import Breadcrumb from '@/components/Breadcrumb';
import Tx from '@/components/Tx';

export const metadata: Metadata = {
    title: 'Experience | Alfaturachman Maulana Pahlevi',
    description: 'My journey and career history.',
    openGraph: {
        title: 'Experience | Alfaturachman Maulana Pahlevi',
        description: 'My journey and career history.',
        url: 'https://almavi.vercel.app/experience',
    },
};

export default function ExperiencePage() {
    return (
        <div className="route-content">
            <Experience>
                <Breadcrumb items={[{ label: <Tx k="navbar.experience" /> }]} />
            </Experience>
        </div>
    );
}
