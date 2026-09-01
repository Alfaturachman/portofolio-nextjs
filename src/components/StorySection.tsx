import type { ReactNode } from 'react';
import Tx from './Tx';

export default function StorySection({
    labelKey,
    children,
}: {
    labelKey: string;
    children: ReactNode;
}) {
    return (
        <div className="detail-story-section">
            <h2 className="detail-section-title">
                <Tx k={labelKey} />
            </h2>
            <div className="detail-text">{children}</div>
        </div>
    );
}