'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBriefcase,
    faCalendar,
    faUsers,
    faUser,
    faGlobe,
    faBuilding,
    faLockOpen,
    faLock,
} from '@fortawesome/free-solid-svg-icons';
import type { Project } from '@/lib/types';
import { useI18n } from '@/lib/i18n/i18n-context';
import MetaWrapper from './MetaWrapper';

interface ProjectMetaProps {
    project: Project;
}

export default function ProjectMeta({ project }: ProjectMetaProps) {
    const { t } = useI18n();
    const V = t.portfolio.meta.values;
    const val = (dict: Record<string, string> | undefined, key: string) =>
        dict?.[key] ?? key;

    return (
        <MetaWrapper
            label={t.portfolio.meta.toggleLabel}
            ariaLabel={t.portfolio.meta.toggleAria}
        >
            <div className="detail-meta">
                <div className="meta-pill">
                    <div className="meta-pill-icon">
                        <FontAwesomeIcon icon={faBriefcase} />
                    </div>
                    <div className="meta-pill-text">
                        <span className="meta-pill-label">{t.portfolio.meta.role}</span>
                        <span className="meta-pill-value">{val(V?.role, project.role)}</span>
                    </div>
                </div>

                <div className="meta-pill">
                    <div className="meta-pill-icon">
                        <FontAwesomeIcon icon={faCalendar} />
                    </div>
                    <div className="meta-pill-text">
                        <span className="meta-pill-label">{t.portfolio.meta.year}</span>
                        <span className="meta-pill-value">{project.year}</span>
                    </div>
                </div>

                <div className={`meta-pill ${project.type === 'Team' ? 'type-team' : 'type-freelance'}`}>
                    <div className="meta-pill-icon">
                        <FontAwesomeIcon icon={project.type === 'Team' ? faUsers : faUser} />
                    </div>
                    <div className="meta-pill-text">
                        <span className="meta-pill-label">{t.portfolio.meta.type}</span>
                        <span className="meta-pill-value">{val(V?.type, project.type)}</span>
                    </div>
                </div>

                <div className="meta-pill">
                    <div className="meta-pill-icon">
                        <FontAwesomeIcon icon={faGlobe} />
                    </div>
                    <div className="meta-pill-text">
                        <span className="meta-pill-label">{t.portfolio.meta.category}</span>
                        <span className="meta-pill-value">{val(V?.category, project.websiteType)}</span>
                    </div>
                </div>

                <div className="meta-pill">
                    <div className="meta-pill-icon">
                        <FontAwesomeIcon icon={faBuilding} />
                    </div>
                    <div className="meta-pill-text">
                        <span className="meta-pill-label">{t.portfolio.meta.sector}</span>
                        <span className="meta-pill-value">{val(V?.sector, project.sector)}</span>
                    </div>
                </div>

                <div className={`meta-pill ${project.privacy === 'Public' ? 'privacy-public' : 'privacy-private'}`}>
                    <div className="meta-pill-icon">
                        <FontAwesomeIcon icon={project.privacy === 'Public' ? faLockOpen : faLock} />
                    </div>
                    <div className="meta-pill-text">
                        <span className="meta-pill-label">{t.portfolio.meta.privacy}</span>
                        <span className="meta-pill-value">{val(V?.privacy, project.privacy)}</span>
                    </div>
                </div>
            </div>
        </MetaWrapper>
    );
}
