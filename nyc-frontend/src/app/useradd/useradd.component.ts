import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import {User} from '../types/user';
@Component({
  selector: 'app-useradd',
  templateUrl: './useradd.component.html',
  styleUrls: ['./useradd.component.css']
})
export class UseraddComponent implements OnInit {
// user = {
//   username:'',
//   firstname: '',
//   lastname: '',
//   email: ''
// }
user: User;
  constructor(private userService: UserService,private router:Router){
    this.user = new User();
  }

  ngOnInit() {
  }
  add(){
    this.userService.add(this.user).subscribe(respond=>
    { this.router.navigate(['/users'])})
  }

}
