import type { Metadata } from 'next';
import { articles } from '@/lib/blog';
import BlogFilter from '@/components/BlogFilter';
import BlogHeader from '@/components/BlogHeader';
import Breadcrumb from '@/components/Breadcrumb';
import '@/styles/blog.css';

export const metadata: Metadata = {
    title: 'Blog | Alfaturachman Maulana Pahlevi',
    description:
        'A collection of articles about software engineering, web architecture, and DevOps by Alfaturachman Maulana Pahlevi.',
    keywords: [
        'blog',
        'software engineering',
        'devops',
        'web development',
        'iot',
        'almavi',
    ],
};

export default function BlogPage() {
    return (
        <section id="blog-section" style={{ marginTop: '60px' }}>
            <div className="container">
                <Breadcrumb items={[{ label: 'Blog' }]} />
                <BlogHeader />
                <BlogFilter articles={articles} />
            </div>
        </section>
    );
}
