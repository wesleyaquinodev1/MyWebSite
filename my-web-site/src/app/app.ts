import { Component, HostListener, OnInit, signal } from '@angular/core';
import packageJson from '../../package.json';
import { CommonModule } from '@angular/common';
import { translations, type Language } from './core/i18n/translations';
import { SeoService } from './core/seo/seo.service';
import { BUILD_INFO } from './core/build-info';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
    host: {
    '[class.dark-mode]': 'darkMode()'
  }
})
export class App implements OnInit {
  constructor(
    private readonly seoService: SeoService
  ) {}

  protected readonly title = signal('Wesley Aquino | Desenvolvedor Full Stack');
  readonly deployHash = BUILD_INFO.commitHash;
  appVersion = packageJson.version;
  copyrightYear = '2026'
  readonly language = signal<Language>('pt'); 
  readonly darkMode = signal(false);

  get t() {
    return translations[this.language()];
  }

    private loadPreferences(): void {
      if (typeof window === 'undefined') return;
      const savedLanguage = window.localStorage.getItem('language');

      if (savedLanguage === 'pt' || savedLanguage === 'en') {
        this.language.set(savedLanguage);
      }

      this.darkMode.set(
        window.localStorage.getItem('theme') === 'dark'
      );
    }

  changeLanguage(event: Event): void {
    const selectedLanguage = (event.target as HTMLSelectElement).value;

    if (selectedLanguage !== 'pt' && selectedLanguage !== 'en') {
      return;
    }

    this.language.set(selectedLanguage);

    if (typeof window !== 'undefined') {
      window.localStorage.setItem('language', selectedLanguage);
    }

    this.seoService.update(this.language());
  }

  changeTheme(event: Event): void {
    const enabled = (event.target as HTMLInputElement).checked;
    this.darkMode.set(enabled);

    if (typeof window !== 'undefined') {
      if (enabled) {
        window.localStorage.setItem('theme', 'dark');
      } else {
        window.localStorage.removeItem('theme');
      }
    }
  }

  @HostListener('document:click', ['$event'])
  closeResumeDropdown(event: MouseEvent): void {
    const dropdown = document.querySelector('.resume-dropdown');

    if (dropdown && !dropdown.contains(event.target as Node)) {
      dropdown.removeAttribute('open');
    }
  }

  ngOnInit(): void {
  this.loadPreferences();
  this.seoService.initialize(this.language());
  }
}
