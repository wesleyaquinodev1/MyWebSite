import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';
import type { Language } from '../i18n/translations';
import { defaultSeoTags, seoConfig } from './seo.config';

@Injectable({
    providedIn: 'root'
})
export class SeoService {
    constructor(
        @Inject(DOCUMENT) private readonly document: Document,
        private readonly titleService: Title,
        private readonly metaService: Meta
    ) { }

    initialize(language: Language): void {
        defaultSeoTags.forEach(tag => this.setTag(tag));
        this.update(language);
    }

    update(language: Language): void {
        const metadata = seoConfig[language];

        this.titleService.setTitle(metadata.title);
        this.document.documentElement.lang = metadata.htmlLang;

        const tags: MetaDefinition[] = [
            { name: 'description', content: metadata.description },
            { property: 'og:title', content: metadata.title },
            { property: 'og:description', content: metadata.description },
            { property: 'og:locale', content: metadata.locale },
            { name: 'twitter:title', content: metadata.title },
            { name: 'twitter:description', content: metadata.description }
        ];

        tags.forEach(tag => this.setTag(tag));
    }

    private setTag(tag: MetaDefinition): void {
        const selector = tag.name
            ? `name='${tag.name}'`
            : tag.property
                ? `property='${tag.property}'`
                : null;

        if (!selector) return;

        if (this.metaService.getTag(selector)) {
            this.metaService.updateTag(tag, selector);
        } else {
            this.metaService.addTag(tag);
        }
    }
}