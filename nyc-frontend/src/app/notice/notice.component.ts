import { UserService } from './../user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css']
})
export class NoticeComponent implements OnInit {
  @Input('note') 
  note;
  @Input('user_id')
  user_id;
  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit() {
  }

  addNotices(){
    console.log();
    this.userService.addNotices({
      noticeid:this.note.request_id,
      favby:this.user_id
    }).subscribe(respond=>
    { this.router.navigate(['/users'])})
  }



}
