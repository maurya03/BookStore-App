import { Injectable } from '@angular/core';
import { Router,ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

constructor(private authService: AuthService, private router:Router){}

//this is for Admin
canActivate(): boolean{
  if(this.authService.loggedIn()){
    return true;
  }else{
    this.router.navigateByUrl("adminLogin")
    return false;
  }
}

// This is for user...
  
}
