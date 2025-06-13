import { NgModule, isDevMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

/**
 * PUBLIC_INTERFACE
 * Translation module for app-wide internationalization (i18n) support.
 * Loads translation files from assets/i18n and sets default language.
 */
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, '/assets/i18n/', '.json');
}

@NgModule({
  imports: [
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  exports: [TranslateModule]
})
export class TranslateConfigModule {
  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'hi']);
    translate.setDefaultLang('en');

    // Use browser language if available
    const browserLang = translate.getBrowserLang();
    if (browserLang && ['en', 'hi'].includes(browserLang)) {
      translate.use(browserLang);
    } else {
      translate.use('en');
    }
  }
}
