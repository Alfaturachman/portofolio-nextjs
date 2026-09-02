'use client';

import { useI18n } from '@/lib/i18n/i18n-context';

export default function CertTitle({ id, fallback }: { id: string; fallback: string }) {
    const { t } = useI18n();
    const specTitles = t.certificates.specs as Record<string, string> | undefined;
    return <>{specTitles?.[id] ?? fallback}</>;
}
