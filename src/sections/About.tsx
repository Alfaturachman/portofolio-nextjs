import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCheckCircle,
    faCalendarAlt,
    faGraduationCap,
} from '@fortawesome/free-solid-svg-icons';

const startYear = 2023;
const yearsExp = new Date().getFullYear() - startYear;

export default function About() {
    return (
        <section id="about">
            <div className="section-max">
                <div className="section-eyebrow">About Me</div>
                <h2 className="section-title">
                    Who I am,
                    <br />
                    and what I do
                </h2>
                <div className="about-layout">
                    <div className="about-image-wrapper">
                        <div className="about-image-frame">
                            <img
                                src="/assets/images/profile/profile.jpg"
                                alt="Alfaturachman Maulana Pahlevi"
                            />
                        </div>
                    </div>

                    <div className="about-content-wrapper">
                        <h3 className="about-heading">
                            Driven by <span className="accented">Data</span>,
                            <br />
                            Built with{' '}
                            <span className="stroke-text">Code.</span>
                        </h3>

                        <p className="about-bio">
                            I am <strong>Alfaturachman Maulana Pahlevi</strong>,
                            a software engineer focused on DevOps and AI-driven solutions. I turn complex problems into clean, scalable systems.
                        </p>
                        <p className="about-bio about-bio-margin">
                            My work spans backend architecture, cloud infrastructure, and intelligent systems. Currently diving deeper into <strong>Machine Learning and Deep Learning</strong> to bridge AI with production software.
                        </p>

                        <div className="about-stats-row">
                            <div className="about-stat-item">
                                <div
                                    className="about-stat-icon"
                                    style={{ color: '#3b82f6' }}
                                >
                                    <FontAwesomeIcon icon={faCheckCircle} />
                                </div>
                                <span className="about-stat-num">12+</span>
                                <span className="about-stat-text">
                                    Completed Projects
                                </span>
                            </div>
                            <div className="about-stat-item">
                                <div
                                    className="about-stat-icon"
                                    style={{ color: '#3b82f6' }}
                                >
                                    <FontAwesomeIcon icon={faCalendarAlt} />
                                </div>
                                <span className="about-stat-num">
                                    {yearsExp}+
                                </span>
                                <span className="about-stat-text">
                                    Years Experience
                                </span>
                            </div>
                        </div>

                        <div className="education-card">
                            <div className="education-card-bar">
                                <div className="education-card-dots">
                                    <span className="dot-red" />
                                    <span className="dot-yellow" />
                                    <span className="dot-green" />
                                </div>
                                <span className="education-card-title">
                                    education.md
                                </span>
                            </div>
                            <div className="education-card-body">
                                <div className="education-card-content">
                                    <div className="education-entry">
                                        <div
                                            className="education-icon"
                                            style={{
                                                color: '#f59e0b',
                                                backgroundColor:
                                                    'rgba(245, 158, 11, 0.1)',
                                            }}
                                        >
                                            <FontAwesomeIcon
                                                icon={faGraduationCap}
                                            />
                                        </div>
                                        <div>
                                            <div
                                                className="education-entry-title"
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '0.5rem',
                                                }}
                                            >
                                                Bachelor&apos;s Degree in IT
                                                <div
                                                    className="education-entry-badge"
                                                    style={{
                                                        color: '#f59e0b',
                                                        backgroundColor:
                                                            'rgba(245, 158, 11, 0.1)',
                                                    }}
                                                >
                                                    S.Kom.
                                                </div>
                                            </div>
                                            <div className="education-entry-meta">
                                                Universitas Dian Nuswantoro
                                                Semarang{' '}
                                                <span
                                                    style={{
                                                        margin: '0 0.5rem',
                                                        opacity: 0.5,
                                                    }}
                                                >
                                                    |
                                                </span>{' '}
                                                <span
                                                    style={{ color: '#f59e0b' }}
                                                >
                                                    In Progress
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="education-divider" />
                                    <div className="education-entry">
                                        <div className="education-icon">
                                            <FontAwesomeIcon
                                                icon={faGraduationCap}
                                            />
                                        </div>
                                        <div>
                                            <div
                                                className="education-entry-title"
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '0.5rem',
                                                }}
                                            >
                                                Associate Degree in IT
                                                <div className="education-entry-badge">
                                                    A.Md.Kom
                                                </div>
                                            </div>
                                            <div className="education-entry-meta">
                                                Universitas Dian Nuswantoro
                                                Semarang{' '}
                                                <span
                                                    style={{
                                                        margin: '0 0.5rem',
                                                        opacity: 0.5,
                                                    }}
                                                >
                                                    |
                                                </span>{' '}
                                                <span
                                                    style={{ color: '#10b981' }}
                                                >
                                                    Graduated
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
