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
        const [path] = href.split('#');
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

                {/* Headline grid: left title + right description */}
                <div className="hero-grid hero-fade-in-2">
                    <div className="hero-headline-wrap">
                        <p className="hero-greeting">Hi, I&rsquo;m Almavi.</p>
                        <h1 className="hero-title">
                            I build software that{' '}
                            <span className="hero-title-highlight">
                                solves{' '}
                            </span>
                            real problems.
                        </h1>
                    </div>
                    <p className="hero-description">
                        Full-stack engineer focused on{' '}
                        <strong>clean architecture</strong> and fluid user
                        experience and shipping products that make a
                        difference — from idea to deployment.
                    </p>
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
