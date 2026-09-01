import { Metadata } from 'next';
import Certificates from '@/sections/Certificates';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
    title: 'Certificates | Alfaturachman Maulana Pahlevi',
    description: 'Explore my certificates and course specializations.',
    openGraph: {
        title: 'Certificates | Alfaturachman Maulana Pahlevi',
        description: 'Explore my certificates and course specializations.',
        url: 'https://almavi.vercel.app/certificates',
    },
};

export default function CertificatesPage() {
    return (
        <div className="route-content">
            <Certificates>
                <Breadcrumb items={[{ label: 'Certificates' }]} />
            </Certificates>
        </div>
    );
}
