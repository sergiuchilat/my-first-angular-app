import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../features/auth/services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title: string = "Todo APP";
  isLoggedIn: Observable<boolean>;
  constructor(private authService: AuthService) {
    this.isLoggedIn = authService.isLoggedIn();
  }

  logout() {
    this.authService.logout();
  }

  ngOnInit() {}
}
