import {Component, Input, OnInit} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {AuthService} from "../../../features/auth/services/auth.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'my-app';
  @Input() username: string = '';

  constructor(private authService: AuthService) {
  }

  authenticated(): boolean{
    return this.username.length > 0;
  }

  logout(){
    this.authService.logout();
    document.location.href = ''
  }

  ngOnInit() {
    this.username = this.authService.getUsername();
  }

}
