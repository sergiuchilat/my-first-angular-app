import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'auth-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit{
  @Input() userName?: string
  @Output() userNameSaved:  EventEmitter<any> = new EventEmitter();

  constructor(private authService: AuthService) {
  }

  changeUserName(event: any) {
    this.userName = event?.target?.value;
  }

  saveUserNameOnEnter(event: any){
    this.changeUserName(event)
    this.saveUserName();
  }

  initUserName(){
    this.userName = '';
  }

  saveUserName(){
    this.authService.signup(this.userName || '');
    this.userNameSaved.emit(null);
    setTimeout(() => {
      this.initUserName()
      document.location.href = ''
    }, 200)
  }

  ngOnInit(){
    this.initUserName()
    const userName = this.authService.getUsername()
    if(userName?.length){
      this.userName = userName;
    }
  }
}
