import { MetadataRoute } from 'next';
import { services } from '@/lib/services';

const siteUrl = 'https://greenbuildnutec.co.za';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}/gallery`,
      lastModified: new Date(),
    },
  ];

  const serviceRoutes = services.map((service) => ({
    url: `${siteUrl}/services/${service.slug}`,
    lastModified: new Date(),
  }));

  return [...routes, ...serviceRoutes];
}
