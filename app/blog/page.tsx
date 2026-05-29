'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { articles } from '@/app/lib/blog';
import '@/app/styles/blog.css';

export default function BlogPage() {
    const [activeCategory, setActiveCategory] = useState<string>('All');

    const categories = useMemo(() => {
        const uniqueCategories = new Set(articles.map((a) => a.category));
        return ['All', ...Array.from(uniqueCategories)];
    }, []);

    const filteredArticles = useMemo(() => {
        if (activeCategory === 'All') return articles;
        return articles.filter((a) => a.category === activeCategory);
    }, [activeCategory]);

    return (
        <section id="blog-section">
            <div className="section-max">
                <div className="breadcrumb">
                    <Link href="/">Home</Link>
                    <i className="fas fa-chevron-right breadcrumb-sep" />
                    <span className="breadcrumb-current">Blog</span>
                </div>

                <div
                    className="blog-header glass"
                    style={{
                        padding: '48px',
                        borderRadius: '32px',
                        marginBottom: '48px',
                        position: 'relative',
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.04)',
                    }}
                >
                    {/* Animated Holographic Glows */}
                    <div className="blog-glow-blob"></div>
                    <div className="blog-glow-blob secondary"></div>
                    <div className="blog-glow-blob tertiary"></div>

                    {/* Content Wrapper to ensure text stays above the glows */}
                    <div style={{ position: 'relative', zIndex: 1 }}>
                        <div className="section-eyebrow">
                            Writings & Thoughts
                        </div>
                        <h1
                            className="section-title"
                            style={{ margin: '8px 0 16px' }}
                        >
                            Blog.
                        </h1>
                        <p
                            className="detail-text"
                            style={{ maxWidth: '600px', margin: 0 }}
                        >
                            A collection of articles about software engineering,
                            web architecture, and my journey in tech.
                        </p>
                    </div>
                </div>

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
                            <p className="blog-card-summary">
                                {article.summary}
                            </p>
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
            </div>
        </section>
    );
}
