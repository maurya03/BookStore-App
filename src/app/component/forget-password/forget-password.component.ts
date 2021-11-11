import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  public isLoading = false;
  public error = null;
  message = null;

  constructor() { }

  ngOnInit(): void {
  }

}
