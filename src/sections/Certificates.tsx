'use client';

import Link from 'next/link';
import Image from 'next/image';
import { coursesData } from '@/lib/courses';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBuilding,
    faCalendarAlt,
    faBookOpen,
    faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import { useI18n } from '@/lib/i18n/i18n-context';
import ViewAll from '@/components/ViewAll';

export default function Certificates({
    children,
    limit,
}: {
    children?: React.ReactNode;
    limit?: number;
}) {
    const { t } = useI18n();
    const sortedCerts = [...coursesData.certificates].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    );
    const displayedCerts = limit
        ? sortedCerts.slice(0, limit)
        : sortedCerts;

    return (
        <section id="certificates">
            <div className="container">
                {children}
                <h2 className="section-title">{t.certificates.eyebrow}</h2>
                <div className="cert-list">
                    {displayedCerts.map((cert) => {
                        const specTitles = t.certificates.specs as Record<string, string> | undefined;
                        const title = specTitles?.[cert.id] ?? cert.title;
                        const specDates = t.certificates.dates as Record<string, string> | undefined;
                        const date = specDates?.[cert.id] ?? t.certificates.certDesc;
                        return (
                        <Link
                            key={cert.id}
                            href={`/certificates/${cert.id}`}
                            className="cert-card"
                            aria-label={`${t.certificates.viewSpecAria}${title}`}
                        >
                            <div className="cert-logo">
                                <Image
                                    src={cert.logo}
                                    alt={cert.provider}
                                    width={120}
                                    height={40}
                                    className="cert-logo-img"
                                />
                            </div>
                            <div className="cert-body">
                                <h3 className="cert-title">{title}</h3>
                                <p className="cert-desc">{date}</p>
                            </div>
                            <div className="cert-arrow">
                                <FontAwesomeIcon
                                    icon={faArrowRight}
                                    className="cert-arrow-icon"
                                />
                            </div>
                        </Link>
                        );
                    })}
                </div>
                {limit && (
                    <ViewAll
                        href="/certificates"
                        label={t.certificates.viewAll}
                    />
                )}
            </div>
        </section>
    );
}
