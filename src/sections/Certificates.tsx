'use client';

import Link from 'next/link';
import Image from 'next/image';
import { coursesData } from '@/lib/courses';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faCalendarAlt, faBookOpen, faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function Certificates() {
    return (
        <section id="certificates">
            <div className="section-max">
                <div className="section-eyebrow">Certificates</div>
                <h2 className="section-title">
                    Certificates I have
                    <br />
                    earned
                </h2>
                <div className="portfolio-grid">
                    {coursesData.specializations.map((spec) => (
                        <Link
                            key={spec.id}
                            href={`/courses/${spec.id}`}
                            className="project-card cert-card"
                            aria-label={`View ${spec.title} certificate`}
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
                                <div className="project-tags">
                                    <span className="project-tag">
                                        <FontAwesomeIcon icon={faBuilding} />{' '}
                                        {spec.provider}
                                    </span>
                                    <span className="project-tag">
                                        <FontAwesomeIcon icon={faCalendarAlt} />{' '}
                                        2026
                                    </span>
                                    <span className="project-tag">
                                        <FontAwesomeIcon icon={faBookOpen} />{' '}
                                        {
                                            coursesData.courses.filter(
                                                (c) =>
                                                    c.specializationId ===
                                                    spec.id,
                                            ).length
                                        }{' '}
                                        Courses
                                    </span>
                                </div>
                                <h3 className="project-title">{spec.title}</h3>
                                <p className="project-desc">
                                    Professional certification from{' '}
                                    {spec.provider} that covers the fundamentals
                                    of{' '}
                                    {spec.title.replace(
                                        `${spec.provider} `,
                                        '',
                                    )}
                                    .
                                </p>
                                <span className="project-footer">
                                    <span className="project-link-text">
                                        View Credential
                                    </span>
                                    <div className="project-arrow">
                                        <FontAwesomeIcon icon={faArrowRight} className="project-arrow-icon" />
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
