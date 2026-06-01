'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import type { BlogArticle } from '@/lib/types';

export default function BlogFilter({
    articles,
}: {
    articles: BlogArticle[];
}) {
    const [activeCategory, setActiveCategory] = useState<string>('All');

    const categories = useMemo(() => {
        const uniqueCategories = new Set(articles.map((a) => a.category));
        return ['All', ...Array.from(uniqueCategories)];
    }, [articles]);

    const filteredArticles = useMemo(() => {
        if (activeCategory === 'All') return articles;
        return articles.filter((a) => a.category === activeCategory);
    }, [activeCategory, articles]);

    return (
        <>
            <div className="blog-filter-nav">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`blog-filter-btn ${activeCategory === cat ? 'active' : ''}`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="blog-grid">
                {filteredArticles.map((article) => (
                    <Link
                        href={`/blog/${article.id}`}
                        className="blog-card glass"
                        key={article.id}
                    >
                        <div className="blog-meta">
                            <span className="blog-category">
                                {article.category}
                            </span>
                            <span>
                                {new Date(article.date).toLocaleDateString(
                                    'en-US',
                                    {
                                        month: 'short',
                                        day: 'numeric',
                                        year: 'numeric',
                                    },
                                )}
                            </span>
                        </div>
                        <h2 className="blog-card-title">{article.title}</h2>
                        <p className="blog-card-summary">{article.summary}</p>
                        <div className="blog-tags">
                            {article.tags.map((tag) => (
                                <span key={tag} className="blog-tag">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </Link>
                ))}
            </div>

            {filteredArticles.length === 0 && (
                <div
                    style={{
                        textAlign: 'center',
                        padding: '40px',
                        color: 'var(--text-muted)',
                    }}
                >
                    No articles found in this category.
                </div>
            )}
        </>
    );
}
