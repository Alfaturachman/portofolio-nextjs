'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { coursesData } from '@/lib/courses';

export default function Certificates() {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalSrc, setModalSrc] = useState('');
    const [modalTitle, setModalTitle] = useState('');

    const openModal = (src: string, title: string) => {
        setModalSrc(src);
        setModalTitle(title);
        setModalOpen(true);
    };

    const closeModal = useCallback(() => {
        setModalOpen(false);
    }, []);

    useEffect(() => {
        if (!modalOpen) return;
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') closeModal();
        };
        document.addEventListener('keydown', handleKey);
        return () => document.removeEventListener('keydown', handleKey);
    }, [modalOpen, closeModal]);

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
                        >
                            <div className="project-img-wrapper cert-logo-wrap">
                                <img
                                    src="/assets/images/logo/ibm.svg"
                                    alt="IBM"
                                    className="cert-brand-logo"
                                />
                            </div>
                            <div className="project-content">
                                <div className="project-tags">
                                    <span className="project-tag">
                                        <i className="fas fa-building" />{' '}
                                        {spec.provider}
                                    </span>
                                    <span className="project-tag">
                                        <i className="fas fa-calendar-alt" />{' '}
                                        2026
                                    </span>
                                    <span className="project-tag">
                                        <i className="fas fa-book-open" />{' '}
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
                                <span
                                    className="project-footer"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        window.open(spec.credentialUrl, '_blank', 'noopener,noreferrer');
                                    }}
                                >
                                    <span className="project-link-text">
                                        View Credential
                                    </span>
                                    <div className="project-arrow">
                                        <i className="fas fa-arrow-right project-arrow-icon" />
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
