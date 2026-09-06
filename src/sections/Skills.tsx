'use client';

import { skillsCategories } from '@/lib/experiences';
import Image from 'next/image';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useI18n } from '@/lib/i18n/i18n-context';
import ViewAll from '@/components/ViewAll';

const toolIcons: Record<string, string> = {
    html: '/assets/images/logo/html.svg',
    javascript: '/assets/images/logo/javascript.svg',
    react: '/assets/images/logo/react.svg',
    nextjs: '/assets/images/logo/nextjs.svg?v=2',
    python: '/assets/images/logo/python.svg',
    php: '/assets/images/logo/php.svg',
    laravel: '/assets/images/logo/laravel.svg',
    codeigniter: '/assets/images/logo/codeigniter.svg',
    mysql: '/assets/images/logo/mysql.svg',
    kotlin: '/assets/images/logo/kotlin.svg',
    java: '/assets/images/logo/java.svg',
    git: '/assets/images/logo/git.svg',
    github: '/assets/images/logo/github.svg?v=2',
    docker: '/assets/images/logo/docker.svg',
    figma: '/assets/images/logo/figma.svg',
    css: '/assets/images/logo/css.svg',
    tailwind: '/assets/images/logo/tailwind.svg',
    postgresql: '/assets/images/logo/postgresql.svg',
    nodejs: '/assets/images/logo/nodejs.svg',
    typescript: '/assets/images/logo/typescript.svg',
    django: '/assets/images/logo/django.svg?v=2',
    'adobe-illustrator-cc': '/assets/images/logo/adobe-illustrator-cc.svg',
};

export default function Skills({
    preview = false,
    children,
}: {
    preview?: boolean;
    children?: React.ReactNode;
}) {
    const [expanded, setExpanded] = useState<Set<number>>(new Set());
    const { t } = useI18n();

    const toggleCategory = (idx: number) => {
        setExpanded((prev) => {
            const next = new Set(prev);
            if (next.has(idx)) {
                next.delete(idx);
            } else {
                next.add(idx);
            }
            return next;
        });
    };

    const allTools = skillsCategories.flatMap((cat) => cat.tools);

    // ponytail: reverse row shifts its phase by half a set so same-named pills
    // never align across rows within the visible loop (translate stays in
    // [-50%,0] => seamless, no cut-off)
    const renderToolPills = (tools: typeof allTools, key: string) =>
        [...tools, ...tools].map((tool, i) => (
            <div className="tool-pill" key={`${key}-${tool.name}-${i}`}>
                {toolIcons[tool.icon] ? (
                    <Image
                        src={toolIcons[tool.icon]}
                        alt={tool.name}
                        width={40}
                        height={40}
                    />
                ) : (
                    <i className={`fab fa-${tool.icon}`} />
                )}
            </div>
        ));

    const renderMarquee = () => (
        <div className="skills-marquee" aria-hidden="true">
            <div className="skills-marquee-track">
                {renderToolPills(allTools, 't')}
            </div>
        </div>
    );

    return (
        <section id="skills">
            <div className="container">
                {children}
                <h2 className="section-title">{t.skills.eyebrow}</h2>
                {preview ? (
                    renderMarquee()
                ) : (
                    <div className="skills-wrapper">
                        {skillsCategories.map((cat, idx) => {
                            const isExpanded = expanded.has(idx);
                            // ponytail: fallback keeps a new category visible in EN
                            // until its translation is added to skills.json
                            const translated = t.skills.categories[idx];
                            return (
                                <div className="skill-category" key={cat.title}>
                                    <button
                                        className="category-header"
                                        onClick={() => toggleCategory(idx)}
                                        aria-expanded={isExpanded}
                                    >
                                        <div>
                                            <h3 className="category-title">
                                                {translated?.title ?? cat.title}
                                            </h3>
                                            <p className="category-desc">
                                                {translated?.desc ?? cat.desc}
                                            </p>
                                        </div>
                                        <div
                                            className={`category-chevron${isExpanded ? ' is-expanded' : ''}`}
                                        >
                                            <FontAwesomeIcon icon={faChevronDown} />
                                        </div>
                                    </button>
                                    <div
                                        className={`category-tools${isExpanded ? ' is-expanded' : ''}`}
                                    >
                                        {cat.tools.map((tool) => (
                                            <div
                                                className="tool-pill"
                                                key={tool.name}
                                            >
                                                <span className="tool-icon">
                                                    {toolIcons[tool.icon] ? (
                                                        <Image
                                                            src={
                                                                toolIcons[
                                                                    tool.icon
                                                                ]
                                                            }
                                                            alt={tool.name}
                                                            width={24}
                                                            height={24}
                                                        />
                                                    ) : (
                                                        <i
                                                            className={`fab fa-${tool.icon}`}
                                                        />
                                                    )}
                                                </span>
                                                {tool.name}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
                {preview && (
                    <ViewAll href="/skills" label={t.skills.viewAll} />
                )}
            </div>
        </section>
    );
}
