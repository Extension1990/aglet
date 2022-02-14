import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  user: any;
  loggedInUser: any;

  constructor(public router: Router) { }

  ngOnInit(): void {
    // this.loggedInUser = localStorage.getItem("userData");
    // this.user = JSON.parse(this.loggedInUser);
  }

  logout() {
    localStorage.removeItem('userData');
    this.router.navigate(["/login"]);
  }
}
