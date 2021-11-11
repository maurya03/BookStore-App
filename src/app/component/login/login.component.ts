import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder ,NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
 

 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   
   public message = '';
   
    public loginForm!: FormGroup;
    

  constructor(private authService:AuthService, 
    private route: Router,
    private formBuilder: FormBuilder,
    private http:HttpClient) {}

  
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: ['']
    })
  }
   
  onLogin(loginForm: NgForm){
    console.log(loginForm.value);
  }


  //new
  login(){
    this.http.get<any>('http://localhost:52232/api/user')
    .subscribe(res =>{
       const user = res.find((a:any)=>{
         return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
       })
       if(user){
         alert('Login Successful');
         this.loginForm.reset();
         localStorage.setItem('user',JSON.stringify(user.email));
         this.route.navigate(['books']);
       }
       else{
         alert('user not found');
       }
    }), (err:any) =>{
      alert("something went wrong");
    }
  }
}
