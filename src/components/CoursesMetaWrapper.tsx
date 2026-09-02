'use client';

import { useI18n } from '@/lib/i18n/i18n-context';
import MetaWrapper from './MetaWrapper';
import type { ReactNode } from 'react';

export default function CoursesMetaWrapper({ children }: { children: ReactNode }) {
    const { t } = useI18n();

    return (
        <MetaWrapper
            label={t.courses.toggleLabel}
            ariaLabel={t.courses.toggleAria}
        >
            {children}
        </MetaWrapper>
    );
}
