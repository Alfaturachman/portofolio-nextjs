'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/lib/projects';
import { useI18n } from '@/lib/i18n/i18n-context';
import ViewAll from '@/components/ViewAll';

export default function PortfolioSection({
    limit,
    children,
}: {
    limit?: number;
    children?: React.ReactNode;
}) {
    const { t } = useI18n();
    const displayedProjects = limit ? projects.slice(0, limit) : projects;

    return (
        <section id="portfolio">
            <div className="container">
                {children}
                <h2 className="section-title">{t.portfolio.eyebrow}</h2>
                <div className="portfolio-grid">
                    {displayedProjects.map((p, i) => (
                        <ProjectCard key={p.id} project={p} index={i} />
                    ))}
                </div>
                {limit && (
                    <ViewAll
                        href="/portfolio"
                        label={t.portfolio.viewAll}
                    />
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
    const { t } = useI18n();

    return (
        <Link href={`/portfolio/${p.id}`} className="project-card">
            <div className="project-img-wrapper">
                {!loaded && <div className="skeleton" />}
                <Image
                    src={imgSrc}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                    quality={90}
                    className={loaded ? 'loaded' : ''}
                    onLoad={() => setLoaded(true)}
                    onError={() => {
                        setImgSrc('/assets/images/projects/fallback.png');
                        setLoaded(true);
                    }}
                    priority={index < 1}
                />
            </div>
            <div className="project-content">

                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">
                    {(t.portfolio.cardDescriptions as Record<string, string>)[
                        p.id
                    ] ?? p.cardDesc}
                </p>
            </div>
        </Link>
    );
}
