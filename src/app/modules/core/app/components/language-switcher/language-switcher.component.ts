import {Component, OnInit} from "@angular/core";
import {AppLocale, LocalizationService} from "../../services/localization.service";
import {Observable} from "rxjs";

@Component({
  selector: 'language-switcher',
  templateUrl: 'language-switcher.component.html',
  styleUrls: ['language-switcher.component.scss']
})

export class LanguageSwitcherComponent implements OnInit{

  appLocale: Observable<AppLocale>;
  appLocales: AppLocale[] = this.localizationService.getLocales()
  constructor(private localizationService: LocalizationService) {
    this.appLocale = localizationService.getLocale()
  }
  ngOnInit() {
  }
}
