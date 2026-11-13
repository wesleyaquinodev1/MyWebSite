import type { MetaDefinition } from '@angular/platform-browser';
import type { Language } from '../i18n/translations';

interface SeoMetadata {
    title: string;
    description: string;
    locale: string;
    htmlLang: string;
}

export const seoConfig: Record<Language, SeoMetadata> = {
    pt: {
        title: 'Portfólio Wesley Aquino | Desenvolvedor Full Stack',
        description: 'Portfólio de Wesley Aquino, desenvolvedor Full Stack com foco em Angular, TypeScript, C#, .NET e desenvolvimento de aplicações web.',
        locale: 'pt_BR',
        htmlLang: 'pt-BR'
    },
    en: {
        title: 'Wesley Aquino Portfolio | Full Stack Developer',
        description: 'Wesley Aquino portfolio, Full Stack Developer focused on Angular, TypeScript, C#, .NET and web application development.',
        locale: 'en_US',
        htmlLang: 'en'
    }
};

const siteUrl = 'https://SEU-DOMINIO.com.br';

export const defaultSeoTags: MetaDefinition[] = [
    {
        name: 'keywords',
        content: 'Wesley Aquino, Desenvolvedor Full Stack, Angular, TypeScript, C#, .NET, ASP.NET Core, Desenvolvimento Web, Portfólio'
    },
    {
        name: 'author',
        content: 'Wesley Aquino'
    },
    {
        name: 'robots',
        content: 'index, follow'
    },
    {
        property: 'og:type',
        content: 'website'
    },
    {
        property: 'og:site_name',
        content: 'Wesley Aquino'
    },
    {
        property: 'og:url',
        content: siteUrl
    },
    {
        property: 'og:image',
        content: `${siteUrl}/assets/og-image.png`
    },
    {
        name: 'twitter:card',
        content: 'summary_large_image'
    },
    {
        name: 'twitter:image',
        content: `${siteUrl}/assets/og-image.png`
    }
];