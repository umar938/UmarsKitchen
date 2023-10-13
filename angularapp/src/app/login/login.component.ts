import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  public gotoUserHome() {
    alert("Going to user homepage");
    this.router.navigate(['/userhome']);
  }

  public gotoHome()
  {
    alert("Going to homepage");
    this.router.navigate(['']);
  }

  ngOnInit(): void {
  }

}
