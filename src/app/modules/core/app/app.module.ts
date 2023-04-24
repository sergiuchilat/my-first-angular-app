import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { AppRoutingModule } from './app-routing.module';
import { TodoModule } from '../../features/todo/todo.module';
import { ContactModule } from '../../features/contact/contact.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { AuthService } from '../../features/auth/services/auth.service';
import { SignupComponent } from '../../features/auth/components/signup/signup.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AppComponent } from './components/app/app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {LanguageSwitcherComponent} from "./components/language-switcher/language-switcher.component";
import {MatMenuModule} from "@angular/material/menu";
import {NgxTranslateModule} from "../translate/translate.module";
import {TranslateService} from "@ngx-translate/core";

@NgModule({
  declarations: [AppComponent, NavbarComponent, SignupComponent, LanguageSwitcherComponent],
  imports: [
    BrowserModule,
    MatSlideToggleModule,
    AppRoutingModule,
    TodoModule,
    ContactModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatMenuModule,
    NgxTranslateModule
  ],
  providers: [AuthService, TranslateService],
  bootstrap: [AppComponent],
})
export class AppModule {}
