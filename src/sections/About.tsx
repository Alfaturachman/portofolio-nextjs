'use client';

import { useI18n } from '@/lib/i18n/i18n-context';

export default function About() {
    const { t } = useI18n();

    return (
        <section id="about" aria-label={t.about.sectionAria}>
            <div className="container">
                <h2 className="section-title">{t.about.eyebrow}</h2>

                <div className="about-bento-grid">
                    {/* Card 2: Biography */}
                    <div className="bento-card bento-card--bio">
                        <div className="bento-bio-body">
                            <p>{t.about.bioIntro}</p>

                            <p>{t.about.bioP2}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
