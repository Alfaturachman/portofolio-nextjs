'use client';

import { useEffect, useRef } from 'react';
import { socials } from '@/lib/socials';

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

    return (
        <footer id="footer" ref={footerRef}>
            <div className="footer-bottom-bar">
                <span className="footer-copyright-text">
                    &copy; {new Date().getFullYear()} Alfaturachman Maulana Pahlevi
                </span>
                <nav className="footer-socials" aria-label="Social media links">
                    {socials.map((s) => (
                        <a
                            key={s.id}
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
            </div>
        </footer>
    );
}
