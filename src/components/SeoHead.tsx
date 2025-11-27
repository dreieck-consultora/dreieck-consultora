import React from 'react';
import { Helmet } from 'react-helmet-async';

// Obtener BASE_URL - en desarrollo es '/', en producción GitHub Pages es '/dreieck-consultora/'
const BASE_URL = import.meta.env.BASE_URL || '/';

interface SeoHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  siteName?: string;
  locale?: string;
}

export const SeoHead: React.FC<SeoHeadProps> = ({
  title = 'Dreieck - Consultoría y Soluciones de Business Intelligence',
  description = 'Transformamos datos en decisiones estratégicas para tu negocio. Especialistas en Power BI, análisis de datos y consultoría empresarial.',
  keywords = 'consultoría, business intelligence, power bi, análisis de datos, dashboard, visualización de datos, empresa de análisis de datos',
  image = 'https://dreieck-consultora.github.io/dreieck-consultora/og-image.png',
  url = 'https://dreieck-consultora.github.io/dreieck-consultora/',
  type = 'website',
  siteName = 'Dreieck',
  locale = 'es_ES',
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={locale} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Favicon */}
      <link rel="icon" href={`${BASE_URL}favicon.ico`} />
      <link rel="apple-touch-icon" sizes="180x180" href={`${BASE_URL}apple-touch-icon.png`} />
      <link rel="icon" type="image/png" sizes="32x32" href={`${BASE_URL}favicon-32x32.png`} />
      <link rel="icon" type="image/png" sizes="16x16" href={`${BASE_URL}favicon-16x16.png`} />
      <link rel="manifest" href={`${BASE_URL}site.webmanifest`} />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SeoHead;