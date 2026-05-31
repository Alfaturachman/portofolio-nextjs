'use client';

import { useEffect, useRef } from 'react';
import { useTheme } from '@/lib/theme-context';

export default function Navbar() {
    const { theme, toggleTheme } = useTheme();
    const navRef = useRef<HTMLElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const nav = navRef.current;
        if (!nav) return;

        const handleScroll = () => {
            nav.classList.toggle('scrolled', window.scrollY > 50);
        };
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        const hamburger = document.getElementById('hamburger');
        const menu = menuRef.current;
        if (!hamburger || !menu) return;
        hamburger.classList.toggle('active');
        menu.classList.toggle('open');
    };

    const links = [
        { label: 'About', href: '/#about' },
        { label: 'Skills', href: '/#skills' },
        { label: 'Experience', href: '/#experience' },
        { label: 'Portfolio', href: '/#portfolio' },
        { label: 'Certificates', href: '/#certificates' },
        { label: 'Contact', href: '/#contact' },
    ];

    return (
        <nav ref={navRef} id="navbar">
            <div className="nav-inner glass">
                <a href="/#home" className="nav-logo">
                    almavi<span>.</span>
                </a>
                <div className="nav-links">
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="nav-link"
                        >
                            {link.label}
                        </a>
                    ))}
                    <button
                        className="nav-link theme-toggle"
                        onClick={toggleTheme}
                        aria-label={
                            theme === 'dark'
                                ? 'Switch to light mode'
                                : 'Switch to dark mode'
                        }
                    >
                        <i
                            className={`fas ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`}
                            aria-hidden="true"
                        />
                    </button>
                </div>
                <div className="nav-actions">
                    <button
                        className="nav-mobile-theme"
                        onClick={toggleTheme}
                        aria-label={
                            theme === 'dark'
                                ? 'Switch to light mode'
                                : 'Switch to dark mode'
                        }
                    >
                        <i
                            className={`fas ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`}
                        />
                    </button>
                    <button
                        className="hamburger"
                        id="hamburger"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                        aria-expanded="false"
                        aria-controls="mobileMenu"
                        role="button"
                    >
                        <span />
                        <span />
                        <span />
                    </button>
                </div>
            </div>
            <div
                ref={menuRef}
                className="mobile-menu glass"
                id="mobileMenu"
                role="menu"
            >
                {links.map((link) => (
                    <a
                        key={link.href}
                        href={link.href}
                        className="mobile-link"
                        role="menuitem"
                        onClick={toggleMenu}
                    >
                        {link.label}
                    </a>
                ))}
            </div>
        </nav>
    );
}
