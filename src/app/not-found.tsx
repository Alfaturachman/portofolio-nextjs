'use client';

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useI18n } from '@/lib/i18n/i18n-context';
import './not-found.css';

export default function NotFound() {
    const { t } = useI18n();

    return (
        <div className="not-found">
            <div className="not-found-card">
                <div className="not-found-blob" aria-hidden="true" />
                <div className="not-found-blob secondary" aria-hidden="true" />
                <div className="not-found-code">404</div>
                <h1 className="not-found-title">{t.errors.notFoundTitle}</h1>
                <p className="not-found-desc">{t.errors.notFoundDesc}</p>
                <Link href="/" className="not-found-btn">
                    <FontAwesomeIcon icon={faArrowLeft} />
                    {t.errors.backHome}
                </Link>
            </div>
        </div>
    );
}
