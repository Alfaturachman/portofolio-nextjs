'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle, faRedo, faHome } from '@fortawesome/free-solid-svg-icons';

interface ErrorFallbackProps {
    error: Error & { digest?: string };
    reset: () => void;
    moduleName?: string;
}

export default function ErrorFallback({
    error,
    reset,
    moduleName = 'Application',
}: ErrorFallbackProps) {
    useEffect(() => {
        // Log the error to console/logging services
        console.error(`Error caught by ${moduleName} boundary:`, error);
    }, [error, moduleName]);

    return (
        <div className="error-fallback-container">
            <div className="error-fallback-card glass">
                <div className="error-fallback-blob" aria-hidden="true" />
                <div className="error-fallback-blob secondary" aria-hidden="true" />

                <div className="error-fallback-icon">
                    <FontAwesomeIcon icon={faExclamationTriangle} />
                </div>

                <h1 className="error-fallback-title">Something went wrong</h1>
                <p className="error-fallback-desc">
                    An error occurred while rendering the {moduleName.toLowerCase()} section. 
                    Please try reloading or head back home.
                </p>

                <div className="error-fallback-actions">
                    <button onClick={reset} className="error-btn primary">
                        <FontAwesomeIcon icon={faRedo} />
                        Try again
                    </button>
                    <Link href="/" className="error-btn secondary">
                        <FontAwesomeIcon icon={faHome} />
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
