import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public alertClassname = 'alert-success';
  public hasError = false;
  public cities = ['Delhi', 'Mumbai', 'Goa', 'Pune']
  public alertClassName = 'alert-success'
  public userModel = new User();
  public message = '';
  constructor(private authService: AuthService, private route: Router) {
    console.log('Before: ', this.userModel)
   }

  ngOnInit(): void {
  }

  onSubmit(){
    this.authService.register(this.userModel).subscribe((response)=>{
      this.message = "Registraion Succesfull";
      this.alertClassname = 'alert-success'
      this.route.navigateByUrl("login");
    }, (error)=>{
      this.alertClassname = 'alert-danger'
      this.message = 'Registration failed'
    })
  }

}
