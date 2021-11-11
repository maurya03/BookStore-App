import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

bookId:any;
public categories: any;
employees : any[] = [];

  constructor(private dataServices: DataService, private activatedRoute: ActivatedRoute, private router: Router, private adminService:AdminService) {
    this.bookId = activatedRoute.snapshot.paramMap.get('Id');
   }

  ngOnInit(): void {
    
    this.fetchUsers();
  }

  fetchUsers() {
    this.dataServices.getCategories().subscribe(data =>{
      this.categories = data;
    })
  }
  
  onButtonClick(category: any){
    this.router.navigate(['/viewCategory',category.catId])
  }
  
  onButtonClick2(category:any){
    this.router.navigate(['/editCategory',category.catId])
  }
  
  onButtonClick3(){
    this.router.navigate(['/addCategory'])
  }
  
  delete(id:number){
    if(window.confirm('Really?')){
      this.adminService.deleteUser(id).subscribe(res =>{
        this.fetchUsers()
      })
    }

}
}
