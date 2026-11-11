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

const LOGO_BOX_PATH =
    'M800,1000H200C89.5,1000,0,910.5,0,800V200C0,89.5,89.5,0,200,0h600c110.5,0,200,89.5,200,200v600C1000,910.5,910.5,1000,800,1000z';

const LOGO_MARK_PATHS = [
    'M498.7,434.5c0,0.1-0.1,0.1-0.1,0.1L322.4,740.1c-3.5,6.1-10.1,9.9-17.2,9.9h-68c-15.2,0-24.8-16.5-17.2-29.7l4.1-7.2L430,355.5c7-12.1,23.6-13.1,32.2-3l33.3,57.7l3,5.2C501.9,421.3,502,428.6,498.7,434.5z',
    'M592.7,597.3l-0.1,0.1l-34.2,59.3l-48.1,83.3c0,0,0,0.1-0.1,0.1c-3.6,6.1-10.1,9.8-17.1,9.8h-68c-15.3,0-24.8-16.5-17.2-29.7l73.3-128l42.6-74.1c7-12.1,23.6-13.1,32.2-3l33.3,57.7l3,5.2C595.8,584.1,595.9,591.4,592.7,597.3z',
    'M780,598.3l-5.9,10.4L774,609l-27.6,47.8l-2.5,4.3l0,0l-15,26L706,726.7l-7.7,13.3c-3.5,6.1-10.1,9.9-17.2,9.9h-68c-15.3,0-24.8-16.5-17.2-29.7l39.2-68.2l30.6-53.2c3.5-6.1,3.5-13.7,0-19.8l-172-299l-0.2-0.4c-7.6-13.2,1.9-29.7,17.2-29.7h68c7.1,0,13.6,3.8,17.2,9.9l184,318.7C783.5,584.7,783.5,592.2,780,598.3z',
];

const LOGO_VARIANTS = [
    { variant: 'black', bg: '#0D0D0D', fg: '#FDFDFD' },
    { variant: 'white', bg: '#FFFFFF', fg: '#000000' },
] as const;

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
        { label: t.navbar.portfolio, href: '/projects' },
        // { label: t.navbar.skills, href: '/skills' },
        { label: t.navbar.experience, href: '/experience' },
        { label: t.navbar.publications, href: '/publications' },
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
                    {LOGO_VARIANTS.map(({ variant, bg, fg }) => (
                        <svg
                            key={variant}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1000 1000"
                            className={`nav-logo-img nav-logo-${variant}`}
                            aria-hidden="true"
                        >
                            <path fill={bg} d={LOGO_BOX_PATH} />
                            <g fill={fg}>
                                {LOGO_MARK_PATHS.map((d, i) => (
                                    <path key={i} d={d} />
                                ))}
                            </g>
                        </svg>
                    ))}
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
