'use client';

import { useState, type ReactNode } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faChevronDown } from '@fortawesome/free-solid-svg-icons';

interface MetaWrapperProps {
    label: string;
    ariaLabel: string;
    children: ReactNode;
}

export default function MetaWrapper({ label, ariaLabel, children }: MetaWrapperProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`detail-meta-wrapper ${isOpen ? 'is-open' : ''}`}>
            <button
                type="button"
                className="meta-toggle-btn"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-label={ariaLabel}
            >
                <div className="meta-toggle-left">
                    <div className="meta-pill-icon">
                        <FontAwesomeIcon icon={faInfoCircle} />
                    </div>
                    <span>{label}</span>
                </div>
                <FontAwesomeIcon
                    icon={faChevronDown}
                    className={`meta-chevron ${isOpen ? 'rotate' : ''}`}
                />
            </button>
            {children}
        </div>
    );
}
