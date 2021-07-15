import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth/services/auth.service';
import { User } from 'src/app/model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private readonly defaultUser: User = {
    username: "",
    password: ""
  }
  user: User = {...this.defaultUser};
  loggedInUser = "";

  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.loggedInUser = this.authService.extractLoggedInUserName();
  }

  isUserValid(): boolean {
    return !!this.user.username && !!this.user.password;
  }

  login() {
    if(this.isUserValid()) {
      this.authService.login(this.user)
      .then((res:any) => {
        this.user = {...this.defaultUser};
        this.authService.storeToken(res.token);
        this.loggedInUser = this.authService.extractLoggedInUserName();
      });
    }
  }

  logout() {
    this.authService.logout();
    this.router.navigate(["/"])
  }
}
