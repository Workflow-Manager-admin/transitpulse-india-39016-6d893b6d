import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

/**
 * PUBLIC_INTERFACE
 * Root app component for TransitPulse India.
 * Provides global routing outlet and mobile bottom navigation bar.
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TransitPulse India';
  languages = [
    { code: 'en', label: 'English' },
    { code: 'hi', label: 'हिन्दी' }
  ];

  constructor(public translate: TranslateService) {}

  // PUBLIC_INTERFACE
  setLanguage(lang: string) {
    /** Switch active language of app and persist to localStorage */
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
