import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-category-new',
  templateUrl: './edit-category-new.component.html',
  styleUrls: ['./edit-category-new.component.css']
})
export class EditCategoryNewComponent implements OnInit {

  id = this.actRoute.snapshot.params['Id'];
  userObj: any = {};

  constructor( 
    private adminService:AdminService,
    private actRoute: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {

    this.adminService.getEmployeeById(this.id).subscribe((res: {}) => {
      this.userObj = res;
    })
  }

  updateUser(id:number, data:any) {
    if(window.confirm('Yes, please...')){
      this.adminService.updateUser(this.id, data).subscribe(res => {
        this.router.navigate(['/admin'])
      })
    }
  }

}
