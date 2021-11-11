import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-show-books',
  templateUrl: './show-books.component.html',
  styleUrls: ['./show-books.component.css']
})
export class ShowBooksComponent implements OnInit {
  status: boolean = false;
  clickEvent(){
      this.status = !this.status;       
  }

  isAdminLoggedIn: boolean = true;
  constructor(private router: Router, private matSnackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
onClick(){
  this.router.navigate(['edit-book'])
}

SignOut(){
  localStorage.clear();
  this.isAdminLoggedIn = false;
  this.router.navigateByUrl("admin");
}

SignIn(){
  if(localStorage.getItem("token")=== null){
    this.matSnackBar.open("Please Login First",'ok',{
      duration: 5000
    });
    this.router.navigateByUrl("login");
  }
}

}
