import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import {User} from '../types/user';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-noticelist',
  templateUrl: './noticelist.component.html',
  styleUrls: ['./noticelist.component.css']
})
export class NoticelistComponent implements OnInit {
  sub: Subscription;
  id: any;
  user: any = {};
  
  notices: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.getAPI()
    .subscribe(response =>{this.notices = response; 
      console.log(this.notices)});
   
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      this.userService.get(id)
      .subscribe(response =>{this.user = response})
      console.log(`Grabbed user ID: '${id}'`);

    })
  }
  // addNotices(data){
  //   console.log(data);
  //   this.userService.addNotices(data).subscribe(respond=>
  //   { this.router.navigate(['/users'])})
  // }


}
