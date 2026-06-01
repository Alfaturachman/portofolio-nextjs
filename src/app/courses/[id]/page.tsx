import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { coursesData } from '@/lib/courses';
import ImagePreview from '@/components/ImagePreview';
import '@/styles/sections.css';

export async function generateStaticParams() {
    return coursesData.specializations.map((s) => ({ id: String(s.id) }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ id: string }>;
}): Promise<Metadata> {
    const { id } = await params;
    const spec = coursesData.specializations.find((s) => s.id === Number(id));
    if (!spec) return { title: 'Not Found' };
    return {
        title: `${spec.title} Courses | Portfolio`,
        description: `Courses from ${spec.title} specialization`,
    };
}

export default async function CoursesPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const spec = coursesData.specializations.find((s) => s.id === Number(id));
    if (!spec) notFound();

    const courses = coursesData.courses.filter(
        (c) => c.specializationId === spec.id,
    );

    return (
        <section id="courses-detail">
            <div className="section-max">
                <div className="breadcrumb">
                    <Link href="/">Home</Link>
                    <i className="fas fa-chevron-right breadcrumb-sep" />
                    <Link href="/#certificates">Certificates</Link>
                    <i className="fas fa-chevron-right breadcrumb-sep" />
                    <span className="breadcrumb-current">{spec.title}</span>
                </div>

                <div className="detail-header-row">
                    <div className="detail-header-info">
                        <h1 className="detail-title">{spec.title}</h1>
                        <div className="detail-meta">
                            <div className="meta-pill">
                                <div className="meta-pill-icon">
                                    <i className="fas fa-building" />
                                </div>
                                <div className="meta-pill-text">
                                    <span className="meta-pill-label">
                                        Provider
                                    </span>
                                    <span className="meta-pill-value">
                                        {spec.provider}
                                    </span>
                                </div>
                            </div>
                            <div className="meta-pill">
                                <div className="meta-pill-icon">
                                    <i className="fas fa-graduation-cap" />
                                </div>
                                <div className="meta-pill-text">
                                    <span className="meta-pill-label">
                                        Issuer
                                    </span>
                                    <span className="meta-pill-value">
                                        {spec.issuer}
                                    </span>
                                </div>
                            </div>
                            <div className="meta-pill">
                                <div className="meta-pill-icon">
                                    <i className="fas fa-book-open" />
                                </div>
                                <div className="meta-pill-text">
                                    <span className="meta-pill-label">
                                        Courses
                                    </span>
                                    <span className="meta-pill-value">
                                        {courses.length}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="detail-header-cert">
                        <a
                            href={spec.credentialUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-action primary"
                        >
                            <i className="fas fa-external-link-alt" />
                            View Credential
                        </a>
                    </div>
                </div>

                <div className="spec-skills">
                    <h3 className="detail-sidebar-title">Skills Covered</h3>
                    <div className="tech-stack-list">
                        {spec.skills.map((s) => (
                            <span className="tech-tag" key={s}>
                                {s}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="spec-cert-preview">
                    <div className="spec-cert-img-row">
                        <div className="spec-cert-image-box">
                            <ImagePreview
                                src={spec.image}
                                alt={`${spec.title} Certificate`}
                            >
                                <div className="spec-cert-image">
                                    <img
                                        src={spec.image}
                                        alt={`${spec.title} Certificate`}
                                        loading="lazy"
                                    />
                                </div>
                            </ImagePreview>
                        </div>
                        <div className="spec-cert-info">
                            <div className="spec-cert-badge">
                                <i className="fas fa-certificate" />
                                Specialization
                            </div>
                            <div className="spec-cert-note">
                                <h3>
                                    <i className="fas fa-info-circle" />
                                    About this Specialization
                                </h3>
                                <p>
                                    This specialization certificate from{' '}
                                    <strong>{spec.provider}</strong> is earned
                                    after completing all {courses.length} courses
                                    below. Each course covers essential skills
                                    and concepts that build toward the full
                                    specialization.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="courses-list">
                    <h2 className="detail-section-title">
                        <i className="fas fa-list" />
                        Courses ({courses.length})
                    </h2>
                    <div className="courses-grid">
                        {courses.map((course, idx) => (
                            <div className="course-item" key={course.id}>
                                <div className="course-number">{idx + 1}</div>
                                <div className="course-body">
                                    <h3 className="course-title">
                                        {course.title}
                                    </h3>
                                    {course.skills.length > 0 && (
                                        <div className="course-skills">
                                            {course.skills.map((skill) => (
                                                <span
                                                    className="course-skill"
                                                    key={skill}
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                    {course.credentialUrl &&
                                        course.credentialUrl !== '#' && (
                                            <a
                                                href={course.credentialUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="course-credential"
                                            >
                                                <i className="fas fa-certificate" />
                                                View Credential
                                            </a>
                                        )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
