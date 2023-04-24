import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../features/auth/services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isLoggedIn: Observable<boolean>;


  constructor(private authService: AuthService) {
    this.isLoggedIn = authService.isLoggedIn();
  }

  logout() {
    this.authService.logout();
  }

  ngOnInit() {}
}
