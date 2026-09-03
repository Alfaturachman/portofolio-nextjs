'use client';

import { experiences } from '@/lib/experiences';
import type { Experience as ExpType } from '@/lib/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBriefcase,
    faFlask,
    faUniversity,
    faGraduationCap,
    type IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { useI18n } from '@/lib/i18n/i18n-context';
import ViewAll from '@/components/ViewAll';

const iconMap: Record<string, IconDefinition> = {
    briefcase: faBriefcase,
    flask: faFlask,
    university: faUniversity,
    'graduation-cap': faGraduationCap,
};

// ponytail: parses "AUG 2024 - PRESENT" style strings for duration calc
const monthMap: Record<string, number> = {
    JAN: 0, JANUARY: 0, FEB: 1, FEBRUARY: 1,
    MAR: 2, MARET: 2, MARCH: 2,
    APR: 3, APRIL: 3,
    MEI: 4, MAY: 4,
    JUN: 5, JUNI: 5, JUNE: 5,
    JUL: 6, JULI: 6, JULY: 6,
    AGU: 7, AUG: 7, AUGUST: 7,
    SEP: 8, SEPT: 8, SEPTEMBER: 8,
    OKT: 9, OCT: 9, OKTOBER: 9, OCTOBER: 9,
    NOV: 10, NOVEMBER: 10,
    DES: 11, DEC: 11, DECEMBER: 11,
};

function parseMonthYear(s: string): { month: number; year: number } | null {
    const parts = s.trim().split(/\s+/);
    if (parts.length < 2) return null;
    const month = monthMap[parts[0].toUpperCase()];
    const year = parseInt(parts[1], 10);
    if (month === undefined || isNaN(year)) return null;
    return { month, year };
}

function computeDuration(dateStr: string): { years: number; months: number } {
    const [startPart, endPart] = dateStr.split(/\s*-\s*/);
    const start = parseMonthYear(startPart);
    if (!start) return { years: 0, months: 0 };

    const now = new Date();
    const endDate = parseMonthYear(endPart);
    const end = endDate
        ? { month: endDate.month, year: endDate.year }
        : { month: now.getMonth(), year: now.getFullYear() };

    let totalMonths = (end.year - start.year) * 12 + (end.month - start.month);
    if (totalMonths < 0) totalMonths = 0;

    return { years: Math.floor(totalMonths / 12), months: totalMonths % 12 };
}

// ponytail: translations are looked up by index; a new entry in
// experiences.ts falls back to its English data until experience.json catches up.
function ExperienceCard({
    exp,
    isDefaultOpen,
    idx,
    hideDesc,
}: {
    exp: ExpType;
    isDefaultOpen: boolean;
    idx: number;
    hideDesc?: boolean;
}) {
    const { t } = useI18n();
    const tr = t.experience.items[idx];
    const dateStr = tr?.date ?? exp.date;
    const { years, months } = computeDuration(dateStr);
    const dur = t.experience.duration;

    return (
        <div className="experience-list-item">
            <div className="experience-timeline-container">
                <span className="experience-dot"></span>
                <span className="experience-line"></span>
            </div>
            <div className="experience-content-wrapper">
                <p className="experience-date">
                    {dateStr}
                    {(years > 0 || months > 0) && (
                        <>
                            <span className="experience-date-divider" aria-hidden="true"> | </span>
                            <span className="experience-date-duration">
                                {years > 0 && (
                                    <>
                                        {years} {years > 1 ? dur.years : dur.year}
                                    </>
                                )}
                                {years > 0 && months > 0 && ' '}
                                {months > 0 && (
                                    <>
                                        {months} {months > 1 ? dur.months : dur.month}
                                    </>
                                )}
                            </span>
                        </>
                    )}
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
                {!hideDesc && (
                    <ul className="experience-desc-list">
                        {(tr?.desc ?? exp.desc)
                            .split('\n')
                            .map((line, lIdx) => (
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

export default function Experience({
    compact = false,
    children,
}: {
    compact?: boolean;
    children?: React.ReactNode;
}) {
    const { t } = useI18n();

    return (
        <section id="experience">
            <div className="container">
                {children}
                <h2 className="section-title">{t.experience.eyebrow}</h2>
                <div className="experience-list">
                    {experiences.map((exp, idx) => (
                        <ExperienceCard
                            key={idx}
                            exp={exp}
                            isDefaultOpen={idx === 0}
                            idx={idx}
                            hideDesc={compact}
                        />
                    ))}
                </div>
                {compact && (
                    <ViewAll href="/experience" label={t.experience.viewAll} />
                )}
            </div>
        </section>
    );
}
