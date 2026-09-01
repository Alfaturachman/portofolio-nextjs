'use client';

import { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
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
