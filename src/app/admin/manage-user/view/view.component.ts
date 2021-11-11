import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {


  empId: any;
  employees: any;

  constructor(private userService: UserService, private activatedRoute:ActivatedRoute) {
    this.empId = activatedRoute.snapshot.paramMap.get('Id');
  }

  ngOnInit(): void {
    this.userService.getEmployeeById(this.empId).subscribe(response =>{
      this.employees = response;
      console.log(this.employees)
    })
  }

}
