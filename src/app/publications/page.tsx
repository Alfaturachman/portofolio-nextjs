import { Metadata } from 'next';
import Publications from '@/sections/Publications';
import Breadcrumb from '@/components/Breadcrumb';
import Tx from '@/components/Tx';

export const metadata: Metadata = {
    title: 'Publications | Alfaturachman Maulana Pahlevi',
    description:
        'Scientific research papers and academic publications in machine learning, medical image processing, and digital health.',
    openGraph: {
        title: 'Publications | Alfaturachman Maulana Pahlevi',
        description:
            'Scientific research papers and academic publications in machine learning, medical image processing, and digital health.',
        url: 'https://almavi.vercel.app/publications',
    },
};

export default function PublicationsPage() {
    return (
        <div className="route-content">
            <Publications>
                <Breadcrumb items={[{ label: <Tx k="navbar.publications" /> }]} />
            </Publications>
        </div>
    );
}
