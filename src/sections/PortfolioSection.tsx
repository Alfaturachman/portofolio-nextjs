'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { projects } from '@/lib/projects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

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
                <h3 className="project-title">{p.title}</h3>
                <div className="project-footer">
                    <span className="project-link-text">View Details</span>
                    <div className="project-arrow">
                        <FontAwesomeIcon icon={faArrowRight} className="project-arrow-icon" />
                    </div>
                </div>
            </div>
        </Link>
    );
}
