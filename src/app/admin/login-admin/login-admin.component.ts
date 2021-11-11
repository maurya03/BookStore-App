import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder ,NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {
  public loginForm!: FormGroup;

  constructor(private authService:AuthService, 
    private route: Router,
    private formBuilder: FormBuilder,
    private http:HttpClient) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: ['']
    })
  }


  login(){
    this.http.get<any>('http://localhost:52232/admin')
    .subscribe(res =>{
       const user = res.find((a:any)=>{
         return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
       })
       if(user){
         alert('Login Successful');
         this.loginForm.reset();
         localStorage.setItem('admin',JSON.stringify(user));
         this.route.navigate(['admin']);
       }
       else{
         alert('user not found');
       }
    }), (err:any) =>{
      alert("something went wrong");
    }


  }

}
