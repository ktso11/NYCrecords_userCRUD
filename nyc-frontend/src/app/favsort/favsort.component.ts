import { UserService } from './../user.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favsort',
  templateUrl: './favsort.component.html',
  styleUrls: ['./favsort.component.css']
})
export class FavsortComponent implements OnInit {
  sub: Subscription;
  notices
  jsonhidden= false;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService

  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['noticeid'];
      this.userService.sortNotice(id)
      .subscribe(response =>{this.notices = response
        console.log(this.notices)
      })
    });

  }

}
