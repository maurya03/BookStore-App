import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css']
})
export class ViewCategoryComponent implements OnInit {

  empId: any;

  employees: any;
  constructor(private adminService:AdminService, private activatedRoute:ActivatedRoute) { 
    this.empId = activatedRoute.snapshot.paramMap.get('Id');
  }

  ngOnInit(): void {
    this.adminService.getEmployeeById(this.empId).subscribe(response =>{
      this.employees = response;
      console.log(this.employees)
    })
  }

}
