import { UserService } from './../user.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-favsort',
  templateUrl: './favsort.component.html',
  styleUrls: ['./favsort.component.css']
})
export class FavsortComponent implements OnInit {
  sub: Subscription;
  noticeid: any;
  favs: any ={};
  notices;
  jsonhidden= false;
  // @Input('notice_id')
  // notice_id;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService

  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const noticeid = params['noticeid'];
      this.userService.sortNotice(noticeid)
      .subscribe(response =>{this.notices = response
        console.log(`"this arr should have id: '${noticeid}'`)
      })

      this.userService.getFavNotices()
      .subscribe(response =>{this.favs = response});
    });

  }
  // getItems() {
  //   return this.favs.fliter((fav) => fav.noticeid === this.noticeid);
  // }
  

}
