import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id = this.actRoute.snapshot.params['Id'];
  userObj: any = {};

  constructor(private userService:UserService,private dataService:DataService, private router:Router, private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.userService.getEmployeeById(this.id).subscribe((res: {}) => {
      this.userObj = res;
    })
  }

  updateUser(id:number, data:any) {
    if(window.confirm('Yes, please...')){
      this.userService.updateUser(this.id, data).subscribe(res => {
        this.router.navigate(['/manage-user'])
      })
    }
  }

}
