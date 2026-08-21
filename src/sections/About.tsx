'use client';

import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCode,
    faBriefcase,
    faGraduationCap,
    faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';
import { useI18n } from '@/lib/i18n/i18n-context';

const startYear = 2023;
const yearsExp = new Date().getFullYear() - startYear;

export default function About() {
    const { t } = useI18n();

    return (
        <section id="about" aria-label={t.about.sectionAria}>
            <div className="section-max">
                <div className="section-eyebrow">{t.about.eyebrow}</div>
                <h2 className="section-title">
                    {t.about.titleLine1}
                    <br />
                    {t.about.titleLine2}
                </h2>

                <div className="about-bento-grid">
                    {/* Card 1: Profile Photo */}
                    <div className="bento-card bento-card--profile">
                        <div className="bento-profile-frame">
                            <Image
                                src="/assets/images/profile/profile.jpg"
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
                            {t.about.bioHead1Pre}
                            <span className="bento-heading-accent">
                                {t.about.bioHead1Accent}
                            </span>
                            {t.about.bioHead1Post}
                            <br />
                            {t.about.bioHead2Pre}
                            <span className="bento-heading-accent">
                                {t.about.bioHead2Accent}
                            </span>
                            {t.about.bioHead2Post}
                        </h3>
                        <div className="bento-bio-body">
                            <p>
                                {t.about.bioP1Pre}{' '}
                                <strong>{t.about.bioP1Name}</strong>
                                {t.about.bioP1Post}
                            </p>

                            <p>{t.about.bioP2}</p>
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
                                {t.about.statProjectsLabel}
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
                                {t.about.statYearsLabel}
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
                                    <span className="bento-edu-date">
                                        September 2025 - July 2027
                                    </span>
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
                                    <span className="bento-edu-date">
                                        September 2022 - July 2025
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
