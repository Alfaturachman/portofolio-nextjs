import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCode,
    faBriefcase,
    faGraduationCap,
    faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';

const startYear = 2023;
const yearsExp = new Date().getFullYear() - startYear;

export default function About() {
    return (
        <section id="about" aria-label="About me">
            <div className="section-max">
                <div className="section-eyebrow">About Me</div>
                <h2 className="section-title">
                    Who I am,
                    <br />
                    and what I do
                </h2>

                <div className="about-bento-grid">
                    {/* Card 1: Profile Photo */}
                    <div className="bento-card bento-card--profile">
                        <div className="bento-profile-frame">
                            <Image
                                src="/assets/images/profile/IMG_5360.PNG"
                                alt="Alfaturachman Maulana Pahlevi"
                                width={400}
                                height={500}
                                priority={false}
                                className="bento-profile-img"
                            />
                        </div>
                    </div>

                    {/* Card 2: Biography */}
                    <div className="bento-card bento-card--bio">
                        <h3 className="bento-bio-heading">
                            Driven by{' '}
                            <span className="bento-heading-accent">Data</span>,
                            <br />
                            built with{' '}
                            <span className="bento-heading-accent">Code</span>.
                        </h3>
                        <div className="bento-bio-body">
                            <p>
                                I am{' '}
                                <strong>Alfaturachman Maulana Pahlevi</strong>,
                                a software engineer focused on DevOps and
                                AI-driven solutions. I specialize in turning
                                complex architectural and computational problems
                                into clean, highly scalable, and
                                production-ready systems.
                            </p>
                            <p>
                                My primary expertise spans backend
                                infrastructure, cloud engineering, and
                                intelligent workflow automation. I am currently
                                diving deeper into{' '}
                                <strong>Machine Learning</strong> and{' '}
                                <strong>Deep Learning</strong> architectures to
                                seamlessly bridge AI capability with production
                                software.
                            </p>
                        </div>
                    </div>

                    {/* Card 3: Project Count Stat */}
                    <div className="bento-card bento-card--stat">
                        <div className="bento-stat-icon-wrapper bento-stat-icon-wrapper--blue">
                            <FontAwesomeIcon icon={faCode} />
                        </div>
                        <div className="bento-stat-info">
                            <span className="bento-stat-number">12+</span>
                            <span className="bento-stat-label">
                                Projects Completed
                            </span>
                        </div>
                    </div>

                    {/* Card 4: Experience Stat */}
                    <div className="bento-card bento-card--stat">
                        <div className="bento-stat-icon-wrapper bento-stat-icon-wrapper--green">
                            <FontAwesomeIcon icon={faBriefcase} />
                        </div>
                        <div className="bento-stat-info">
                            <span className="bento-stat-number">
                                {yearsExp}+
                            </span>
                            <span className="bento-stat-label">
                                Years of Experience
                            </span>
                        </div>
                    </div>

                    {/* Card 6: Education Card */}
                    <div className="bento-card bento-card--education">
                        <h3 className="bento-card-title">
                            <FontAwesomeIcon
                                icon={faGraduationCap}
                                className="bento-title-icon"
                            />
                            Education
                        </h3>
                        <ul className="bento-education-list">
                            <li className="bento-education-item">
                                <div className="bento-edu-header">
                                    <h4 className="bento-edu-title">
                                        Bachelor&apos;s Degree in IT
                                    </h4>
                                    <span className="about-education-badge about-education-badge--progress">
                                        S.Kom.
                                    </span>
                                </div>
                                <p className="bento-edu-meta">
                                    Dian Nuswantoro University
                                </p>
                                <div className="bento-edu-status-wrapper">
                                    <span className="bento-edu-status">
                                        In Progress
                                    </span>
                                    <span className="bento-edu-date">
                                        September 2025 - September 2027
                                    </span>
                                </div>
                            </li>
                            <li className="bento-education-item">
                                <div className="bento-edu-header">
                                    <h4 className="bento-edu-title">
                                        Associate Degree in IT
                                    </h4>
                                    <span className="about-education-badge about-education-badge--done">
                                        A.Md.Kom
                                    </span>
                                </div>
                                <p className="bento-edu-meta">
                                    Dian Nuswantoro University
                                </p>
                                <div className="bento-edu-status-wrapper">
                                    <span className="bento-edu-status bento-edu-status--graduated">
                                        Graduated
                                    </span>
                                    <span className="bento-edu-date">
                                        September 2022 - September 2025
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
