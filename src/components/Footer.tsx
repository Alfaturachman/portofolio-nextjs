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
    faXTwitter,
} from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

export default function Footer() {
    const footerRef = useRef<HTMLElement>(null);
    const router = useRouter();
    const pathname = usePathname();

    const handleNavClick = (
        e: React.MouseEvent<HTMLAnchorElement>,
        href: string,
    ) => {
        const [path] = href.split('#');

        if (pathname !== path) {
            e.preventDefault();
            router.push(href);
        }
    };

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
                            <FontAwesomeIcon icon={faArrowRight} />
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
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/alfaturachman-maulana-pahlevi-4981302b6/"
                                    className="footer-social-icon"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn"
                                >
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                                <a
                                    href="https://www.instagram.com/al.mavi/"
                                    className="footer-social-icon"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Instagram"
                                >
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                                <a
                                    href="https://twitter.com/alfaturachman"
                                    className="footer-social-icon"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="X (Twitter)"
                                >
                                    <FontAwesomeIcon icon={faXTwitter} />
                                </a>
                                <a
                                    href="mailto:alfaturachmanpahlevi@gmail.com"
                                    className="footer-social-icon"
                                    aria-label="Email"
                                >
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </a>
                            </div>
                        </div>
                        <div className="footer-card glass-dark">
                            <p className="footer-card-label">Navigate</p>
                            <div className="footer-nav-row">
                                <a
                                    href="/"
                                    className="footer-nav-link"
                                    onClick={(e) => handleNavClick(e, '/')}
                                >
                                    Home
                                </a>
                                <a
                                    href="/#about"
                                    className="footer-nav-link"
                                    onClick={(e) =>
                                        handleNavClick(e, '/#about')
                                    }
                                >
                                    About
                                </a>
                                <a
                                    href="/#skills"
                                    className="footer-nav-link"
                                    onClick={(e) =>
                                        handleNavClick(e, '/#skills')
                                    }
                                >
                                    Skills
                                </a>
                                <a
                                    href="/#experience"
                                    className="footer-nav-link"
                                    onClick={(e) =>
                                        handleNavClick(e, '/#experience')
                                    }
                                >
                                    Experience
                                </a>
                                <a
                                    href="/portfolio"
                                    className="footer-nav-link"
                                    onClick={(e) =>
                                        handleNavClick(e, '/portfolio')
                                    }
                                >
                                    Portfolio
                                </a>
                                <a
                                    href="/#contact"
                                    className="footer-nav-link"
                                    onClick={(e) =>
                                        handleNavClick(e, '/#contact')
                                    }
                                >
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
                            <FontAwesomeIcon icon={faArrowUp} />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}
