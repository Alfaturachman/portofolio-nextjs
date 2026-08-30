import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import '@/styles/blog.css';

export default function BlogDetailLoading() {
    return (
        <section id="blog-detail-section">
            <div className="container">
                <div className="breadcrumb" style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 24 }}>
                    <div style={{ width: 40, height: 16, background: 'var(--border-subtle)', borderRadius: 4 }} />
                    <FontAwesomeIcon icon={faChevronRight} className="breadcrumb-sep" />
                    <div style={{ width: 40, height: 16, background: 'var(--border-subtle)', borderRadius: 4 }} />
                    <FontAwesomeIcon icon={faChevronRight} className="breadcrumb-sep" />
                    <div style={{ width: 60, height: 16, background: 'var(--border-subtle)', borderRadius: 4 }} />
                </div>

                <div className="blog-detail-header">
                    <div className="blog-detail-meta" style={{ display: 'flex', gap: 16, marginBottom: 12 }}>
                        <div style={{ width: 80, height: 18, background: 'var(--border-subtle)', borderRadius: 4 }} />
                        <div style={{ width: 100, height: 18, background: 'var(--border-subtle)', borderRadius: 4 }} />
                    </div>
                    <div
                        style={{
                            width: '75%',
                            height: 48,
                            marginBottom: 20,
                            background: 'var(--border-subtle)',
                            borderRadius: 8,
                        }}
                    />
                    <div className="blog-detail-tags" style={{ display: 'flex', gap: 8 }}>
                        <div style={{ width: 60, height: 20, background: 'var(--border-subtle)', borderRadius: 4 }} />
                        <div style={{ width: 50, height: 20, background: 'var(--border-subtle)', borderRadius: 4 }} />
                        <div style={{ width: 70, height: 20, background: 'var(--border-subtle)', borderRadius: 4 }} />
                    </div>
                </div>

                <div className="blog-detail-content">
                    <div className="blog-detail-body">
                        {/* Skeleton Paragraphs */}
                        {[1, 2, 3].map((paragraphIndex) => (
                            <div key={paragraphIndex} style={{ marginBottom: 32 }}>
                                <div style={{ width: '100%', height: 16, marginBottom: 12, background: 'var(--border-subtle)', borderRadius: 4 }} />
                                <div style={{ width: '95%', height: 16, marginBottom: 12, background: 'var(--border-subtle)', borderRadius: 4 }} />
                                <div style={{ width: '98%', height: 16, marginBottom: 12, background: 'var(--border-subtle)', borderRadius: 4 }} />
                                <div style={{ width: '90%', height: 16, marginBottom: 12, background: 'var(--border-subtle)', borderRadius: 4 }} />
                                <div style={{ width: paragraphIndex === 3 ? '50%' : '75%', height: 16, background: 'var(--border-subtle)', borderRadius: 4 }} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
