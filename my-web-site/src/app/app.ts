import { Component, OnInit, signal } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import packageJson from '../../package.json';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  constructor(
    private titleService: Title,
    private metaService: Meta,
  ) {}

  protected readonly title = signal('Wesley Aquino | Desenvolvedor Full Stack');
  deployHash = '__BUILD_HASH__';
  appVersion = packageJson.version;
  copyrightYear = '2026'

  ngOnInit(): void {
    this.titleService.setTitle(
      'Portfólio Wesley Aquino | Desenvolvedor Full Stack'
    );

    this.metaService.addTags([
      {
        name: 'description',
        content:
          'Portfólio de Wesley Aquino, desenvolvedor Full Stack com foco em Angular, TypeScript, C#, .NET e desenvolvimento de aplicações web.'
      },
      {
        name: 'keywords',
        content:
          'Wesley Aquino, Desenvolvedor Full Stack, Angular, TypeScript, C#, .NET, ASP.NET Core, Desenvolvimento Web, Portfólio'
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
        property: 'og:title',
        content: 'Wesley Aquino | Desenvolvedor Full Stack'
      },
      {
        property: 'og:description',
        content:
          'Conheça meu portfólio, experiências profissionais e projetos em desenvolvimento web.'
      },
      {
        property: 'og:url',
        content: 'https://SEU-DOMINIO.com.br'
      },
      {
        property: 'og:image',
        content: 'https://SEU-DOMINIO.com.br/assets/og-image.png'
      },
      {
        property: 'og:locale',
        content: 'pt_BR'
      },
      {
        property: 'og:site_name',
        content: 'Wesley Aquino'
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        name: 'twitter:title',
        content: 'Wesley Aquino | Desenvolvedor Full Stack'
      },
      {
        name: 'twitter:description',
        content:
          'Portfólio profissional de Wesley Aquino — Full Stack Developer.'
      },
      {
        name: 'twitter:image',
        content: 'https://SEU-DOMINIO.com.br/assets/og-image.png'
      }
    ]);
  }
}
