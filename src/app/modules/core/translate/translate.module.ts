import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { HttpClientModule, HttpClient } from '@angular/common/http';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http,
    './assets/i18n/',
    '.json');
}

export enum AppLocale {
  EN = 'EN',
  RO = 'RO',
  RU = 'RU'
}

export function getLocaleFromLocalStorage() {
  const locale = localStorage.getItem('locale') || '';
  if(Object.keys(AppLocale).includes(locale)){
    return locale;
  }
  return AppLocale.EN;
}

export function setLocaleToLocalStorage (locale: string){
  localStorage.setItem('locale', locale)
}

export function getAppLocales() {
  return Object.keys(AppLocale)
}

@NgModule({

  declarations: [],

  imports: [

    CommonModule,

    HttpClientModule,

    TranslateModule.forRoot({

      defaultLanguage: getLocaleFromLocalStorage(),

      loader: {

        provide: TranslateLoader,

        useFactory: HttpLoaderFactory,

        deps: [HttpClient],

      },

    }),

  ],

  exports: [TranslateModule],

})

export class NgxTranslateModule { }
