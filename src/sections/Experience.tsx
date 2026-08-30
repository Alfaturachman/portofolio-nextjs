'use client';

import { experiences } from '@/lib/experiences';
import type { Experience as ExpType } from '@/lib/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBriefcase,
    faFlask,
    faUniversity,
    faGraduationCap,
} from '@fortawesome/free-solid-svg-icons';
import { useI18n } from '@/lib/i18n/i18n-context';

const iconMap: Record<string, any> = {
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
    const { t } = useI18n();
    const tr = t.experience.items[idx];

    return (
        <div className="experience-list-item">
            <div className="experience-timeline-container">
                <span className="experience-dot"></span>
                <span className="experience-line"></span>
            </div>
            <div className="experience-content-wrapper">
                <p className="experience-date">
                    {tr?.date ?? exp.date}
                </p>
                <h3 className="experience-title">
                    {tr?.title ?? exp.title}
                </h3>
                <p className="experience-org">
                    {iconMap[exp.orgIcon] && (
                        <FontAwesomeIcon icon={iconMap[exp.orgIcon]} />
                    )}
                    {tr?.org ?? exp.org}
                </p>
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
    );
}

export default function Experience() {
    const { t } = useI18n();

    return (
        <section id="experience">
            <div className="container">
                <h2 className="section-title">{t.experience.eyebrow}</h2>
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
