import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { projects } from '@/lib/projects';
import ImageCarousel from '@/components/ImageCarousel';
import Breadcrumb from '@/components/Breadcrumb';
import ProjectMeta from '@/components/ProjectMeta';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBriefcase,
    faGlobe,
    faBuilding,
    faLayerGroup,
    faExternalLinkAlt,
    faInfoCircle,
    faArrowLeft,
    faThLarge,
    faArrowRight,
    faCalendar,
    faUsers,
    faUser,
    faLockOpen,
    faLock,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

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
                    <Breadcrumb
                        items={[
                            { label: 'Portfolio', href: '/portfolio' },
                            { label: project.title },
                        ]}
                    />

                    <h1 className="detail-title">{project.title}</h1>

                    <ImageCarousel
                        images={project.gallery}
                        title={project.title}
                    />

                    <ProjectMeta project={project} />

                    <div className="detail-content-grid">
                        <div className="detail-main">
                            <h2 className="detail-section-title">
                                <FontAwesomeIcon icon={faLayerGroup} />
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
                                            <FontAwesomeIcon icon={faExternalLinkAlt} />
                                            Live Demo
                                        </a>
                                    ) : (
                                        <span className="btn-action primary disabled">
                                            <FontAwesomeIcon icon={faExternalLinkAlt} />
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
                                                <FontAwesomeIcon icon={faGithub} />
                                                Source Code
                                            </a>
                                        )}
                                </div>

                                {project.privacy === 'Private' && (
                                    <div className="project-alert">
                                        <FontAwesomeIcon icon={faInfoCircle} />
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
                            href={`/portfolio/${prevProject.id}`}
                            className="next-project-link prev"
                        >
                            <FontAwesomeIcon icon={faArrowLeft} />
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
                            <Link
                                href="/portfolio"
                                className="next-project-nav-dot"
                                aria-label="View all projects"
                                title="View all projects"
                            >
                                <FontAwesomeIcon icon={faLayerGroup} />
                            </Link>
                        </div>
                        <Link
                            href={`/portfolio/${nextProject.id}`}
                            className="next-project-link next"
                        >
                            <FontAwesomeIcon icon={faArrowRight} />
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
