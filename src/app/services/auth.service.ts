import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

private ENDPOINTS = {
  REGISTER_URL : 'http://localhost:52232/register',
  LOGIN_URL: 'http://localhost:52232/login'
}

  constructor(private http: HttpClient) { }

  register(data:any):Observable<any>{
    return this.http.post<any>(this.ENDPOINTS.REGISTER_URL,data)
  }

  login(data:any):Observable<any>{
    return this.http.post<any>(this.ENDPOINTS.LOGIN_URL, data)
  }

  //This is for Admin
  logout(){
    localStorage.clear();
  }

  loggedIn():boolean{
    if(localStorage.getItem('admin')){
      return true;
    }else{
      return false;
    }
  }

//This is for the user...
// form the video

 


}
