'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { useTheme } from '@/lib/theme-context';
import { useI18n } from '@/lib/i18n/i18n-context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

import Link from 'next/link';
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
        // { label: t.navbar.about, href: '/#about' },
        { label: t.navbar.portfolio, href: '/portfolio' },
        { label: t.navbar.skills, href: '/skills' },
        { label: t.navbar.experience, href: '/#experience' },
        { label: t.navbar.certificates, href: '/certificates' },
    ];

    return (
        <nav ref={navRef} id="navbar" aria-label={t.navbar.mainNavAria}>
            <div className="nav-inner">
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
                        <svg viewBox="0 0 1000 1000" className="chatbot-desktop-icon" aria-hidden="true">
                            <path d="M246.7,526.7h506.7c25.8,0,46.7,20.9,46.7,46.7l0,0c0,165.7-134.3,300-300,300l0,0c-165.7,0-300-134.3-300-300l0,0C200,547.6,220.9,526.7,246.7,526.7z"/>
                            <path d="M712.1,214.5c-54.3-54.3-129.3-87.9-212.1-87.9s-157.8,33.6-212.1,87.9C233.6,268.8,200,343.8,200,426.6c0,25.8,20.9,46.7,46.7,46.7h506.6c12.9,0,24.6-5.2,33-13.7c8.5-8.5,13.7-20.1,13.7-33C800,343.8,766.4,268.8,712.1,214.5z M444.6,389.2c-15.7,15.7-37.4,25.4-61.3,25.4c-47.9,0-86.7-38.8-86.7-86.7c0-24,9.7-45.6,25.4-61.3c15.7-15.7,37.4-25.4,61.3-25.4s45.6,9.7,61.3,25.4c15.7,15.7,25.4,37.4,25.4,61.3C470,351.8,460.3,373.5,444.6,389.2z M677.9,389.2c-15.7,15.7-37.3,25.4-61.2,25.4c-47.9,0-86.7-38.8-86.7-86.7c0-24,9.7-45.6,25.4-61.3c15.7-15.7,37.4-25.4,61.3-25.4s45.6,9.7,61.3,25.4c15.7,15.7,25.4,37.4,25.4,61.3C703.3,351.8,693.6,373.5,677.9,389.2z"/>
                            <path d="M906.7,700H960c22.1,0,40-17.9,40-40v-53.3c0-44.2-35.8-80-80-80h-53.3c-22.1,0-40,17.9-40,40V620C826.7,664.2,862.5,700,906.7,700z"/>
                            <path d="M93.3,700H40c-22.1,0-40-17.9-40-40v-53.3c0-44.2,35.8-80,80-80h53.3c22.1,0,40,17.9,40,40V620C173.3,664.2,137.5,700,93.3,700z"/>
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
                        <svg viewBox="0 0 1000 1000" className="chatbot-toggle-icon" aria-hidden="true">
                            <path d="M246.7,526.7h506.7c25.8,0,46.7,20.9,46.7,46.7l0,0c0,165.7-134.3,300-300,300l0,0c-165.7,0-300-134.3-300-300l0,0C200,547.6,220.9,526.7,246.7,526.7z"/>
                            <path d="M712.1,214.5c-54.3-54.3-129.3-87.9-212.1-87.9s-157.8,33.6-212.1,87.9C233.6,268.8,200,343.8,200,426.6c0,25.8,20.9,46.7,46.7,46.7h506.6c12.9,0,24.6-5.2,33-13.7c8.5-8.5,13.7-20.1,13.7-33C800,343.8,766.4,268.8,712.1,214.5z M444.6,389.2c-15.7,15.7-37.4,25.4-61.3,25.4c-47.9,0-86.7-38.8-86.7-86.7c0-24,9.7-45.6,25.4-61.3c15.7-15.7,37.4-25.4,61.3-25.4s45.6,9.7,61.3,25.4c15.7,15.7,25.4,37.4,25.4,61.3C470,351.8,460.3,373.5,444.6,389.2z M677.9,389.2c-15.7,15.7-37.3,25.4-61.2,25.4c-47.9,0-86.7-38.8-86.7-86.7c0-24,9.7-45.6,25.4-61.3c15.7-15.7,37.4-25.4,61.3-25.4s45.6,9.7,61.3,25.4c15.7,15.7,25.4,37.4,25.4,61.3C703.3,351.8,693.6,373.5,677.9,389.2z"/>
                            <path d="M906.7,700H960c22.1,0,40-17.9,40-40v-53.3c0-44.2-35.8-80-80-80h-53.3c-22.1,0-40,17.9-40,40V620C826.7,664.2,862.5,700,906.7,700z"/>
                            <path d="M93.3,700H40c-22.1,0-40-17.9-40-40v-53.3c0-44.2,35.8-80,80-80h53.3c22.1,0,40,17.9,40,40V620C173.3,664.2,137.5,700,93.3,700z"/>
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
        </nav>
    );
}
