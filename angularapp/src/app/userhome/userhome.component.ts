import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit
{

  constructor(private router: Router) { }

  ngOnInit(): void { }

  public gotoLogout()
  {
    alert("Logging out");
    this.router.navigate(['']);
  }

  public addToCart() {
    alert("Adding to cart");
    // this.router.navigate(['']);
  }

}
