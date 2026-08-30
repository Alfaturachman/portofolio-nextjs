import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import BlogHeader from '@/components/BlogHeader';
import '@/styles/blog.css';

export default function BlogListLoading() {
    return (
        <section id="blog-section" style={{ marginTop: '20px' }}>
            <div className="container">
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

                <BlogHeader />

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
