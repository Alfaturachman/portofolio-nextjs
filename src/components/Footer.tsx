'use client';

import { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowRight,
    faArrowUp,
    faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import {
    faGithub,
    faLinkedin,
    faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { useI18n } from '@/lib/i18n/i18n-context';

export default function Footer() {
    const footerRef = useRef<HTMLElement>(null);
    const { t } = useI18n();

    useEffect(() => {
        const footer = footerRef.current;
        if (!footer) return;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = footer.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            footer.style.setProperty('--mouse-x', `${x}px`);
            footer.style.setProperty('--mouse-y', `${y}px`);
        };

        footer.addEventListener('mousemove', handleMouseMove);
        return () => {
            footer.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer id="footer" ref={footerRef}>
            <div className="footer-inner">
                {/* Hero CTA Box */}
                <div className="footer-hero-card">
                    <div className="footer-hero-text">
                        <h2 className="footer-hero-heading">
                            {t.footer.heroHeadingLine1}
                            <br />
                            {t.footer.heroHeadingLine2}
                        </h2>
                        <p className="footer-hero-subtext">
                            {t.footer.heroSubtext}
                        </p>
                    </div>
                    <div className="footer-hero-action">
                        <a
                            href="mailto:alfaturachmanpahlevi@gmail.com"
                            className="footer-hero-btn"
                        >
                            <span>{t.footer.heroBtn}</span>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </a>
                    </div>
                </div>

                {/* Middle Connect Row */}
                <div className="footer-mid-row">
                    <div className="footer-connect-block">
                        <p className="footer-connect-label">
                            {t.footer.connectLabel}
                        </p>
                        <div className="footer-social-row">
                            <a
                                href="https://github.com/Alfaturachman"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footer-social-link"
                            >
                                <FontAwesomeIcon icon={faGithub} />
                                <span>GitHub</span>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/alfaturachman-maulana-pahlevi-4981302b6/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footer-social-link"
                            >
                                <FontAwesomeIcon icon={faLinkedin} />
                                <span>LinkedIn</span>
                            </a>
                            <a
                                href="https://www.instagram.com/al.mavi/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footer-social-link"
                            >
                                <FontAwesomeIcon icon={faInstagram} />
                                <span>Instagram</span>
                            </a>
                            <a
                                href="mailto:alfaturachmanpahlevi@gmail.com"
                                className="footer-social-link"
                            >
                                <FontAwesomeIcon icon={faEnvelope} />
                                <span>Email</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="footer-bottom-bar">
                    <span className="footer-copyright-text">
                        &copy; {new Date().getFullYear()} Alfaturachman Maulana Pahlevi
                    </span>
                    <button
                        onClick={scrollToTop}
                        className="footer-back-to-top-btn"
                        aria-label={t.footer.backToTopAria}
                    >
                        <span className="footer-back-to-top-text">
                            {t.footer.backToTop}
                        </span>
                        <FontAwesomeIcon icon={faArrowUp} />
                    </button>
                </div>
            </div>
        </footer>
    );
}
