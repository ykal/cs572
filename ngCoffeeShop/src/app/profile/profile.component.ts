import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  loggedInUser = "";

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.loggedInUser = this.authService.extractLoggedInUserName();
  }

}
