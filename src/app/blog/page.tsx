import { articles } from '@/lib/blog';
import BlogFilter from '@/components/BlogFilter';
import Breadcrumb from '@/components/Breadcrumb';
import '@/styles/blog.css';

export default function BlogPage() {
    return (
        <section id="blog-section">
            <div className="section-max">
                <Breadcrumb items={[{ label: 'Blog' }]} />

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

                <BlogFilter articles={articles} />
            </div>
        </section>
    );
}
