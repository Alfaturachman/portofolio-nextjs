import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default function NotFound() {
    return (
        <>
            <style>{`
                #navbar, #footer, .skip-link { display: none !important; }
                #main-content { display: flex; align-items: center; justify-content: center; min-height: 100vh; padding: 0; }
            `}</style>
            <div className="not-found">
                <div className="not-found-card">
                    <div className="not-found-blob" aria-hidden="true" />
                    <div className="not-found-blob secondary" aria-hidden="true" />
                    <div className="not-found-code">404</div>
                    <h1 className="not-found-title">Page not found</h1>
                    <p className="not-found-desc">
                        The page you&apos;re looking for doesn&apos;t exist or has been moved.
                    </p>
                    <Link href="/" className="not-found-btn">
                        <FontAwesomeIcon icon={faArrowLeft} />
                        Back to Home
                    </Link>
                </div>
            </div>
        </>
    );
}
