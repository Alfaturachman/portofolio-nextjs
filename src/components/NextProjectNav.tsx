'use client';

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowLeft,
    faArrowRight,
    faLayerGroup,
} from '@fortawesome/free-solid-svg-icons';
import { useI18n } from '@/lib/i18n/i18n-context';

interface NeighborProject {
    id: string;
    title: string;
}

export default function NextProjectNav({
    prev,
    next,
}: {
    prev: NeighborProject;
    next: NeighborProject;
}) {
    const { t } = useI18n();
    const viewAll = t.portfolio.detail.viewAllProjects;

    return (
        <div className="next-project-nav">
            <Link
                href={`/portfolio/${prev.id}`}
                className="next-project-link prev"
            >
                <FontAwesomeIcon icon={faArrowLeft} />
                <div className="next-project-text">
                    <span className="next-project-label">
                        {t.portfolio.detail.prevProject}
                    </span>
                    <span className="next-project-title">{prev.title}</span>
                </div>
            </Link>
            <div className="next-project-nav-divider">
                <Link
                    href="/portfolio"
                    className="next-project-nav-dot"
                    aria-label={viewAll}
                    title={viewAll}
                >
                    <FontAwesomeIcon icon={faLayerGroup} />
                </Link>
            </div>
            <Link
                href={`/portfolio/${next.id}`}
                className="next-project-link next"
            >
                <FontAwesomeIcon icon={faArrowRight} />
                <div className="next-project-text">
                    <span className="next-project-label">
                        {t.portfolio.detail.nextProject}
                    </span>
                    <span className="next-project-title">{next.title}</span>
                </div>
            </Link>
        </div>
    );
}
