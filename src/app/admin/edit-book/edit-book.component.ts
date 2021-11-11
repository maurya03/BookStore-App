import { Component, OnInit } from '@angular/core';
import { BookModule } from '../Model/Book';

import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  id = this.actRoute.snapshot.params['bookId'];
  status: boolean = false;
  clickEvent(){
      this.status = !this.status;       
  }

  message: string = '';
  editbook: BookModule = new BookModule();

  constructor(private dataService: DataService, private actRoute: ActivatedRoute, private route:Router) { }

  ngOnInit(): void {
  }
editBook(id:any, data:any){
  if(window.confirm('Yes, Please..!')){
    this.dataService.updateBooks(this.id, data).subscribe((res:any) =>{
        this.message = res;
        this.route.navigateByUrl('admin');
    })
  }
}
   
     
  }


