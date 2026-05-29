import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { articles, getArticle } from '@/app/lib/blog';
import '@/app/styles/blog.css';

export const dynamic = 'force-dynamic';
export const dynamicParams = true;
export const revalidate = 0;

export async function generateStaticParams() {
    return articles.map((a) => ({ id: a.id }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ id: string }>;
}): Promise<Metadata> {
    const { id } = await params;
    const article = getArticle(id);

    if (!article) {
        return {
            title: 'Article Not Found',
        };
    }

    return {
        title: `${article.title} | Blog`,
        description: article.summary,
        keywords: article.tags,
    };
}

export default async function BlogDetail({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const article = getArticle(id);

    if (!article) notFound();

    return (
        <section id="blog-detail-section">
            <div className="section-max">
                <div className="breadcrumb">
                    <Link href="/">Home</Link>
                    <i className="fas fa-chevron-right breadcrumb-sep" />
                    <Link href="/blog">Blog</Link>
                    <i className="fas fa-chevron-right breadcrumb-sep" />
                    <span className="breadcrumb-current">Article</span>
                </div>

                {/* Animated Holographic Glows */}
                <div className="blog-glow-blob" />
                <div className="blog-glow-blob secondary" />
                <div className="blog-glow-blob tertiary" />

                {/* Content */}
                <div style={{ position: 'relative', zIndex: 1 }}>
                    <div className="meta-pill">
                        <div className="meta-pill-text">
                            <span className="meta-pill-label">
                                {article.category}
                            </span>
                            <span className="meta-pill-value">
                                {new Date(article.date).toLocaleDateString(
                                    'en-US',
                                    {
                                        month: 'long',
                                        day: 'numeric',
                                        year: 'numeric',
                                    },
                                )}
                            </span>
                        </div>
                    </div>

                    <h1 className="detail-title">{article.title}</h1>

                    <div className="blog-tags">
                        {article.tags.map((tag) => (
                            <span key={tag} className="blog-tag">
                                #{tag}
                            </span>
                        ))}
                    </div>

                    <div
                        className="detail-content-grid"
                        style={{ gridTemplateColumns: '1fr' }}
                    >
                        <div
                            className="detail-main glass"
                            style={{ padding: '40px', borderRadius: '24px' }}
                        >
                            <div
                                className="detail-text"
                                dangerouslySetInnerHTML={{
                                    __html: article.content,
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
