'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { useTheme } from '@/lib/theme-context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

const FOCUSABLE = 'a, button, [tabindex]:not([tabindex="-1"])';

export default function Navbar() {
    const { theme, toggleTheme } = useTheme();
    const router = useRouter();
    const pathname = usePathname();
    const navRef = useRef<HTMLElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleNavClick = (
        e: React.MouseEvent<HTMLAnchorElement>,
        href: string,
    ) => {
        const [path] = href.split('#');

        if (pathname !== path) {
            e.preventDefault();
            router.push(href);
        }

        setIsMenuOpen(false);
    };

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

    useEffect(() => {
        if (!isMenuOpen) return;
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsMenuOpen(false);
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isMenuOpen]);

    const trapFocus = useCallback((e: KeyboardEvent) => {
        if (e.key !== 'Tab' || !isMenuOpen) return;
        const menu = menuRef.current;
        if (!menu) return;

        const focusable = menu.querySelectorAll<HTMLElement>(FOCUSABLE);
        if (focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey) {
            if (document.activeElement === first) {
                e.preventDefault();
                last.focus();
            }
        } else {
            if (document.activeElement === last) {
                e.preventDefault();
                first.focus();
            }
        }
    }, [isMenuOpen]);

    useEffect(() => {
        if (!isMenuOpen) return;
        const menu = menuRef.current;
        if (!menu) return;

        menu.addEventListener('keydown', trapFocus);
        return () => menu.removeEventListener('keydown', trapFocus);
    }, [isMenuOpen, trapFocus]);

    const links = [
        { label: 'Home', href: '/' },
        { label: 'About', href: '/#about' },
        { label: 'Portfolio', href: '/portfolio' },
        { label: 'Skills', href: '/#skills' },
        { label: 'Experience', href: '/#experience' },
        { label: 'Certificates', href: '/#certificates' },
        { label: 'Contact', href: '/#contact' },
    ];

    return (
        <nav ref={navRef} id="navbar" aria-label="Main navigation">
            <div className="nav-inner glass">
                <Link
                    href="/"
                    className="nav-logo"
                    onClick={(e) => handleNavClick(e, '/')}
                    aria-label="Home"
                >
                    almavi<span>.</span>
                </Link>
                <div className="nav-links" role="list">
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className={'nav-link'}
                            onClick={(e) => handleNavClick(e, link.href)}
                            role="listitem"
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
                        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={isMenuOpen}
                        aria-controls="mobileMenu"
                    >
                        <span aria-hidden="true" />
                        <span aria-hidden="true" />
                        <span aria-hidden="true" />
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
                ref={menuRef}
                className={`mobile-menu glass${isMenuOpen ? ' open' : ''}`}
                id="mobileMenu"
                role="menu"
                aria-label="Navigation menu"
            >
                {links.map((link) => (
                    <a
                        key={link.href}
                        href={link.href}
                        className={'mobile-link'}
                        role="menuitem"
                        onClick={(e) => handleNavClick(e, link.href)}
                    >
                        {link.label}
                    </a>
                ))}
            </div>
        </nav>
    );
}
