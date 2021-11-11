import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { UserService } from 'src/app/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  userObj: any = {};

  constructor(private userService:UserService,private dataService: DataService, private router: Router, private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }


  addUser(data:any){
    if(window.confirm('Successfully Added!!')){
    this.userService.addUser(this.userObj).subscribe((data:{}) =>{
      this.router.navigate(['/manage-user'])
    })
  }
}

}
