'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { useTheme } from '@/lib/theme-context';
import { useI18n } from '@/lib/i18n/i18n-context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

import Link from 'next/link';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import { useChatbot } from '@/lib/chatbot-context';

const FOCUSABLE = 'a, button, [tabindex]:not([tabindex="-1"])';

export default function Navbar() {
    const { theme, toggleTheme } = useTheme();
    const { lang, toggleLang, t } = useI18n();
    const { isOpen: chatOpen, toggle: toggleChat } = useChatbot();
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
        // { label: t.navbar.home, href: '/' },
        { label: t.navbar.portfolio, href: '/portfolio' },
        // { label: t.navbar.skills, href: '/skills' },
        { label: t.navbar.experience, href: '/experience' },
        { label: t.navbar.certificates, href: '/certificates' },
    ];

    return (
        <header className="nav-shell">
        <nav ref={navRef} id="navbar" aria-label={t.navbar.mainNavAria}>
            <div className="nav-inner">
                <Link
                    href="/"
                    className="nav-logo"
                    onClick={(e) => handleNavClick(e, '/')}
                    aria-label="Home"
                >
                    <Image
                        src="/assets/images/logo/logo-almavi-black.png"
                        alt="Almavi"
                        width={32}
                        height={32}
                        className="nav-logo-img nav-logo-black"
                        priority
                    />
                    <Image
                        src="/assets/images/logo/logo-almavi-white.png"
                        alt="Almavi"
                        width={32}
                        height={32}
                        className="nav-logo-img nav-logo-white"
                        priority
                    />
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
                        className="nav-link lang-toggle"
                        onClick={toggleLang}
                        aria-label={
                            lang === 'en'
                                ? 'Switch to Indonesian'
                                : 'Ganti ke Bahasa Inggris'
                        }
                    >
                        {lang === 'en' ? 'EN' : 'ID'}
                    </button>
                    <button
                        className="nav-link theme-toggle"
                        onClick={toggleTheme}
                        aria-label={
                            theme === 'dark'
                                ? t.navbar.switchToLight
                                : t.navbar.switchToDark
                        }
                    >
                        <FontAwesomeIcon
                            icon={theme === 'dark' ? faMoon : faSun}
                            aria-hidden={true}
                        />
                    </button>
                    <button
                        className="nav-link chatbot-desktop-toggle"
                        onClick={toggleChat}
                        aria-label={chatOpen ? t.navbar.closeChat : t.navbar.openChat}
                        aria-expanded={chatOpen}
                        aria-controls="chatbot-panel"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 544" fill="currentColor" className="chatbot-desktop-icon" aria-hidden="true">
                            <path d="M0 352L0 128C0 75 43 32 96 32l320 0c53 0 96 43 96 96l0 224c0 53-43 96-96 96l-120 0c-5.2 0-10.2 1.7-14.4 4.8L166.4 539.2c-4.2 3.1-9.2 4.8-14.4 4.8-13.3 0-24-10.7-24-24l0-72-32 0c-53 0-96-43-96-96z"/>
                            <circle cx="176" cy="240" r="24" fill="var(--bg-primary)"/>
                            <circle cx="256" cy="240" r="24" fill="var(--bg-primary)"/>
                            <circle cx="336" cy="240" r="24" fill="var(--bg-primary)"/>
                        </svg>
                    </button>
                </div>
                <div className="nav-actions">
                    <button
                        className="nav-mobile-theme lang-toggle"
                        onClick={toggleLang}
                        aria-label={
                            lang === 'en'
                                ? 'Switch to Indonesian'
                                : 'Ganti ke Bahasa Inggris'
                        }
                    >
                        {lang === 'en' ? 'EN' : 'ID'}
                    </button>
                    <button
                        className="nav-mobile-theme"
                        onClick={toggleTheme}
                        aria-label={
                            theme === 'dark'
                                ? t.navbar.switchToLight
                                : t.navbar.switchToDark
                        }
                    >
                        <FontAwesomeIcon
                            icon={theme === 'dark' ? faMoon : faSun}
                        />
                    </button>
                    <button
                        className={`nav-mobile-theme${chatOpen ? ' open' : ''}`}
                        onClick={toggleChat}
                        aria-label={chatOpen ? 'Close chat' : 'Open chat'}
                        aria-expanded={chatOpen}
                        aria-controls="chatbot-panel"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 544" fill="currentColor" className="chatbot-toggle-icon" aria-hidden="true">
                            <path d="M0 352L0 128C0 75 43 32 96 32l320 0c53 0 96 43 96 96l0 224c0 53-43 96-96 96l-120 0c-5.2 0-10.2 1.7-14.4 4.8L166.4 539.2c-4.2 3.1-9.2 4.8-14.4 4.8-13.3 0-24-10.7-24-24l0-72-32 0c-53 0-96-43-96-96z"/>
                            <circle cx="176" cy="240" r="24" fill="var(--bg-primary)"/>
                            <circle cx="256" cy="240" r="24" fill="var(--bg-primary)"/>
                            <circle cx="336" cy="240" r="24" fill="var(--bg-primary)"/>
                        </svg>
                    </button>
                    <button
                        className={`hamburger${isMenuOpen ? ' active' : ''}`}
                        onClick={toggleMenu}
                        aria-label={isMenuOpen ? t.navbar.closeMenu : t.navbar.openMenu}
                        aria-expanded={isMenuOpen}
                        aria-controls="mobileMenu"
                    >
                        <span aria-hidden="true" />
                        <span aria-hidden="true" />
                        <span aria-hidden="true" />
                    </button>
                </div>
            </div>
        </nav>
        {isMenuOpen && (
            <div
                className="mobile-overlay"
                onClick={closeMenu}
                aria-hidden="true"
            />
        )}
        <div
            ref={menuRef}
            className={`mobile-menu${isMenuOpen ? ' open' : ''}`}
            id="mobileMenu"
            role="menu"
            aria-label={t.navbar.menuAria}
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
        </header>
    );
}
