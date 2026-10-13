'use client';

import { publications } from '@/lib/publications';
import type { Publication as PubType } from '@/lib/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBook,
    faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons';
import { useI18n } from '@/lib/i18n/i18n-context';
import ViewAll from '@/components/ViewAll';

// ponytail: translations are looked up by index; falls back to English data until publications.json catches up.
function PublicationCard({
    pub,
    idx,
    hideDesc,
}: {
    pub: PubType;
    idx: number;
    hideDesc?: boolean;
}) {
    const { t } = useI18n();
    const tr = t.publications.items?.[idx];
    const dateStr = tr?.date ?? pub.date;
    const badgeStr = tr?.badge ?? pub.badge;
    const titleStr = tr?.title ?? pub.title;
    const journalStr = tr?.journal ?? pub.journal;
    const authorsStr = tr?.authors ?? pub.authors;
    const descStr = tr?.desc ?? pub.desc;

    return (
        <div className="experience-list-item">
            <div className="experience-timeline-container">
                <span className="experience-dot"></span>
                <span className="experience-line"></span>
            </div>
            <div className="experience-content-wrapper">
                <p className="experience-date">
                    <span>{dateStr}</span>
                    <span className="experience-date-divider" aria-hidden="true"> | </span>
                    <span className="pub-badge">{badgeStr}</span>
                </p>
                <h3 className="experience-title">
                    {titleStr}
                </h3>
                <p className="experience-org">
                    <FontAwesomeIcon icon={faBook} />
                    <span>{journalStr}</span>
                </p>
                {authorsStr && (
                    <p className="pub-authors">{authorsStr}</p>
                )}
                {!hideDesc && descStr && (
                    <ul className="experience-desc-list">
                        {descStr
                            .split('\n')
                            .map((line, lIdx) => (
                                <li key={lIdx}>
                                    {line.replace(/^•\s*/, '')}
                                </li>
                            ))}
                    </ul>
                )}
                {pub.url && (
                    <a
                        href={pub.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pub-doi-link"
                    >
                        <span>{pub.doi ? `DOI: ${pub.doi}` : t.publications.viewPaper}</span>
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                )}
            </div>
        </div>
    );
}

export default function Publications({
    compact = false,
    children,
}: {
    compact?: boolean;
    children?: React.ReactNode;
}) {
    const { t } = useI18n();

    return (
        <section id="publications">
            <div className="container">
                {children}
                <h2 className="section-title">{t.publications.eyebrow}</h2>
                <div className="experience-list">
                    {publications.map((pub, idx) => (
                        <PublicationCard
                            key={pub.id}
                            pub={pub}
                            idx={idx}
                            hideDesc={compact}
                        />
                    ))}
                </div>
                {compact && (
                    <ViewAll href="/publications" label={t.publications.viewAll} />
                )}
            </div>
        </section>
    );
}
