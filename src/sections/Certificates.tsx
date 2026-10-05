'use client';

import Link from 'next/link';
import Image from 'next/image';
import { coursesData } from '@/lib/courses';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import { useI18n } from '@/lib/i18n/i18n-context';
import ViewAll from '@/components/ViewAll';

const MONTHS_EN = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const MONTHS_ID = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];

function formatCertDate(dateStr?: string, lang: 'en' | 'id' = 'en', fallback = '01 Jan 2025') {
    if (!dateStr) return fallback;
    const [y, m, d] = dateStr.split('-');
    const mIdx = Number(m) - 1;
    if (mIdx < 0 || mIdx > 11 || !d || !y) return fallback;
    const months = lang === 'id' ? MONTHS_ID : MONTHS_EN;
    return `${d.padStart(2, '0')} ${months[mIdx]} ${y}`;
}

export default function Certificates({
    children,
    limit,
}: {
    children?: React.ReactNode;
    limit?: number;
}) {
    const { t, lang } = useI18n();
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
                        const date = specDates?.[cert.id] ?? formatCertDate(cert.date, lang, t.certificates.certDesc);
                        const category =
                            cert.category === 'Specialization'
                                ? t.courses.specializationBadge
                                : cert.category === 'Competency Certificate'
                                ? t.courses.competencyBadge
                                : cert.category === 'Competition & Award'
                                ? t.courses.awardBadge
                                : cert.category === 'Professional Certificate'
                                ? t.courses.certBadge
                                : cert.category;
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
                                <p className="cert-desc">
                                    {category && (
                                        <>
                                            <span className="cert-category">{category}</span>
                                            <span className="cert-divider" aria-hidden="true" />
                                        </>
                                    )}
                                    <span className="cert-date">{date}</span>
                                    {cert.status && cert.status !== 'completed' && (
                                        <>
                                            <span className="cert-divider" aria-hidden="true" />
                                            <span className={`cert-status-badge status-${cert.status}`}>
                                                {cert.status === 'in-progress'
                                                    ? lang === 'id' ? 'Sedang Berjalan' : 'In Progress'
                                                    : lang === 'id' ? 'Segera Hadir' : 'Coming Soon'}
                                            </span>
                                        </>
                                    )}
                                </p>
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
