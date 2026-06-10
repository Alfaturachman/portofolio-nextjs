'use client';

import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

export default function Hero() {
    const router = useRouter();
    const pathname = usePathname();

    const handleNavClick = (
        e: React.MouseEvent<HTMLAnchorElement>,
        href: string,
    ) => {
        const [path, hash] = href.split('#');

        // Same page anchor link — scroll to element
        if (pathname === path && hash) {
            e.preventDefault();
            const el = document.getElementById(hash);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
            }
            return;
        }

        // Different page — navigate
        if (pathname !== path) {
            e.preventDefault();
            router.push(href);
        }
    };

    return (
        <section id="home" aria-label="Introduction">
            {/* Background pattern */}
            <div className="hero-bg-pattern" aria-hidden="true" />
            <div className="section-max hero-inner">
                {/* Status badge */}
                <div className="hero-badge hero-fade-in-1">
                    <span className="hero-badge-dot" aria-hidden="true" />
                    <span>Available for work</span>
                </div>

                {/* Title + Description as one unit */}
                <div className="hero-content hero-fade-in-2">
                    <p className="hero-greeting">Hi, I&rsquo;m Almavi.</p>
                    <div className="hero-grid">
                        <h1 className="hero-title">
                            I build software that{' '}
                            <span className="hero-title-highlight">
                                solves{' '}
                            </span>
                            real problems.
                        </h1>
                        <p className="hero-description">
                            Software engineer focused on{' '}
                            clean architecture, fluid user experience, and turning good ideas into apps that actually work.
                        </p>
                    </div>
                </div>

                {/* Bottom CTA bar */}
                <div className="hero-cta-bar hero-fade-in-3">
                    <Link
                        href="/portfolio"
                        className="hero-cta-btn"
                        onClick={(e) => handleNavClick(e, '/portfolio')}
                        aria-label="View my projects"
                    >
                        View Projects
                    </Link>
                    <div className="hero-cta-divider" aria-hidden="true" />
                    <Link
                        href="/#about"
                        className="hero-cta-btn"
                        onClick={(e) => handleNavClick(e, '/#about')}
                        aria-label="Learn more about me"
                    >
                        About Me
                    </Link>
                </div>
            </div>
        </section>
    );
}
