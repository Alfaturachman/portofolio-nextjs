'use client';

import { useEffect, useRef } from 'react';

export default function Footer() {
    const footerRef = useRef<HTMLElement>(null);

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
            <div className="blob footer-glow" aria-hidden="true" />
            <div className="footer-marquee" aria-hidden="true">
                <span>
                    almavi &bull; almavi &bull; almavi &bull; almavi &bull;{' '}
                    almavi &bull; almavi &bull; almavi &bull; almavi &bull;{' '}
                </span>
                <span>
                    almavi &bull; almavi &bull; almavi &bull; almavi &bull;{' '}
                    almavi &bull; almavi &bull; almavi &bull; almavi &bull;{' '}
                </span>
            </div>
            <div className="footer-inner">
                <div className="footer-grid">
                    <div className="footer-cta-card glass-dark">
                        <div className="footer-intro-wrap">
                            <span className="footer-intro-line" />
                            <p className="footer-intro">
                                Have an interesting project?
                            </p>
                        </div>
                        <h2 className="footer-heading">
                            Let&apos;s work
                            <br />
                            together.
                        </h2>
                        <a
                            href="mailto:alfaturachmanpahlevi@gmail.com"
                            className="footer-cta-btn"
                        >
                            <span>Hire Me</span>
                            <i className="fas fa-arrow-right" />
                        </a>
                    </div>
                    <div className="footer-side">
                        <div className="footer-card glass-dark">
                            <p className="footer-card-label">Connect</p>
                            <div className="footer-social-row">
                                <a
                                    href="https://github.com/Alfaturachman"
                                    className="footer-social-icon"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="GitHub"
                                >
                                    <i className="fab fa-github" />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/alfaturachman-maulana-pahlevi-4981302b6/"
                                    className="footer-social-icon"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn"
                                >
                                    <i className="fab fa-linkedin" />
                                </a>
                                <a
                                    href="https://www.instagram.com/al.mavi/"
                                    className="footer-social-icon"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Instagram"
                                >
                                    <i className="fab fa-instagram" />
                                </a>
                                <a
                                    href="https://twitter.com/alfaturachman"
                                    className="footer-social-icon"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="X (Twitter)"
                                >
                                    <i className="fab fa-x-twitter" />
                                </a>
                                <a
                                    href="mailto:alfaturachmanpahlevi@gmail.com"
                                    className="footer-social-icon"
                                    aria-label="Email"
                                >
                                    <i className="fas fa-envelope" />
                                </a>
                            </div>
                        </div>
                        <div className="footer-card glass-dark">
                            <p className="footer-card-label">Navigate</p>
                            <div className="footer-nav-row">
                                <a href="#about" className="footer-nav-link">
                                    About
                                </a>
                                <a href="#skills" className="footer-nav-link">
                                    Skills
                                </a>
                                <a
                                    href="#experience"
                                    className="footer-nav-link"
                                >
                                    Experience
                                </a>
                                <a href="/blog" className="footer-nav-link">
                                    Blog
                                </a>
                                <a
                                    href="#portfolio"
                                    className="footer-nav-link"
                                >
                                    Portfolio
                                </a>
                                <a href="#contact" className="footer-nav-link">
                                    Contact
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bar">
                    <div className="footer-bar-left">
                        <span className="footer-copy">
                            &copy; 2026 Alfaturachman Maulana Pahlevi
                        </span>
                    </div>
                    <div className="footer-bar-right">
                        <button
                            onClick={scrollToTop}
                            className="footer-back-top"
                            aria-label="Back to top"
                        >
                            <i className="fas fa-arrow-up" />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}
