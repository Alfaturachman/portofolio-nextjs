'use client';

import { useEffect, useRef, useState } from 'react';
import { useTheme } from '@/lib/theme-context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

export default function Navbar() {
    const { theme, toggleTheme } = useTheme();
    const router = useRouter();
    const pathname = usePathname();
    const navRef = useRef<HTMLElement>(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleNavClick = (
        e: React.MouseEvent<HTMLAnchorElement>,
        href: string,
    ) => {
        const [path] = href.split('#');

        // If navigating to a different page, use Next.js router for SPA transition
        if (pathname !== path) {
            e.preventDefault();
            router.push(href);
        }

        // If on the same page, do not preventDefault. Let the browser handle the hash natively.
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

    const links = [
        { label: 'Home', href: '/' },
        { label: 'About', href: '/#about' },
        { label: 'Skills', href: '/#skills' },
        { label: 'Experience', href: '/#experience' },
        { label: 'Portfolio', href: '/portfolio' },
        { label: 'Certificates', href: '/#certificates' },
        { label: 'Contact', href: '/#contact' },
    ];

    return (
        <nav ref={navRef} id="navbar">
            <div className="nav-inner glass">
                <Link
                    href="/"
                    className="nav-logo"
                    onClick={(e) => handleNavClick(e, '/')}
                >
                    almavi<span>.</span>
                </Link>
                <div className="nav-links">
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="nav-link"
                            onClick={(e) => handleNavClick(e, link.href)}
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
                        onClick={(e) => handleNavClick(e, link.href)}
                    >
                        {link.label}
                    </a>
                ))}
            </div>
        </nav>
    );
}
