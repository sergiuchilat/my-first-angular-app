import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'auth-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  @Input() userName?: string;
  @Output() userNameSaved: EventEmitter<any> = new EventEmitter();

  isLoggedIn: Observable<boolean>;

  constructor(private authService: AuthService, private translateService :TranslateService) {
    this.isLoggedIn = authService.isLoggedIn();
  }

  changeUserName(event: any) {
    this.userName = event?.target?.value;
  }

  saveUserNameOnEnter(event: any) {
    this.changeUserName(event);
    this.saveUserName();
  }

  initUserName() {
    this.userName = '';
  }

  saveUserName() {
    this.authService.signup(this.userName || '');
    this.userNameSaved.emit(null);
  }

  ngOnInit() {
    this.initUserName();
    const userName = this.authService.getUsername();
    if (userName?.length) {
      this.userName = userName;
    }
  }
}
