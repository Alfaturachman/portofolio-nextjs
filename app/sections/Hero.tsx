'use client';

import { useRef, useEffect } from 'react';

const scrollFactors = [
    { selector: '.hero-tag', translateY: -60 },
    { selector: '.hero-middle-grid', translateY: -100 },
    { selector: '.hero-bottom-row', translateY: -80 },
] as const;

export default function Hero() {
    const heroRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const hero = heroRef.current;
        if (!hero) return;

        let ticking = false;

        const onScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    const rect = hero.getBoundingClientRect();
                    const vh = window.innerHeight;
                    const progress =
                        rect.top < 0
                            ? Math.min(Math.abs(rect.top) / (vh * 0.6), 1)
                            : 0;

                    for (const { selector, translateY } of scrollFactors) {
                        const el = hero.querySelector(selector) as HTMLElement | null;
                        if (!el) continue;
                        const y = progress * translateY;
                        const opacity = 1 - progress;
                        el.style.opacity = String(opacity);
                        el.style.transform = `translateY(${y}px)`;
                    }

                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <section id="home" ref={heroRef}>
            <div className="blob hero-glow" aria-hidden="true" />

            <div className="hero-circuit" aria-hidden="true">
                <svg
                    viewBox="0 0 1200 600"
                    preserveAspectRatio="xMidYMid slice"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <filter id="wormGlow">
                            <feGaussianBlur stdDeviation="2" result="blur" />
                            <feMerge>
                                <feMergeNode in="blur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>
                    <g className="circuit-base">
                        <path d="M0,60 L140,60 L180,100 L180,220" />
                        <path d="M60,0 L60,80 L100,120 L100,200 L160,200 L180,180 L180,100" />
                        <path d="M340,0 L340,80 L300,120 L300,280 L340,320 L520,320 L560,280 L560,160" />
                        <path d="M520,0 L520,80 L560,120 L560,160" />
                        <path d="M800,0 L800,80 L760,120 L760,280 L800,320 L1200,320" />
                        <path d="M1060,0 L1060,80 L1020,120 L1020,200" />
                        <path d="M1200,120 L1100,120 L1060,160 L1060,200" />
                        <path d="M0,360 L80,360 L120,320 L120,240" />
                        <path d="M0,480 L60,480 L100,440 L100,360 L140,320 L220,320" />
                        <path d="M200,600 L200,520 L240,480 L360,480 L400,440 L400,360" />
                        <path d="M600,600 L600,520 L560,480 L560,380 L600,340 L700,340 L740,300 L740,220" />
                        <path d="M800,600 L800,540 L760,500 L760,380" />
                        <path d="M1000,600 L1000,560 L960,520 L960,400" />
                        <path d="M1200,440 L1060,440 L1020,400 L1020,320" />
                        <path d="M1200,560 L1100,560 L1060,520 L1060,460" />
                    </g>
                    <g className="circuit-worm">
                        <path
                            d="M0,60 L140,60 L180,100 L180,220"
                            filter="url(#wormGlow)"
                        />
                        <path
                            d="M60,0 L60,80 L100,120 L100,200 L160,200 L180,180 L180,100"
                            filter="url(#wormGlow)"
                        />
                        <path
                            d="M340,0 L340,80 L300,120 L300,280 L340,320 L520,320 L560,280 L560,160"
                            filter="url(#wormGlow)"
                        />
                        <path
                            d="M520,0 L520,80 L560,120 L560,160"
                            filter="url(#wormGlow)"
                        />
                        <path
                            d="M800,0 L800,80 L760,120 L760,280 L800,320 L1200,320"
                            filter="url(#wormGlow)"
                        />
                        <path
                            d="M1060,0 L1060,80 L1020,120 L1020,200"
                            filter="url(#wormGlow)"
                        />
                        <path
                            d="M1200,120 L1100,120 L1060,160 L1060,200"
                            filter="url(#wormGlow)"
                        />
                        <path
                            d="M0,360 L80,360 L120,320 L120,240"
                            filter="url(#wormGlow)"
                        />
                        <path
                            d="M0,480 L60,480 L100,440 L100,360 L140,320 L220,320"
                            filter="url(#wormGlow)"
                        />
                        <path
                            d="M200,600 L200,520 L240,480 L360,480 L400,440 L400,360"
                            filter="url(#wormGlow)"
                        />
                        <path
                            d="M600,600 L600,520 L560,480 L560,380 L600,340 L700,340 L740,300 L740,220"
                            filter="url(#wormGlow)"
                        />
                        <path
                            d="M800,600 L800,540 L760,500 L760,380"
                            filter="url(#wormGlow)"
                        />
                        <path
                            d="M1000,600 L1000,560 L960,520 L960,400"
                            filter="url(#wormGlow)"
                        />
                        <path
                            d="M1200,440 L1060,440 L1020,400 L1020,320"
                            filter="url(#wormGlow)"
                        />
                        <path
                            d="M1200,560 L1100,560 L1060,520 L1060,460"
                            filter="url(#wormGlow)"
                        />
                    </g>
                    <circle cx="180" cy="220" r="4" />
                    <circle cx="100" cy="200" r="3" />
                    <circle cx="180" cy="100" r="3" />
                    <circle cx="300" cy="280" r="4" />
                    <circle cx="560" cy="160" r="4" />
                    <circle cx="760" cy="280" r="4" />
                    <circle cx="1020" cy="200" r="3" />
                    <circle cx="120" cy="240" r="3" />
                    <circle cx="220" cy="320" r="3" />
                    <circle cx="400" cy="360" r="4" />
                    <circle cx="740" cy="220" r="3" />
                    <circle cx="760" cy="380" r="3" />
                    <circle cx="960" cy="400" r="3" />
                    <circle cx="1020" cy="320" r="4" />
                    <circle cx="1060" cy="460" r="3" />
                </svg>
            </div>

            <div
                className="hero-top-row hero-tag"
                style={{ position: 'relative', zIndex: 10 }}
            >
                <div className="hero-brand-pill">
                    <span className="dot" />
                    <span className="hero-brand-text">Hello World</span>
                </div>
                <div className="hero-status-pill">
                    ● Available for new projects
                </div>
            </div>

            <div
                className="hero-middle-grid"
                style={{ position: 'relative', zIndex: 10 }}
            >
                <div className="hero-headline-container">
                    <h1 className="hero-title-main" id="heroHeadline">
                        BUILDING
                        <br />
                        INTELLIGENT
                        <br />
                        <span className="accented">SYSTEMS.</span>
                    </h1>
                </div>

                <div className="hero-info-sidebar">
                    <div className="hero-tagline">
                        <div className="hero-tagline-bar">
                            <div className="hero-tagline-dots">
                                <span className="dot-red" />
                                <span className="dot-yellow" />
                                <span className="dot-green" />
                            </div>
                            <span className="hero-tagline-title">
                                about.txt
                            </span>
                        </div>
                        <p className="hero-tagline-body">
                            Software engineer passionate about building
                            <strong> intelligent</strong>,
                            <strong> scalable</strong> systems that solve real
                            problems.
                        </p>
                    </div>
                    <div className="hero-cta-group hero-ctas">
                        <a href="#portfolio" className="btn-hero-primary">
                            <span>My Projects</span>
                            <i className="fas fa-arrow-right btn-icon" />
                        </a>
                        <a href="#about" className="btn-hero-outline">
                            <span>About Me</span>
                        </a>
                    </div>
                </div>
            </div>

            <div
                className="hero-bottom-row"
                style={{ position: 'relative', zIndex: 10 }}
            >
                <div className="hero-stat">
                    <div className="hero-stat-icon">
                        <i className="fas fa-robot" />
                    </div>
                    <div>
                        <div className="hero-stat-label">Core Expertise</div>
                        <div className="hero-stat-val">
                            Software Engineering
                        </div>
                    </div>
                </div>
                <div className="hero-stat">
                    <div className="hero-stat-icon">
                        <i className="fas fa-cloud" />
                    </div>
                    <div>
                        <div className="hero-stat-label">Infrastructure</div>
                        <div className="hero-stat-val">DevOps & CI/CD</div>
                    </div>
                </div>
                <div className="hero-stat">
                    <div className="hero-stat-icon">
                        <i className="fas fa-code" />
                    </div>
                    <div>
                        <div className="hero-stat-label">Development</div>
                        <div className="hero-stat-val">Full-Stack</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
