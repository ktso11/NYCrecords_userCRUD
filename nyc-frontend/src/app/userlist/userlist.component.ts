import { Component, OnInit } from '@angular/core';
import {User} from '../types/user';

import { UserService } from '../user.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  // users: Array<any>;
  users: User[];
  constructor(
    private userService: UserService

  ) { }



  ngOnInit() {
    this.userService.getAllUsers()
    .subscribe(response =>{this.users = response});

  }


}
