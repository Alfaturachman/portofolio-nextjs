import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { coursesData } from '@/lib/courses';
import ImagePreview from '@/components/ImagePreview';
import Breadcrumb from '@/components/Breadcrumb';
import Tx from '@/components/Tx';
import CoursesMetaWrapper from '@/components/CoursesMetaWrapper';
import CertTitle from '@/components/CertTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBuilding,
    faGraduationCap,
    faBookOpen,
    faExternalLinkAlt,
    faCertificate,
    faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';

export async function generateStaticParams() {
    return coursesData.certificates.map((s) => ({ id: s.id }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ id: string }>;
}): Promise<Metadata> {
    const { id } = await params;
    const cert = coursesData.certificates.find((s) => s.id === id);
    if (!cert) return { title: 'Not Found' };
    return {
        title: `${cert.title} Courses | Portfolio`,
        description: `Courses from ${cert.title}`,
    };
}

export default async function CertificateDetailPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const cert = coursesData.certificates.find((s) => s.id === id);
    if (!cert) notFound();

    const courses = coursesData.courses.filter(
        (c) => c.certificateId === cert.id || c.specializationId === cert.id,
    );

    return (
        <div className="route-content">
        <section id="courses-detail">
            <div className="container">
                <Breadcrumb
                    items={[
                        { label: <Tx k="navbar.certificates" />, href: '/certificates' },
                        {
                            label: (
                                <CertTitle id={cert.id} fallback={cert.title} />
                            ),
                        },
                    ]}
                />

                <div className="detail-header-row">
                    <div className="detail-header-info">
                        <h1 className="detail-title">
                            <CertTitle id={cert.id} fallback={cert.title} />
                        </h1>
                        <CoursesMetaWrapper>
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
                                        {cert.provider}
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
                                        {cert.issuer}
                                    </span>
                                </div>
                            </div>
                            {courses.length > 0 && (
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
                            )}
                            </div>
                        </CoursesMetaWrapper>
                    </div>
                    <div className="detail-header-cert">
                        {cert.credentialUrl && cert.credentialUrl !== '#' && (
                        <a
                            href={cert.credentialUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-action primary"
                        >
                            <FontAwesomeIcon icon={faExternalLinkAlt} />
                            <Tx k="courses.viewCredential" />
                        </a>
                        )}
                    </div>
                </div>

                <div className="spec-cert-preview">
                    <div className="spec-cert-img-row">
                        <div className="spec-cert-image-box">
                            <ImagePreview
                                src={cert.image}
                                alt={`${cert.title} Certificate`}
                            >
                                <div className="spec-cert-image">
                                    <Image
                                        src={cert.image}
                                        alt={`${cert.title} Certificate`}
                                        width={800}
                                        height={600}
                                        priority
                                    />
                                </div>
                            </ImagePreview>
                        </div>
                        {courses.length > 0 && (
                        <div className="spec-cert-info">
                            <div className="spec-cert-badge">
                                <FontAwesomeIcon icon={faCertificate} />
                                <Tx
                                    k={
                                        cert.category === 'Specialization'
                                            ? 'courses.specializationBadge'
                                            : 'courses.certBadge'
                                    }
                                />
                            </div>
                            <div className="spec-cert-note">
                                <h3>
                                    <FontAwesomeIcon icon={faInfoCircle} />
                                    <Tx
                                        k={
                                            cert.category === 'Specialization'
                                                ? 'courses.aboutSpecializationTitle'
                                                : 'courses.aboutTitle'
                                        }
                                    />
                                </h3>
                                <p>
                                    <Tx 
                                        k={
                                            cert.category === 'Specialization'
                                                ? 'courses.aboutSpecializationDesc'
                                                : 'courses.aboutDesc'
                                        } 
                                        values={{ 
                                            provider: cert.provider, 
                                            count: courses.length 
                                        }} 
                                    />
                                </p>
                            </div>
                        </div>
                        )}
                    </div>
                </div>

                {courses.length > 0 && (
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
                )}
            </div>
        </section>
        </div>
    );
}
