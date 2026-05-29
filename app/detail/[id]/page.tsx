import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '@/app/lib/projects';
import ImageCarousel from '@/app/components/ImageCarousel';

export async function generateStaticParams() {
    return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ id: string }>;
}): Promise<Metadata> {
    const { id } = await params;
    const project = projects.find((p) => p.id === id);

    if (!project) {
        return {
            title: 'Project Not Found',
        };
    }

    return {
        title: `${project.title} | Portfolio`,
        description: project.cardDesc,
        keywords: project.tags,
    };
}

export default async function DetailPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const project = projects.find((p) => p.id === id);
    if (!project) notFound();

    const currentIndex = projects.findIndex((p) => p.id === id);
    const nextProject = projects[(currentIndex + 1) % projects.length];
    const prevProject =
        projects[(currentIndex - 1 + projects.length) % projects.length];

    const isDemoLink = project.demo && project.demo !== '#';
    const isGithubLink = project.github && project.github !== '#';

    return (
        <>
            <section id="detail-header">
                <div className="section-max">
                    <div className="breadcrumb">
                        <Link href="/">Home</Link>
                        <i className="fas fa-chevron-right breadcrumb-sep" />
                        <Link href="/#portfolio">Portfolio</Link>
                        <i className="fas fa-chevron-right breadcrumb-sep" />
                        <span className="breadcrumb-current">
                            {project.title}
                        </span>
                    </div>

                    <h1 className="detail-title">{project.title}</h1>

                    <div className="detail-meta">
                        <div className="meta-pill">
                            <div className="meta-pill-icon">
                                <i className="fas fa-briefcase" />
                            </div>
                            <div className="meta-pill-text">
                                <span className="meta-pill-label">Role</span>
                                <span className="meta-pill-value">
                                    {project.role}
                                </span>
                            </div>
                        </div>
                        <div className="meta-pill">
                            <div className="meta-pill-icon">
                                <i className="far fa-calendar" />
                            </div>
                            <div className="meta-pill-text">
                                <span className="meta-pill-label">Year</span>
                                <span className="meta-pill-value">
                                    {project.year}
                                </span>
                            </div>
                        </div>
                        <div
                            className={`meta-pill ${project.type === 'Team' ? 'type-team' : 'type-freelance'}`}
                        >
                            <div className="meta-pill-icon">
                                <i
                                    className={`fas fa-${project.type === 'Team' ? 'users' : 'user'}`}
                                />
                            </div>
                            <div className="meta-pill-text">
                                <span className="meta-pill-label">Type</span>
                                <span className="meta-pill-value">
                                    {project.type}
                                </span>
                            </div>
                        </div>
                        <div className="meta-pill">
                            <div className="meta-pill-icon">
                                <i className="fas fa-globe" />
                            </div>
                            <div className="meta-pill-text">
                                <span className="meta-pill-label">
                                    Category
                                </span>
                                <span className="meta-pill-value">
                                    {project.websiteType}
                                </span>
                            </div>
                        </div>
                        <div className="meta-pill">
                            <div className="meta-pill-icon">
                                <i className="fas fa-building" />
                            </div>
                            <div className="meta-pill-text">
                                <span className="meta-pill-label">Sector</span>
                                <span className="meta-pill-value">
                                    {project.sector}
                                </span>
                            </div>
                        </div>
                        <div
                            className={`meta-pill ${project.privacy === 'Public' ? 'privacy-public' : 'privacy-private'}`}
                        >
                            <div className="meta-pill-icon">
                                <i
                                    className={`fas fa-${project.privacy === 'Public' ? 'lock-open' : 'lock'}`}
                                />
                            </div>
                            <div className="meta-pill-text">
                                <span className="meta-pill-label">Privacy</span>
                                <span className="meta-pill-value">
                                    {project.privacy}
                                </span>
                            </div>
                        </div>
                    </div>

                    <ImageCarousel
                        images={project.gallery}
                        title={project.title}
                    />

                    <div className="detail-content-grid">
                        <div className="detail-main">
                            <h2 className="detail-section-title">
                                <i className="fas fa-layer-group" />
                                Overview
                            </h2>
                            <p className="detail-text">{project.desc}</p>
                        </div>

                        <aside className="detail-sidebar">
                            <div className="detail-sidebar-card">
                                <h3 className="detail-sidebar-title">
                                    Technologies
                                </h3>
                                <div className="tech-stack-list">
                                    {project.tags.map((t) => (
                                        <span className="tech-tag" key={t}>
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className="project-actions">
                                    {isDemoLink ? (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn-action primary"
                                        >
                                            <i className="fas fa-external-link-alt" />
                                            Live Demo
                                        </a>
                                    ) : (
                                        <span className="btn-action primary disabled">
                                            <i className="fas fa-external-link-alt" />
                                            Live Demo
                                        </span>
                                    )}
                                    {isGithubLink &&
                                        project.privacy !== 'Private' && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn-action secondary"
                                            >
                                                <i className="fab fa-github" />
                                                Source Code
                                            </a>
                                        )}
                                </div>

                                {project.privacy === 'Private' && (
                                    <div className="project-alert">
                                        <i className="fas fa-info-circle" />
                                        <span>
                                            This is an internal project and
                                            cannot be publicly accessed.
                                        </span>
                                    </div>
                                )}
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            <section className="next-project-section">
                <div className="section-max">
                    <div className="next-project-nav">
                        <Link
                            href={`/detail/${prevProject.id}`}
                            className="next-project-link prev"
                        >
                            <i className="fas fa-arrow-left" />
                            <div className="next-project-text">
                                <span className="next-project-label">
                                    Previous Project
                                </span>
                                <span className="next-project-title">
                                    {prevProject.title}
                                </span>
                            </div>
                        </Link>
                        <div className="next-project-nav-divider">
                            <span className="next-project-nav-dot">
                                <i className="fas fa-th-large" />
                            </span>
                        </div>
                        <Link
                            href={`/detail/${nextProject.id}`}
                            className="next-project-link next"
                        >
                            <i className="fas fa-arrow-right" />
                            <div className="next-project-text">
                                <span className="next-project-label">
                                    Next Project
                                </span>
                                <span className="next-project-title">
                                    {nextProject.title}
                                </span>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
