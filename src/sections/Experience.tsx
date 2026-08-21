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
import { useI18n } from '@/lib/i18n/i18n-context';

const iconMap: Record<string, IconDefinition> = {
    briefcase: faBriefcase,
    flask: faFlask,
    university: faUniversity,
    'graduation-cap': faGraduationCap,
};

// ponytail: translations are looked up by index; a new entry in
// experiences.ts falls back to its English data until experience.json catches up.
function ExperienceCard({
    exp,
    isDefaultOpen,
    idx,
}: {
    exp: ExpType;
    isDefaultOpen: boolean;
    idx: number;
}) {
    const [isOpen, setIsOpen] = useState(isDefaultOpen);
    const { t } = useI18n();
    const tr = t.experience.items[idx];

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
                    <div className="experience-date">{tr?.date ?? exp.date}</div>
                    <div className={`experience-badge${exp.badgeType === 'ghost' ? ' ghost' : ''}`}>
                        {tr?.badge ?? exp.badge}
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
                            <h3 className="experience-title">
                                {tr?.title ?? exp.title}
                            </h3>
                            <div className="experience-org">
                                {iconMap[exp.orgIcon] && (
                                    <FontAwesomeIcon icon={iconMap[exp.orgIcon]} />
                                )}
                                {tr?.org ?? exp.org}
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
                        {(tr?.desc ?? exp.desc)
                            .split('\n')
                            .map((line, lIdx) => (
                                <li key={lIdx}>
                                    {line.replace(/^•\s*/, '')}
                                </li>
                            ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default function Experience() {
    const { t } = useI18n();

    return (
        <section id="experience">
            <div className="section-max">
                <div className="section-eyebrow">{t.experience.eyebrow}</div>
                <h2 className="section-title">
                    {t.experience.titleLine1}
                    <br />
                    {t.experience.titleLine2}
                </h2>
                <div className="experience-list">
                    {experiences.map((exp, idx) => (
                        <ExperienceCard
                            key={idx}
                            exp={exp}
                            isDefaultOpen={idx === 0}
                            idx={idx}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
