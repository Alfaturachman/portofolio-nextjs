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

export default function Certificates() {
    const { t } = useI18n();

    return (
        <section id="certificates">
            <div className="container">
                <h2 className="section-title">{t.certificates.eyebrow}</h2>
                <div className="portfolio-grid">
                    {coursesData.specializations.map((spec) => (
                        <Link
                            key={spec.id}
                            href={`/${spec.id}`}
                            className="project-card cert-card"
                            aria-label={`${t.certificates.viewSpecAria}${spec.title}`}
                        >
                            <div className="project-img-wrapper cert-logo-wrap">
                                <Image
                                    src="/assets/images/logo/ibm.svg"
                                    alt="IBM"
                                    width={120}
                                    height={40}
                                    className="cert-brand-logo"
                                />
                            </div>
                            <div className="project-content">

                                <h3 className="project-title">{spec.title}</h3>
                                <p className="project-desc">
                                    {t.certificates.certDescPre}
                                    {spec.provider}
                                    {t.certificates.certDescMid}
                                    {spec.title.replace(
                                        `${spec.provider} `,
                                        '',
                                    )}
                                    {t.certificates.certDescPost}
                                </p>
                                <span className="project-footer">
                                    <span className="project-link-text">
                                        {t.certificates.viewCredential}
                                    </span>
                                    <div className="project-arrow">
                                        <FontAwesomeIcon
                                            icon={faArrowRight}
                                            className="project-arrow-icon"
                                        />
                                    </div>
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
