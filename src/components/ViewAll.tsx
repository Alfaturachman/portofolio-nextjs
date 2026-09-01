import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function ViewAll({ href, label }: { href: string; label: string }) {
    return (
        <div className="view-all-container">
            <Link href={href} className="btn-view-all">
                <span>{label}</span>
                <div className="btn-view-all-circle">
                    <FontAwesomeIcon
                        icon={faArrowRight}
                        className="btn-icon"
                    />
                </div>
            </Link>
        </div>
    );
}