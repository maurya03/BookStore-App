import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(
               private route: Router,
               private matSnackBar: MatSnackBar
  ) { }

  @Output() toggleEvent = new EventEmitter<boolean>();

  opened = false;

  name: any;
  id: any;
  isUser = false;
  isSeller = false;
  isAdmin = false;
  // role: string;
  length: any;
  // bookName: string;
  // totalItem;
  isbudget = false;
  isLogin = false;
@Input() output: any;
 @Input() function: any;

//  wishlistLength: number;

 ontoggel(input: any) {
  console.log('input' + input);
  this.toggleEvent.emit(input);
  this.opened = !this.opened;
}
  ngOnInit(): void {
  }

  // this.name = localStorage.getItem('Name');
  // this.role = localStorage.getItem('role');
  // console.log('role check toolbar', this.role);

}
