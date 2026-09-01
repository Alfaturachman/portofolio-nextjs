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

export default function Certificates({ children }: { children?: React.ReactNode }) {
    const { t } = useI18n();

    return (
        <section id="certificates">
            <div className="container">
                {children}
                <h2 className="section-title">{t.certificates.eyebrow}</h2>
                <div className="cert-list">
                    {coursesData.specializations.map((spec) => (
                        <Link
                            key={spec.id}
                            href={`/certificates/${spec.id}`}
                            className="cert-row"
                            aria-label={`${t.certificates.viewSpecAria}${spec.title}`}
                        >
                            <div className="cert-logo">
                                <Image
                                    src="/assets/images/logo/ibm.svg"
                                    alt={spec.provider}
                                    width={120}
                                    height={40}
                                    className="cert-logo-img"
                                />
                            </div>
                            <div className="cert-body">
                                <h3 className="cert-title">{spec.title}</h3>
                                <p className="cert-desc">
                                    {t.certificates.certDescPre}
                                    {spec.provider}
                                    {t.certificates.certDescMid}
                                    {spec.title.replace(
                                        `${spec.provider} `,
                                        '',
                                    )}
                                    {t.certificates.certDescPost}
                                </p>
                            </div>
                            <div className="cert-arrow">
                                <FontAwesomeIcon
                                    icon={faArrowRight}
                                    className="cert-arrow-icon"
                                />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
