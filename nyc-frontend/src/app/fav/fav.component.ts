import { Subscription } from 'rxjs';
import { UserService } from './../user.service';
import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.css']
})

export class FavComponent implements OnInit {
  @Input('notice_id')
  notice_id;
  // fav: any = {};
  fav;
  notice: any={};
  sub: Subscription;
  jsonhidden= false;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService

  ) { }
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      // const id = params['id'];
      const id = this.notice_id
      this.userService.getOneAPI(id)
      .subscribe(response =>{this.fav = response.json()[0]
        console.log(this.fav)
      })
    });

}

viewjson(){
  this.jsonhidden = !this.jsonhidden;
}
    // callapi(){
    //   // const id = document.querySelector('.grabme').id
    //   const id = this.notice_id
    //   this.sub = this.route.params.subscribe(params => {
    //   this.userService.getOneAPI(id)
    //   .subscribe(response =>{this.notice = response})
    //     console.log(`Grabbed user ID: '${id}'`);
    // })
    // } 
}