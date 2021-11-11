import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  status: boolean = false;
  clickEvent(){
      this.status = !this.status;       
  }

  isAdminLoggedIn = localStorage.getItem('admin');

  constructor(private route: Router, private matSnackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  SignOut(){
    localStorage.removeItem('admin');
    this.route.navigateByUrl("admin");
  }

  SignIn(){
      this.route.navigateByUrl("adminLogin");
    }
  

}
