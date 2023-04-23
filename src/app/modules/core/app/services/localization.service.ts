import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";

export enum AppLocale {
  EN = 'en',
  RO = 'ro',
  RU = 'ru'
}
@Injectable({
  providedIn: 'root'
})

export class LocalizationService{
  private appLocale$ = new BehaviorSubject<AppLocale>(AppLocale.EN)

  constructor() {
  }

  setLocale(locale: AppLocale){
    this.appLocale$.next(locale)
  }

  getLocale(): Observable<AppLocale>{
    return this.appLocale$.asObservable()
  }

  getLocales(): AppLocale[]{
    return Object.values(AppLocale)
  }

}
