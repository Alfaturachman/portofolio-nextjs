import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { coursesData } from '@/lib/courses';
import ImagePreview from '@/components/ImagePreview';
import Breadcrumb from '@/components/Breadcrumb';
import Tx from '@/components/Tx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBuilding,
    faGraduationCap,
    faBookOpen,
    faExternalLinkAlt,
    faCertificate,
    faInfoCircle,
    faList,
} from '@fortawesome/free-solid-svg-icons';

export async function generateStaticParams() {
    return coursesData.specializations.map((s) => ({ id: s.id }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ id: string }>;
}): Promise<Metadata> {
    const { id } = await params;
    const spec = coursesData.specializations.find((s) => s.id === id);
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
    const spec = coursesData.specializations.find((s) => s.id === id);
    if (!spec) notFound();

    const courses = coursesData.courses.filter(
        (c) => c.specializationId === spec.id,
    );

    return (
        <section id="courses-detail">
            <div className="container">
                <Breadcrumb
                    items={[
                        { label: 'Certificates', href: '/#certificates' },
                        { label: spec.title },
                    ]}
                />

                <div className="detail-header-row">
                    <div className="detail-header-info">
                        <h1 className="detail-title">{spec.title}</h1>
                        <div className="detail-meta">
                            <div className="meta-pill">
                                <div className="meta-pill-icon">
                                    <FontAwesomeIcon icon={faBuilding} />
                                </div>
                                <div className="meta-pill-text">
                                    <span className="meta-pill-label">
                                        <Tx k="courses.provider" />
                                    </span>
                                    <span className="meta-pill-value">
                                        {spec.provider}
                                    </span>
                                </div>
                            </div>
                            <div className="meta-pill">
                                <div className="meta-pill-icon">
                                    <FontAwesomeIcon icon={faGraduationCap} />
                                </div>
                                <div className="meta-pill-text">
                                    <span className="meta-pill-label">
                                        <Tx k="courses.issuer" />
                                    </span>
                                    <span className="meta-pill-value">
                                        {spec.issuer}
                                    </span>
                                </div>
                            </div>
                            <div className="meta-pill">
                                <div className="meta-pill-icon">
                                    <FontAwesomeIcon icon={faBookOpen} />
                                </div>
                                <div className="meta-pill-text">
                                    <span className="meta-pill-label">
                                        <Tx k="courses.courses" />
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
                            <FontAwesomeIcon icon={faExternalLinkAlt} />
                            <Tx k="courses.viewCredential" />
                        </a>
                    </div>
                </div>

                <div className="spec-skills">
                    <h3 className="detail-sidebar-title">
                        <Tx k="courses.skillsCovered" />
                    </h3>
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
                                    <Image
                                        src={spec.image}
                                        alt={`${spec.title} Certificate`}
                                        width={800}
                                        height={600}
                                        priority
                                    />
                                </div>
                            </ImagePreview>
                        </div>
                        <div className="spec-cert-info">
                            <div className="spec-cert-badge">
                                <FontAwesomeIcon icon={faCertificate} />
                                <Tx k="courses.certBadge" />
                            </div>
                            <div className="spec-cert-note">
                                <h3>
                                    <FontAwesomeIcon icon={faInfoCircle} />
                                    <Tx k="courses.aboutTitle" />
                                </h3>
                                <p>
                                    <Tx k="courses.aboutPre" />
                                    <strong>{spec.provider}</strong>
                                    <Tx k="courses.aboutMid" />
                                    {courses.length}
                                    <Tx k="courses.aboutEnd" />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="courses-list">
                    <h2 className="detail-section-title">
                        <Tx k="courses.courses" /> ({courses.length})
                    </h2>
                    <ul className="courses-grid">
                        {courses.map((course, idx) => (
                            <li className="course-item" key={course.id}>
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
                                                <FontAwesomeIcon
                                                    icon={faCertificate}
                                                />
                                                <Tx k="courses.viewCredential" />
                                            </a>
                                        )}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
