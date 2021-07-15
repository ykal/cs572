import { Injectable } from '@angular/core';

import {JwtHelperService} from '@auth0/angular-jwt';

import { User } from 'src/app/model/user';
import { ApiService } from 'src/app/shared/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly AUTH_URL = "auth";
  private readonly LOGIN_URL = "login";
  private readonly REGISTER_URL = "register";
  private jwtHelper: JwtHelperService;

  constructor(private apiService: ApiService<User>) {
    this.jwtHelper = new JwtHelperService();
   }

  register(user: User): Promise<User> {
    return this.apiService.post(`${this.AUTH_URL}/${this.REGISTER_URL}`, user)
      .toPromise()
      .then(res => <User> res);
  }

  login(credintials: User): Promise<any> {
    return this.apiService.post(`${this.AUTH_URL}/${this.LOGIN_URL}`, credintials)
      .toPromise();
  }

  logout() {
    localStorage.removeItem("token");
  }

  storeToken(token: string): void {
    localStorage.setItem("token", token);
  }

  getToken():string | undefined | null {
    return localStorage.getItem("token");
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  isTokenExpired(token: string): boolean {
    return this.jwtHelper.isTokenExpired(token);
  }

  decodeToken(token: string): any {
    return this.jwtHelper.decodeToken(token);
  }

  extractLoggedInUserName(): string  {
    if (this.isAuthenticated()) {
      const token = <string>this.getToken();
     return this.decodeToken(token)?.name;
    } 
    return "";
  }
}
