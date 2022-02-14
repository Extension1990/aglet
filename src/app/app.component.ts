import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  user: any;
  loggedInUser: any;

  constructor(public router: Router) { }

  ngOnInit(): void {
    this.loggedInUser = localStorage.getItem("userData");
    this.user = JSON.parse(this.loggedInUser);
  }

  logout() {
    localStorage.removeItem('userData');
    this.router.navigate(["/login"]);
  }
}
