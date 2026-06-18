import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import '@/styles/blog.css';

export default function BlogListLoading() {
    return (
        <section id="blog-section" style={{ marginTop: '20px' }}>
            <div className="section-max">
                <div
                    className="breadcrumb"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 8,
                        marginBottom: 24,
                    }}
                >
                    <div
                        style={{
                            width: 40,
                            height: 16,
                            background: 'var(--border-subtle)',
                            borderRadius: 4,
                        }}
                    />
                    <FontAwesomeIcon
                        icon={faChevronRight}
                        className="breadcrumb-sep"
                    />
                    <div
                        style={{
                            width: 40,
                            height: 16,
                            background: 'var(--border-subtle)',
                            borderRadius: 4,
                        }}
                    />
                </div>

                <div className="blog-header glass blog-header-content">
                    <div className="blog-glow-blob" />
                    <div className="blog-glow-blob secondary" />
                    <div className="blog-glow-blob tertiary" />

                    <div className="blog-header-inner">
                        <div className="section-eyebrow">
                            Writings & Thoughts
                        </div>
                        <h1 className="section-title blog-header-title">
                            Blog.
                        </h1>
                        <p className="detail-text blog-header-desc">
                            A collection of articles about software engineering,
                            web architecture, and my journey in tech.
                        </p>
                    </div>
                </div>

                {/* Filter Navigation Skeleton */}
                <div
                    className="blog-filter-nav"
                    style={{ display: 'flex', gap: 12, marginBottom: 32 }}
                >
                    {[1, 2, 3].map((i) => (
                        <div
                            key={i}
                            style={{
                                width: i === 1 ? 60 : 100,
                                height: 38,
                                background: 'var(--border-subtle)',
                                borderRadius: 20,
                            }}
                        />
                    ))}
                </div>

                {/* Blog Grid Skeleton */}
                <div className="blog-grid">
                    {[1, 2, 3, 4].map((i) => (
                        <div
                            key={i}
                            className="blog-card glass"
                            style={{ pointerEvents: 'none' }}
                        >
                            <div
                                className="blog-meta"
                                style={{
                                    display: 'flex',
                                    gap: 16,
                                    marginBottom: 12,
                                }}
                            >
                                <div
                                    style={{
                                        width: 80,
                                        height: 16,
                                        background: 'var(--border-subtle)',
                                        borderRadius: 4,
                                    }}
                                />
                                <div
                                    style={{
                                        width: 60,
                                        height: 16,
                                        background: 'var(--border-subtle)',
                                        borderRadius: 4,
                                    }}
                                />
                            </div>
                            <div
                                style={{
                                    width: '85%',
                                    height: 24,
                                    marginBottom: 12,
                                    background: 'var(--border-subtle)',
                                    borderRadius: 6,
                                }}
                            />
                            <div
                                style={{
                                    width: '100%',
                                    height: 16,
                                    marginBottom: 8,
                                    background: 'var(--border-subtle)',
                                    borderRadius: 4,
                                }}
                            />
                            <div
                                style={{
                                    width: '90%',
                                    height: 16,
                                    marginBottom: 20,
                                    background: 'var(--border-subtle)',
                                    borderRadius: 4,
                                }}
                            />
                            <div
                                className="blog-tags"
                                style={{ display: 'flex', gap: 8 }}
                            >
                                <div
                                    style={{
                                        width: 50,
                                        height: 20,
                                        background: 'var(--border-subtle)',
                                        borderRadius: 4,
                                    }}
                                />
                                <div
                                    style={{
                                        width: 60,
                                        height: 20,
                                        background: 'var(--border-subtle)',
                                        borderRadius: 4,
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
