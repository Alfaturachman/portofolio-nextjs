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
                            src="/assets/images/banner/monochrome-banner.png"
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
                            <h1 className="hero-name">
                                Alfaturachman Maulana Pahlevi
                                <svg
                                    viewBox="0 0 22 22"
                                    className="hero-verified"
                                    xmlns="http://www.w3.org/2000/svg"
                                    role="img"
                                    aria-label="Verified"
                                >
                                    <title>Verified</title>
                                    <path
                                        className="hero-verified-badge"
                                        d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.053-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.607-.274 1.264-.144 1.898.13.634.435 1.219.88 1.688.47.443 1.054.749 1.688.879.633.13 1.29.083 1.897-.14.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.607.224 1.264.272 1.897.14.634-.13 1.217-.436 1.687-.878.445-.47.75-1.055.88-1.688.13-.634.083-1.291-.14-1.897.586-.274 1.084-.705 1.438-1.246.354-.541.551-1.17.57-1.817Z"
                                    />
                                    <path
                                        className="hero-verified-check"
                                        d="m9.053 14.9-3.5-3.5 1.238-1.238 2.262 2.262 5.315-5.315L15.5 8.35l-6.447 6.55Z"
                                    />
                                </svg>
                            </h1>
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
