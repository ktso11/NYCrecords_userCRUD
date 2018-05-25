import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import {User} from '../types/user';


@Component({
  selector: 'app-noticelist',
  templateUrl: './noticelist.component.html',
  styleUrls: ['./noticelist.component.css']
})
export class NoticelistComponent implements OnInit {
 notices: any = {};
  constructor(
    private userService: UserService

  ) { }
  ngOnInit() {
    this.userService.getNotices()
    .subscribe(response =>{this.notices = response})
    
  }

}
