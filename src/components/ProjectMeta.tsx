'use client';

import { useState } from 'react';
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
    faChevronDown,
    faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';
import type { Project } from '@/lib/types';

interface ProjectMetaProps {
    project: Project;
}

export default function ProjectMeta({ project }: ProjectMetaProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`detail-meta-wrapper ${isOpen ? 'is-open' : ''}`}>
            {/* Mobile Expand / Collapse Button */}
            <button
                type="button"
                className="meta-toggle-btn"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-label="Toggle Project Specifications"
            >
                <div className="meta-toggle-left">
                    <div className="meta-pill-icon">
                        <FontAwesomeIcon icon={faInfoCircle} />
                    </div>
                    <span>Project Specifications</span>
                </div>
                <FontAwesomeIcon
                    icon={faChevronDown}
                    className={`meta-chevron ${isOpen ? 'rotate' : ''}`}
                />
            </button>

            {/* Collapsible Meta Pills Container */}
            <div className="detail-meta">
                <div className="meta-pill">
                    <div className="meta-pill-icon">
                        <FontAwesomeIcon icon={faBriefcase} />
                    </div>
                    <div className="meta-pill-text">
                        <span className="meta-pill-label">Role</span>
                        <span className="meta-pill-value">{project.role}</span>
                    </div>
                </div>

                <div className="meta-pill">
                    <div className="meta-pill-icon">
                        <FontAwesomeIcon icon={faCalendar} />
                    </div>
                    <div className="meta-pill-text">
                        <span className="meta-pill-label">Year</span>
                        <span className="meta-pill-value">{project.year}</span>
                    </div>
                </div>

                <div className={`meta-pill ${project.type === 'Team' ? 'type-team' : 'type-freelance'}`}>
                    <div className="meta-pill-icon">
                        <FontAwesomeIcon icon={project.type === 'Team' ? faUsers : faUser} />
                    </div>
                    <div className="meta-pill-text">
                        <span className="meta-pill-label">Type</span>
                        <span className="meta-pill-value">{project.type}</span>
                    </div>
                </div>

                <div className="meta-pill">
                    <div className="meta-pill-icon">
                        <FontAwesomeIcon icon={faGlobe} />
                    </div>
                    <div className="meta-pill-text">
                        <span className="meta-pill-label">Category</span>
                        <span className="meta-pill-value">{project.websiteType}</span>
                    </div>
                </div>

                <div className="meta-pill">
                    <div className="meta-pill-icon">
                        <FontAwesomeIcon icon={faBuilding} />
                    </div>
                    <div className="meta-pill-text">
                        <span className="meta-pill-label">Sector</span>
                        <span className="meta-pill-value">{project.sector}</span>
                    </div>
                </div>

                <div className={`meta-pill ${project.privacy === 'Public' ? 'privacy-public' : 'privacy-private'}`}>
                    <div className="meta-pill-icon">
                        <FontAwesomeIcon icon={project.privacy === 'Public' ? faLockOpen : faLock} />
                    </div>
                    <div className="meta-pill-text">
                        <span className="meta-pill-label">Privacy</span>
                        <span className="meta-pill-value">{project.privacy}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
