'use client';

import { skillsCategories } from '@/lib/experiences';
import Image from 'next/image';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const toolIcons: Record<string, string> = {
    html: '/assets/images/logo/html.svg',
    javascript: '/assets/images/logo/javascript.svg',
    react: '/assets/images/logo/react.svg',
    nextjs: '/assets/images/logo/nextjs.svg',
    python: '/assets/images/logo/python.svg',
    php: '/assets/images/logo/php.svg',
    laravel: '/assets/images/logo/laravel.svg',
    codeigniter: '/assets/images/logo/codeigniter.svg',
    mysql: '/assets/images/logo/mysql.svg',
    kotlin: '/assets/images/logo/kotlin.svg',
    java: '/assets/images/logo/java.svg',
    git: '/assets/images/logo/git.svg',
    github: '/assets/images/logo/github.svg',
    docker: '/assets/images/logo/docker.svg',
    figma: '/assets/images/logo/figma.svg',
    css: '/assets/images/logo/css.svg',
    tailwind: '/assets/images/logo/tailwind.svg',
    postgresql: '/assets/images/logo/postgresql.svg',
    nodejs: '/assets/images/logo/nodejs.svg',
    typescript: '/assets/images/logo/typescript.svg',
    django: '/assets/images/logo/django.svg',
    'adobe-illustrator-cc': '/assets/images/logo/adobe-illustrator-cc.svg',
};

export default function Skills() {
    const [expanded, setExpanded] = useState<Set<number>>(new Set());

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

    return (
        <section id="skills">
            <div className="section-max">
                <div className="section-eyebrow">Skills</div>
                <h2 className="section-title">
                    Tools &amp; technologies
                    <br />I master
                </h2>
                <div className="skills-wrapper">
                    {skillsCategories.map((cat, idx) => {
                        const isExpanded = expanded.has(idx);
                        return (
                            <div className="skill-category" key={cat.title}>
                                <button
                                    className="category-header"
                                    onClick={() => toggleCategory(idx)}
                                    aria-expanded={isExpanded}
                                >
                                    <div>
                                        <h3 className="category-title">{cat.title}</h3>
                                        <p className="category-desc">{cat.desc}</p>
                                    </div>
                                    <div className={`category-chevron${isExpanded ? ' is-expanded' : ''}`}>
                                        <FontAwesomeIcon icon={faChevronDown} />
                                    </div>
                                </button>
                                <div className={`category-tools${isExpanded ? ' is-expanded' : ''}`}>
                                    {cat.tools.map((tool) => (
                                        <div className="tool-pill" key={tool.name}>
                                            <span className="tool-icon">
                                                {toolIcons[tool.icon] ? (
                                                    <Image
                                                        src={toolIcons[tool.icon]}
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
            </div>
        </section>
    );
}
