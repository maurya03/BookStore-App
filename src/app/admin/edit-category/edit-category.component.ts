import { Component, OnInit } from '@angular/core';
import { CategoryModule } from '../Model/Category';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {

  status: boolean = false;
  clickEvent(){
      this.status = !this.status;       
  }
  addcategory: CategoryModule = new CategoryModule();
  isAdminLoggedIn = localStorage.getItem('admin');
  constructor(private route: Router, private matSnackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
  editCategory(){
    alert("category edited")
  }

  SignOut(){
    
    localStorage.removeItem('admin');
    this.route.navigateByUrl("admin");
  }

  SignIn(){
     
      this.route.navigateByUrl("adminLogin");
    }
  

}
