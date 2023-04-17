import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class AuthService{
  constructor() {
  }

  signup(username: string){
    localStorage.setItem('userName', username || '')
  }

  logout(): void{
    localStorage.removeItem('userName');
    localStorage.removeItem('todos');
  }

  getUsername(): string{
    return localStorage.getItem('userName') || '';
  }
}
