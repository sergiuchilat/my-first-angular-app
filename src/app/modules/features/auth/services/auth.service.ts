import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class AuthService{
  private isAuthenticatedUserSubject = new BehaviorSubject<boolean>(this.userHasName())

  constructor() {
  }

  signup(username: string){
    localStorage.setItem('userName', username || '')
    this.isAuthenticatedUserSubject.next(true);
  }

  logout(): void{
    localStorage.removeItem('userName');
    localStorage.removeItem('todos');
    this.isAuthenticatedUserSubject.next(false);
  }

  getUsername(): string{
    return localStorage.getItem('userName') || '';
  }

  userHasName(): boolean{
    return this.getUsername().length > 0
  }

  isLoggedIn(): Observable<boolean>{
    return this.isAuthenticatedUserSubject.asObservable()
  }

}
