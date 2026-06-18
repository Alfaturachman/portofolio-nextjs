import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { articles, getArticle } from '@/lib/blog';
import '@/styles/blog.css';
import SafeHtml from '@/components/SafeHtml';
import Breadcrumb from '@/components/Breadcrumb';

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
                <Breadcrumb
                    items={[
                        { label: 'Blog', href: '/blog' },
                        { label: 'Article' },
                    ]}
                />

                <div className="blog-detail-header">
                    <div className="blog-detail-meta">
                        <span className="blog-detail-category">
                            {article.category}
                        </span>
                        <span className="blog-detail-date">
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
                    <h1 className="blog-detail-title">{article.title}</h1>
                    <div className="blog-detail-tags">
                        {article.tags.map((tag) => (
                            <span key={tag} className="blog-tag">
                                #{tag}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="blog-detail-content">
                    <div className="blog-detail-body">
                        <SafeHtml html={article.content} />
                    </div>
                </div>
            </div>
        </section>
    );
}
