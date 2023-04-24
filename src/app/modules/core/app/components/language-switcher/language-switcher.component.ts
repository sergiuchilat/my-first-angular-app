import {Component, OnInit} from "@angular/core";
import {TranslateService} from "@ngx-translate/core";
import {
  AppLocale,
  getAppLocales,
  getLocaleFromLocalStorage,
  setLocaleToLocalStorage
} from "../../../translate/translate.module";

@Component({
  selector: 'language-switcher',
  templateUrl: 'language-switcher.component.html',
  styleUrls: ['language-switcher.component.scss']
})

export class LanguageSwitcherComponent implements OnInit{

  appLocale = getLocaleFromLocalStorage();
  appLocales = getAppLocales()
  constructor(private translateService: TranslateService) {

  }

  setLocale(locale: string){
    this.translateService.setDefaultLang(locale)
    setLocaleToLocalStorage(locale)
    this.appLocale = locale
  }

  ngOnInit() {
  }
}
