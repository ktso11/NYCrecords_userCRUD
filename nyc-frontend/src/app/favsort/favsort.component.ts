import { UserService } from './../user.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Pipe, PipeTransform } from '@angular/core';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-favsort',
  templateUrl: './favsort.component.html',
  styleUrls: ['./favsort.component.css']
})
@Pipe({ name: 'findUsers' })
export class FavsortComponent implements OnInit {
  sub: Subscription;
  noticeid: any;
  favs: any;
  notices;
  jsonhidden= false;
  searchText: string;
  abc: any;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService

  ) { }

  

  ngOnInit() {
    // this.sub = this.route.params.subscribe(params => {
    //   const noticeid = params['noticeid'];
    //   this.userService.sortNotice(noticeid)
    //   .subscribe(response =>{this.notices = response
    //     console.log(`"this arr should have id: '${noticeid}'`)
    //   })
     // console.log("getFavNotice");
      this.userService.getFavNotices()
      .subscribe(response =>{this.favs = response});
    // });

  }

  findUsers(){
    //console.log("calling finduser"+this.favs[0].noticeid);
    this.favs = this.favs.filter(abc => {
      abc.noticeid.includes(this.searchText);
      console.log("favorited by: " +abc.favby);
      console.log("search text " +this.searchText);
      
    });
  }
  // getItems() {
  //   return this.favs.fliter((fav) => fav.noticeid === this.noticeid);
  // }
  

}
