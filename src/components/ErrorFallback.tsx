'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle, faRedo, faHome } from '@fortawesome/free-solid-svg-icons';
import { useI18n } from '@/lib/i18n/i18n-context';

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
    const { t } = useI18n();

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

                <h1 className="error-fallback-title">{t.errors.fallbackTitle}</h1>
                <p className="error-fallback-desc">
                    {t.errors.fallbackDescPre}
                    {moduleName.toLowerCase()}
                    {t.errors.fallbackDescPost}
                </p>

                <div className="error-fallback-actions">
                    <button onClick={reset} className="error-btn primary">
                        <FontAwesomeIcon icon={faRedo} />
                        {t.errors.tryAgain}
                    </button>
                    <Link href="/" className="error-btn secondary">
                        <FontAwesomeIcon icon={faHome} />
                        {t.errors.backHome}
                    </Link>
                </div>
            </div>
        </div>
    );
}
