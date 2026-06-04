import { Fragment } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

interface Crumb {
    label: string;
    href?: string;
}

export default function Breadcrumb({ items }: { items: Crumb[] }) {
    return (
        <div className="breadcrumb">
            <Link href="/">Home</Link>
            {items.map((item, i) => (
                <Fragment key={i}>
                    <FontAwesomeIcon
                        icon={faChevronRight}
                        className="breadcrumb-sep"
                    />
                    {item.href ? (
                        <Link href={item.href}>{item.label}</Link>
                    ) : (
                        <span className="breadcrumb-current">{item.label}</span>
                    )}
                </Fragment>
            ))}
        </div>
    );
}
