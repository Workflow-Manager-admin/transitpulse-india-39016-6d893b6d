import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

/**
 * PUBLIC_INTERFACE
 * Represents the "My City" tab for city selection and settings, with a language selector.
 */
@Component({
  selector: 'app-my-city',
  standalone: true,
  template: `
    <section class="tab-section">
      <h1>{{ 'MYCITY.TITLE' | translate }}</h1>
      <p>{{ 'MYCITY.SUBTITLE' | translate }}</p>
      <div class="mt-1 mb-1">
        <label for="lang-select-inline" style="margin-right: 0.5em;">
          {{ 'MYCITY.LANGUAGE_LABEL' | translate }}:</label>
        <select id="lang-select-inline"
          [value]="activeLang"
          (change)="setLang($event.target.value)">
          <option *ngFor="let lang of languages" [value]="lang.code">
            {{ lang.label }}
          </option>
        </select>
      </div>
      <div class="placeholder-card">{{ 'MYCITY.PLACEHOLDER' | translate }}</div>
    </section>
  `,
  styles: [`
    .tab-section { max-width: 400px; margin: 0 auto; }
    .placeholder-card {
      background: #f1f3f4; color: #666;
      border-radius: 0.5rem; padding: 1rem; text-align: center;
      margin-top: 2rem;
    }
    .mt-1 { margin-top: 0.75rem; }
    .mb-1 { margin-bottom: 0.75rem; }
  `]
})
export class MyCityComponent {
  languages = [
    { code: 'en', label: 'English' },
    { code: 'hi', label: 'हिन्दी' }
  ];

  constructor(public translate: TranslateService) {}

  // PUBLIC_INTERFACE
  setLang(lang: string) {
    this.translate.use(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem('app-lang', lang);
    }
  }
  // PUBLIC_INTERFACE
  get activeLang() {
    return this.translate.currentLang || this.translate.defaultLang || 'en';
  }
}
