'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { projects } from '@/app/lib/projects';

export default function PortfolioSection() {
    return (
        <section id="portfolio">
            <div className="section-max">
                <div className="section-eyebrow">Portfolio</div>
                <h2 className="section-title">
                    Projects I have
                    <br />
                    worked on
                </h2>
                <div className="portfolio-grid">
                    {projects.map((p, i) => (
                        <ProjectCard key={p.id} project={p} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ProjectCard({
    project: p,
    index,
}: {
    project: (typeof projects)[0];
    index: number;
}) {
    const [loaded, setLoaded] = useState(false);
    const imgRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        if (imgRef.current?.complete) {
            setLoaded(true);
        }
    }, []);

    return (
        <Link href={`/detail/${p.id}`} className="project-card">
            <div className="project-img-wrapper">
                {!loaded && <div className="skeleton" />}
                <img
                    ref={imgRef}
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className={loaded ? 'loaded' : ''}
                    onLoad={() => setLoaded(true)}
                    onError={(e) => {
                        setLoaded(true);
                        e.currentTarget.src =
                            '/assets/images/projects/fallback.png';
                    }}
                />
            </div>
            <div className="project-content">
                <div className="project-tags">
                    <span className={`project-tag type-badge ${p.type === 'Team' ? 'team' : 'freelance'}`}>
                        <i className={`fas fa-${p.type === 'Team' ? 'users' : 'user'}`} />
                        {p.type}
                    </span>
                    {p.tags.slice(0, 2).map((t) => (
                        <span className="project-tag" key={t}>
                            {t}
                        </span>
                    ))}
                    {p.tags.length > 3 && (
                        <span className="project-tag">
                            +{p.tags.length - 2}
                        </span>
                    )}
                </div>
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.cardDesc}</p>
                <div className="project-footer">
                    <span className="project-link-text">View Details</span>
                    <div className="project-arrow">
                        <i className="fas fa-arrow-right project-arrow-icon" />
                    </div>
                </div>
            </div>
        </Link>
    );
}
