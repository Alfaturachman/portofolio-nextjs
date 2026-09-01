'use client';

import { educations } from '@/lib/experiences';
import type { Experience as ExpType } from '@/lib/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faUniversity,
    type IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { useI18n } from '@/lib/i18n/i18n-context';

const iconMap: Record<string, IconDefinition> = {
    university: faUniversity,
};

// ponytail: same timeline layout & CSS as Experience; translations are looked
// up by index and fall back to English data until education.json catches up.
function EducationCard({ edu, idx }: { edu: ExpType; idx: number }) {
    const { t } = useI18n();
    const tr = t.education.items[idx];
    const gpa = tr?.gpa ?? edu.gpa;
    const desc = tr?.desc ?? edu.desc;

    return (
        <div className="experience-list-item">
            <div className="experience-timeline-container">
                <span className="experience-dot"></span>
                <span className="experience-line"></span>
            </div>
            <div className="experience-content-wrapper">
                <p className="experience-date">{tr?.date ?? edu.date}</p>
                <h3 className="experience-title">
                    {tr?.title ?? edu.title}
                </h3>
                <p className="experience-org">
                    {iconMap[edu.orgIcon] && (
                        <FontAwesomeIcon icon={iconMap[edu.orgIcon]} />
                    )}
                    {tr?.org ?? edu.org}
                    {gpa && (
                        <span className="experience-gpa">
                            <span className="experience-gpa-sep" aria-hidden="true" />
                            {gpa}
                        </span>
                    )}
                </p>
                {desc && (
                    <ul className="experience-desc-list">
                        {desc.split('\n').map((line, lIdx) => (
                            <li key={lIdx}>
                                {line.replace(/^•\s*/, '')}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default function Education() {
    const { t } = useI18n();

    return (
        <section id="education">
            <div className="container">
                <h2 className="section-title">{t.education.eyebrow}</h2>
                <div className="experience-list">
                    {educations.map((edu, idx) => (
                        <EducationCard key={idx} edu={edu} idx={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
}
