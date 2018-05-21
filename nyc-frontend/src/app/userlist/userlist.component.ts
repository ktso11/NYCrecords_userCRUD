import { Component, OnInit } from '@angular/core';

import { UserService } from '../user.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  users: Array<any>;
  constructor(
    private userService: UserService

  ) { }



  ngOnInit() {
    this.userService.getAllUsers()
    .subscribe(response =>{this.users = response.json()})
  }


}
