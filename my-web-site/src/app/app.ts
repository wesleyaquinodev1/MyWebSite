import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import packageJson from '../../package.json';
import { NgxTurnstileModule } from 'ngx-turnstile';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule, NgxTurnstileModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  constructor(
    private titleService: Title,
    private metaService: Meta
  ) {}

  protected readonly title = signal('Wesley Aquino | Desenvolvedor Full Stack');
  deployHash = '__BUILD_HASH__';
  appVersion = packageJson.version;
  copyrightYear = '2026'
  isVerified = false;

  onTurnstileResolved(token: string | null) {
    if (token) {
      this.isVerified = true;
      console.log('Turnstile resolvido com sucesso, token gerado.');
    } else {
      this.isVerified = false;
    }
  }

  onSubmit(event: Event) {
    if (!this.isVerified) {
      event.preventDefault();
      alert('Por favor, confirme que você não é um robô.');
      return;
    }
  }

  ngOnInit(): void {
    this.titleService.setTitle(
      'Wesley Aquino | Desenvolvedor Full Stack'
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
