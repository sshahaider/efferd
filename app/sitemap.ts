import { MetadataRoute } from 'next'
import { siteLink } from '@/config';

// export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const date = new Date().toISOString();
    const mainRoutes = ['', 'contact']

    const routes = mainRoutes.map((route) => ({
        url: `${siteLink}/${route}`,
        lastModified: date,
    }))


    return [...routes];
}