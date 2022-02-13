import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  user: any;

  constructor(private service: ServiceService, public router: Router) { }

  ngOnInit(): void {
  }

  login(email: string, password: string) {
    
    // const serverData: any = "";

    this.service
      .login(email, password)
      .subscribe(
        (data: any) => {
          localStorage.setItem("userData", JSON.stringify(data[0]));
          console.log(data[0]);
          if (data.length === 1) {
            this.router.navigate(["/fav-movies"]);
          }
        },
        err => {
          this.router.navigate(["/login"]);
        }
      );
  }

}
