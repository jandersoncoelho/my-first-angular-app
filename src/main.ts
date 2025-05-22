// src/main.ts
import { bootstrapApplication }    from '@angular/platform-browser';
import { AppComponent }            from './app/app.component';
import { registerLocaleData }      from '@angular/common';
import ptBrLocale                  from '@angular/common/locales/pt';
import { LOCALE_ID, importProvidersFrom } from '@angular/core';
import { BrowserModule }           from '@angular/platform-browser';

// registra pt-BR
registerLocaleData(ptBrLocale, 'pt-BR');

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule),
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ]
})
.catch(err => console.error(err));
