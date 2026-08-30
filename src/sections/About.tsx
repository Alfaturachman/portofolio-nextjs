'use client';

import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faGraduationCap,
    faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';
import { useI18n } from '@/lib/i18n/i18n-context';

export default function About() {
    const { t } = useI18n();

    return (
        <section id="about" aria-label={t.about.sectionAria}>
            <div className="container">
                <h2 className="section-title">{t.about.eyebrow}</h2>

                <div className="about-bento-grid">
                    {/* Card 2: Biography */}
                    <div className="bento-card bento-card--bio">
                        <div className="bento-bio-body">
                            <p>{t.about.bioIntro}</p>

                            <p>{t.about.bioP2}</p>
                        </div>
                    </div>

                    {/* Card 6: Education Card */}
                    <div className="bento-card bento-card--education">
                        <h3 className="bento-card-title">
                            <FontAwesomeIcon
                                icon={faGraduationCap}
                                className="bento-title-icon"
                            />
                            {t.about.educationTitle}
                        </h3>
                        <ul className="bento-education-list">
                            <li className="bento-education-item">
                                <div className="bento-edu-header">
                                    <h4 className="bento-edu-title">
                                        {t.about.edu1Title}
                                    </h4>
                                    <span className="about-education-badge about-education-badge--progress">
                                        S.Kom.
                                    </span>
                                </div>
                                <p className="bento-edu-meta">
                                    {t.about.eduUni}
                                </p>
                                <div className="bento-edu-status-wrapper">
                                    <span className="bento-edu-status">
                                        {t.about.eduStatusInProgress}
                                    </span>
                                    <div className="bento-edu-schedule">
                                        <span className="bento-edu-gpa">
                                            {t.about.edu1Gpa}
                                        </span>
                                        <span className="bento-edu-date">
                                            September 2025 - July 2027
                                        </span>
                                    </div>
                                </div>
                            </li>
                            <li className="bento-education-item">
                                <div className="bento-edu-header">
                                    <h4 className="bento-edu-title">
                                        {t.about.edu2Title}
                                    </h4>
                                    <span className="about-education-badge about-education-badge--done">
                                        A.Md.Kom
                                    </span>
                                </div>
                                <p className="bento-edu-meta">
                                    {t.about.eduUni}
                                </p>
                                <div className="bento-edu-status-wrapper">
                                    <span className="bento-edu-status bento-edu-status--graduated">
                                        {t.about.eduStatusGraduated}
                                    </span>
                                    <div className="bento-edu-schedule">
                                        <span className="bento-edu-gpa">
                                            {t.about.edu2Gpa}
                                        </span>
                                        <span className="bento-edu-date">
                                            September 2022 - July 2025
                                        </span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
