import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  private defaultUser: User = {
    username: "",
    password: "",
    name: "",
    rePassword: ""
  };
  errorMessage = "";
  user = {...this.defaultUser};

  constructor(private authService: AuthService, private router: Router) { }

  isUserValid(): boolean {
    return (
      !!this.user.name && 
      !!this.user.username && 
      !!this.user.password && 
      !!this.user.rePassword &&
      this.user.password == this.user.rePassword
    );
  }

  register() {
    if(this.isUserValid()) {
     this.authService.register(this.user)
     .then(res => {
      this.router.navigate(["/"]);
     })
     .finally(() => {
      this.errorMessage = "";
     })
    } else {
      this.errorMessage = "Please fill the form correctly.";
    }
  }
}
