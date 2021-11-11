import { Component, OnInit } from '@angular/core';
import { BookModule } from '../Model/Book';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  status: boolean = false;
  clickEvent(){
      this.status = !this.status;       
  }

  
  isAdminLoggedIn = localStorage.getItem('admin');

  addbook: BookModule = new BookModule();
  constructor(private dataService: DataService, private route: Router) { }



  ngOnInit(): void {
  }

  addBook(data:any){
    if(window.confirm('Successfully Added!!')){
    this.dataService.addBooks(this.addbook).subscribe((data:{}) =>{
      this.route.navigate(['/admin'])
    })
  }
  }


  SignOut(){
    localStorage.removeItem('admin');
    this.route.navigateByUrl("admin");
  }

  SignIn(){
      this.route.navigateByUrl("adminLogin");
    }
}
