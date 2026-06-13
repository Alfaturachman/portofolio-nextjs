import type { MetadataRoute } from 'next'
import { projects } from '@/lib/projects'
import { articles } from '@/lib/blog'
import { coursesData } from '@/lib/courses'

const BASE_URL = 'https://almavi.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: BASE_URL,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1.0,
        },
        {
            url: `${BASE_URL}/portfolio`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/blog`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
    ]

    const projectPages: MetadataRoute.Sitemap = projects.map((project) => ({
        url: `${BASE_URL}/portfolio/${project.id}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
    }))

    const blogPages: MetadataRoute.Sitemap = articles.map((article) => ({
        url: `${BASE_URL}/blog/${article.id}`,
        lastModified: new Date(article.date),
        changeFrequency: 'monthly',
        priority: 0.6,
    }))

    const coursePages: MetadataRoute.Sitemap = coursesData.specializations.map((s) => ({
        url: `${BASE_URL}/${s.id}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.5,
    }))

    return [...staticPages, ...projectPages, ...blogPages, ...coursePages]
}
