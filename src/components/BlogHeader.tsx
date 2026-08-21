'use client';

import { useI18n } from '@/lib/i18n/i18n-context';

export default function BlogHeader() {
    const { t } = useI18n();

    return (
        <div className="blog-header glass blog-header-content">
            <div className="blog-glow-blob" />
            <div className="blog-glow-blob secondary" />
            <div className="blog-glow-blob tertiary" />

            <div className="blog-header-inner">
                <div className="section-eyebrow">{t.blog.eyebrow}</div>
                <h1 className="section-title blog-header-title">{t.blog.title}</h1>
                <p className="detail-text blog-header-desc">{t.blog.desc}</p>
            </div>
        </div>
    );
}
