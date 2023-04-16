import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {
  @Input() userName?: string
  @Output() userNameSaved:  EventEmitter<any> = new EventEmitter();

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
    localStorage.setItem('userName', this.userName || '')
    this.userNameSaved.emit(null);
    setTimeout(() => {
      this.initUserName()
    }, 200)
  }

  ngOnInit(){
    this.initUserName()
    const userName = localStorage.getItem('userName');
    if(userName?.length){
      this.userName = userName;
    }
  }
}
