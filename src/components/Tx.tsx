'use client';

import { useI18n } from '@/lib/i18n/i18n-context';

// ponytail: dotted-path lookup lets server pages render translated strings
// without wrapping whole sections in client components. A wrong path renders
// the fallback (or nothing); dictionary shape itself stays type-checked at build time.
export default function Tx({
    k,
    fallback,
    values,
}: {
    k: string;
    fallback?: string;
    values?: Record<string, string | number>;
}) {
    const { t } = useI18n();

    let value: unknown = t;
    for (const part of k.split('.')) {
        if (value && typeof value === 'object') {
            value = (value as Record<string, unknown>)[part];
        } else {
            return <>{fallback}</>;
        }
    }

    let str = typeof value === 'string' ? value : fallback;
    if (str && values) {
        Object.entries(values).forEach(([key, val]) => {
            str = str?.replace(`{${key}}`, String(val));
        });
    }

    return <>{str}</>;
}
