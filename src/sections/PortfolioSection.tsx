'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/lib/projects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function PortfolioSection({
    limit,
    children,
}: {
    limit?: number;
    children?: React.ReactNode;
}) {
    const displayedProjects = limit ? projects.slice(0, limit) : projects;

    return (
        <section id="portfolio">
            <div className="section-max">
                {children}
                <div className="section-eyebrow">Portfolio</div>
                <h2 className="section-title">
                    Projects I have
                    <br />
                    worked on
                </h2>
                <div className="portfolio-grid">
                    {displayedProjects.map((p, i) => (
                        <ProjectCard key={p.id} project={p} index={i} />
                    ))}
                </div>
                {limit && (
                    <div className="portfolio-view-all-container">
                        <Link href="/portfolio" className="btn-view-all">
                            <span>Explore All Projects</span>
                            <div className="btn-view-all-circle">
                                <FontAwesomeIcon
                                    icon={faArrowRight}
                                    className="btn-icon"
                                />
                            </div>
                        </Link>
                    </div>
                )}
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
    const [imgSrc, setImgSrc] = useState(p.image);

    return (
        <Link href={`/portfolio/${p.id}`} className="project-card">
            <div className="project-img-wrapper">
                {!loaded && <div className="skeleton" />}
                <Image
                    src={imgSrc}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className={loaded ? 'loaded' : ''}
                    onLoad={() => setLoaded(true)}
                    onError={() => {
                        setImgSrc('/assets/images/projects/fallback.png');
                        setLoaded(true);
                    }}
                    priority={index < 3}
                />
            </div>
            <div className="project-content">
                <div className="project-tags">
                    {p.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="project-tag">
                            {tag}
                        </span>
                    ))}
                    {p.tags.length > 3 && (
                        <span className="project-tag">+{p.tags.length - 3}</span>
                    )}
                </div>
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.cardDesc}</p>
                <div className="project-footer">
                    <span className="project-link-text">View Details</span>
                    <div className="project-arrow">
                        <FontAwesomeIcon
                            icon={faArrowRight}
                            className="project-arrow-icon"
                        />
                    </div>
                </div>
            </div>
        </Link>
    );
}
