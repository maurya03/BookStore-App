import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.css']
})
export class ManageUserComponent implements OnInit {

  // users:any[] = [
  //   {sno:1,userName:"Akash"},
  //   { sno:2,userName:"Tejasvita"},
  //   {sno:3, userName:"Shivani"}
  // ]
   
  public Users: any;
  status: boolean = false;
  isAdminLoggedIn = localStorage.getItem('admin');

  constructor(private userService: UserService,private dataService: DataService, private route:Router,private matSnackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.fetchUsers();
  }
  clickEvent(){
    this.status = !this.status;       
}

addCategory(){
  alert("category added")
}
SignOut(){
  localStorage.removeItem('admin');
  
  this.route.navigateByUrl("admin");
}

SignIn(){
  if(localStorage.getItem("admin")=== null){
    this.matSnackBar.open("Please Login First",'ok',{
      duration: 5000
    });
    this.route.navigateByUrl("adminLogin");
  }
}

// manage-user

fetchUsers() {
  this.dataService.getUsers().subscribe(response =>{
    this.Users = response;
  })
}

onButtonClick(user: any){
  this.route.navigate(['/view',user.userId])
}

onButtonClick2(user:any){
  this.route.navigate(['/edit',user.userId])
}

onButtonClick3(){
  this.route.navigate(['/add'])
}

delete(id:number){
  if(window.confirm('Really?')){
    this.userService.deleteUser(id).subscribe(res =>{
      this.fetchUsers()
    })
  }

}
}
