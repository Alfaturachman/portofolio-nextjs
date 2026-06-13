import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

interface Crumb {
    label: string;
    href?: string;
}

export default function Breadcrumb({ items }: { items: Crumb[] }) {
    return (
        <nav className="breadcrumb" aria-label="Breadcrumb">
            <ol className="breadcrumb-list">
                <li>
                    <Link href="/">Home</Link>
                </li>
                {items.map((item, i) => (
                    <li key={i}>
                        <FontAwesomeIcon
                            icon={faChevronRight}
                            className="breadcrumb-sep"
                            aria-hidden="true"
                        />
                        {item.href ? (
                            <Link href={item.href}>{item.label}</Link>
                        ) : (
                            <span
                                className="breadcrumb-current"
                                aria-current="page"
                            >
                                {item.label}
                            </span>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
}
