import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { coursesData } from '@/lib/courses';
import ImagePreview from '@/components/ImagePreview';
import Breadcrumb from '@/components/Breadcrumb';
import Tx from '@/components/Tx';
import CertTitle from '@/components/CertTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faExternalLinkAlt,
    faCertificate,
    faInfoCircle,
    faClock,
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

                        <div className="spec-cert-info">
                            <div className="spec-cert-note">
                                <h3>
                                    <FontAwesomeIcon icon={faInfoCircle} />
                                    <Tx
                                        k={
                                            cert.category === 'Specialization'
                                                ? 'courses.aboutSpecializationTitle'
                                                : cert.category === 'Competency Certificate'
                                                ? 'courses.aboutCompetencyTitle'
                                                : cert.category === 'Competition & Award'
                                                ? 'courses.aboutAwardTitle'
                                                : cert.category === 'Professional Certificate'
                                                ? 'courses.aboutTitle'
                                                : 'courses.aboutGeneralTitle'
                                        }
                                    />
                                </h3>
                                <p>
                                    <Tx 
                                        k={`certificates.descriptions.${cert.id}`} 
                                        fallback={
                                            cert.category === 'Specialization'
                                                ? 'This Specialization is earned after completing all courses below.'
                                                : cert.category === 'Competency Certificate'
                                                ? 'This Competency Certificate validates professional standards and skills.'
                                                : cert.category === 'Competition & Award'
                                                ? 'This award recognizes academic and competition achievements.'
                                                : 'This certificate validates course completion.'
                                        }
                                        values={{ 
                                            provider: cert.provider, 
                                            count: courses.length,
                                            issuer: cert.issuer
                                        }} 
                                    />
                                </p>
                            </div>
                        </div>

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
                            <Tx
                                k={cert.status === 'in-progress' || cert.status === 'coming-soon' ? 'courses.viewSpecialization' : 'courses.viewCredential'}
                                fallback={cert.status === 'in-progress' || cert.status === 'coming-soon' ? 'View Specialization' : 'View Credential'}
                            />
                        </a>
                        )}
                    </div>
                </div>

                <div className="spec-cert-preview">
                    {cert.image && cert.image !== '#' && cert.status !== 'in-progress' && cert.status !== 'coming-soon' ? (
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
                        </div>
                    ) : (
                        <div className="spec-progress-card">
                            <div className="spec-progress-header">
                                <div className="spec-progress-badge">
                                    <span className="spec-progress-dot" />
                                    <Tx
                                        k={cert.status === 'coming-soon' ? 'courses.statusComingSoon' : 'courses.statusInProgress'}
                                        fallback={cert.status === 'coming-soon' ? 'Coming Soon' : 'In Progress'}
                                    />
                                </div>
                                <span className="spec-progress-count">
                                    {courses.filter(c => c.status === 'completed' || !!c.credential).length} / {courses.length} <Tx k="courses.completed" fallback="Completed" />
                                </span>
                            </div>
                            <div className="spec-progress-bar-bg">
                                <div
                                    className="spec-progress-bar-fill"
                                    style={{
                                        width: `${Math.round((courses.filter(c => c.status === 'completed' || !!c.credential).length / (courses.length || 1)) * 100)}%`
                                    }}
                                />
                            </div>
                            <p className="spec-progress-desc">
                                <Tx
                                    k="courses.inProgressDesc"
                                    values={{
                                        completed: courses.filter(c => c.status === 'completed' || !!c.credential).length,
                                        total: courses.length,
                                        percent: Math.round((courses.filter(c => c.status === 'completed' || !!c.credential).length / (courses.length || 1)) * 100)
                                    }}
                                    fallback={`${courses.filter(c => c.status === 'completed' || !!c.credential).length} of ${courses.length} courses completed (${Math.round((courses.filter(c => c.status === 'completed' || !!c.credential).length / (courses.length || 1)) * 100)}%).`}
                                />
                            </p>
                        </div>
                    )}
                </div>

                {courses.length > 0 && (
                <div className="courses-list">
                    <h2 className="detail-section-title">
                        <Tx k="courses.courses" /> ({courses.length})
                    </h2>
                    <ul className="courses-grid">
                        {courses.map((course, idx) => {
                            const courseImg =
                                course.image && course.image !== '#'
                                    ? course.image
                                    : course.credential
                                    ? `/assets/courses/Coursera ${course.credential}.jpg`
                                    : null;
                            return (
                                <li className="course-item" key={course.id}>
                                    <div className="course-thumb-box">
                                        {courseImg ? (
                                            <ImagePreview
                                                src={courseImg}
                                                alt={`${course.title} Certificate`}
                                            >
                                                <div className="course-thumb">
                                                    <Image
                                                        src={courseImg}
                                                        alt={`${course.title} Certificate`}
                                                        width={120}
                                                        height={90}
                                                        className="course-thumb-img"
                                                    />
                                                </div>
                                            </ImagePreview>
                                        ) : (
                                            <div className="course-thumb course-thumb-placeholder">
                                                <FontAwesomeIcon icon={faClock} />
                                            </div>
                                        )}
                                    </div>
                                    <div className="course-body">
                                        <div className="course-title-group">
                                            <div className="course-title-row">
                                                <h3 className="course-title">
                                                    {course.title}
                                                </h3>
                                                {course.status && course.status !== 'completed' && (
                                                    <span className={`course-status-badge status-${course.status}`}>
                                                        <Tx
                                                            k={course.status === 'in-progress' ? 'courses.statusInProgress' : 'courses.statusComingSoon'}
                                                            fallback={course.status === 'in-progress' ? 'In Progress' : 'Coming Soon'}
                                                        />
                                                    </span>
                                                )}
                                            </div>
                                            <div className="course-meta">
                                                <span className="course-index">
                                                    <Tx
                                                        k="courses.courseOf"
                                                        values={{
                                                            current: idx + 1,
                                                            total: courses.length,
                                                        }}
                                                        fallback={`Course ${idx + 1} of ${courses.length}`}
                                                    />
                                                </span>
                                                {course.duration && (
                                                    <>
                                                        <span className="course-meta-divider">•</span>
                                                        <span className="course-duration">{course.duration}</span>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                        {/* {course.skills.length > 0 && (
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
                                        )} */}
                                        {course.credentialUrl &&
                                            course.credentialUrl !== '#' && (
                                                <a
                                                    href={course.credentialUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="course-credential"
                                                >
                                                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                                                    <Tx
                                                        k={course.status === 'completed' || !!course.credential ? 'courses.viewCredential' : 'courses.viewCourse'}
                                                        fallback={course.status === 'completed' || !!course.credential ? 'View Credential' : 'View Course'}
                                                    />
                                                </a>
                                            )}
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                )}
            </div>
        </section>
        </div>
    );
}
