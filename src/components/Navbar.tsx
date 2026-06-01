'use client';

import { useEffect, useRef, useState } from 'react';
import { useTheme } from '@/lib/theme-context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
    const { theme, toggleTheme } = useTheme();
    const navRef = useRef<HTMLElement>(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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

    const toggleMenu = () => setIsMenuOpen((prev) => !prev);
    const closeMenu = () => setIsMenuOpen(false);

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
                        <FontAwesomeIcon
                            icon={theme === 'dark' ? faSun : faMoon}
                            aria-hidden={true}
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
                        <FontAwesomeIcon
                            icon={theme === 'dark' ? faSun : faMoon}
                        />
                    </button>
                    <button
                        className={`hamburger${isMenuOpen ? ' active' : ''}`}
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                        aria-expanded={isMenuOpen}
                        aria-controls="mobileMenu"
                        role="button"
                    >
                        <span />
                        <span />
                        <span />
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <div
                    className="mobile-overlay"
                    onClick={closeMenu}
                    aria-hidden="true"
                />
            )}
            <div
                className={`mobile-menu glass${isMenuOpen ? ' open' : ''}`}
                id="mobileMenu"
                role="menu"
            >
                {links.map((link) => (
                    <a
                        key={link.href}
                        href={link.href}
                        className="mobile-link"
                        role="menuitem"
                        onClick={closeMenu}
                    >
                        {link.label}
                    </a>
                ))}
            </div>
        </nav>
    );
}
