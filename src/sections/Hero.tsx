'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { useI18n } from '@/lib/i18n/i18n-context';
import { socials } from '@/lib/socials';

export default function Hero() {
    const { t } = useI18n();

    return (
        <section id="home" aria-label="Introduction">
            <div className="container">
                {/* Profile card row */}
                <div className="hero-profile-row hero-fade-in-1">
                    {/* Banner (aurora blobs + base image) */}
                    <div className="hero-banner" aria-hidden="true">
                        <Image
                            src="/assets/images/banner/atmosphere.png"
                            alt=""
                            fill
                            sizes="(max-width: 480px) 90vw, (max-width: 900px) calc(100vw - 96px), 768px"
                            priority
                            className="hero-banner-img"
                        />
                    </div>

                    {/* Profile body */}
                    <div className="hero-profile-body">
                        <div className="hero-avatar-wrap">
                            <Image
                                src="/assets/images/profile/profile_almavi.PNG"
                                alt="Alfaturachman Maulana Pahlevi"
                                width={120}
                                height={120}
                                className="hero-avatar"
                                priority
                            />
                        </div>

                        <div className="hero-identity">
                            <h1 className="hero-name">Alfaturachman Maulana Pahlevi</h1>
                            <p className="hero-role">{t.hero.role}</p>
                            <p className="hero-bio">{t.hero.bio}</p>
                            <p className="hero-meta">
                                <span className="hero-availability">
                                    <FontAwesomeIcon icon={faBriefcase} />
                                    {t.hero.badge}
                                </span>
                                <span className="hero-meta-divider" aria-hidden="true" />
                                <span className="hero-location">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                                    Semarang, Indonesia
                                </span>
                            </p>

                            <nav className="hero-socials" aria-label="Social media links">
                                {socials.map((s) => (
                                    <a
                                        key={s.id}
                                        id={`hero-social-${s.id}`}
                                        href={s.href}
                                        target={s.href.startsWith('mailto') ? undefined : '_blank'}
                                        rel={s.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                                        className="hero-social-link"
                                        aria-label={s.label}
                                    >
                                        {s.icon}
                                    </a>
                                ))}
                            </nav>

                            {/* CTA */}
                            <Link href="/portfolio" className="hero-cta-primary" id="hero-cta-projects">
                                {t.hero.ctaProjects}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
