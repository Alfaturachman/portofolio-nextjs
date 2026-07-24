'use client';

import { useState } from 'react';
import { experiences } from '@/lib/experiences';
import type { Experience as ExpType } from '@/lib/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBriefcase,
    faFlask,
    faUniversity,
    faGraduationCap,
    faChevronDown,
    type IconDefinition,
} from '@fortawesome/free-solid-svg-icons';

const iconMap: Record<string, IconDefinition> = {
    briefcase: faBriefcase,
    flask: faFlask,
    university: faUniversity,
    'graduation-cap': faGraduationCap,
};

function ExperienceCard({ exp, isDefaultOpen }: { exp: ExpType; isDefaultOpen: boolean }) {
    const [isOpen, setIsOpen] = useState(isDefaultOpen);

    return (
        <div
            className={`experience-item ${isOpen ? 'is-open' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            role="button"
            tabIndex={0}
            aria-expanded={isOpen}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setIsOpen(!isOpen);
                }
            }}
        >
            <div className="experience-meta">
                <div className="experience-meta-info">
                    <div className="experience-date">{exp.date}</div>
                    <div className={`experience-badge${exp.badgeType === 'ghost' ? ' ghost' : ''}`}>
                        {exp.badge}
                    </div>
                </div>
                <div className="experience-toggle-btn mobile-only" aria-hidden="true">
                    <FontAwesomeIcon
                        icon={faChevronDown}
                        className={`experience-chevron ${isOpen ? 'rotate' : ''}`}
                    />
                </div>
            </div>

            <div className="experience-content">
                <div className="experience-header">
                    <div className="experience-header-info">
                        <h3 className="experience-title">{exp.title}</h3>
                        <div className="experience-org">
                            {iconMap[exp.orgIcon] && (
                                <FontAwesomeIcon icon={iconMap[exp.orgIcon]} />
                            )}
                            {exp.org}
                        </div>
                    </div>
                    <div className="experience-toggle-btn desktop-only" aria-hidden="true">
                        <FontAwesomeIcon
                            icon={faChevronDown}
                            className={`experience-chevron ${isOpen ? 'rotate' : ''}`}
                        />
                    </div>
                </div>

                <div className="experience-body">
                    <ul className="experience-desc-list">
                        {exp.desc.split('\n').map((line, lIdx) => (
                            <li key={lIdx}>{line.replace(/^•\s*/, '')}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default function Experience() {
    return (
        <section id="experience">
            <div className="section-max">
                <div className="section-eyebrow">Experience</div>
                <h2 className="section-title">
                    My journey &amp;
                    <br />
                    career history
                </h2>
                <div className="experience-list">
                    {experiences.map((exp, idx) => (
                        <ExperienceCard key={idx} exp={exp} isDefaultOpen={idx === 0} />
                    ))}
                </div>
            </div>
        </section>
    );
}
