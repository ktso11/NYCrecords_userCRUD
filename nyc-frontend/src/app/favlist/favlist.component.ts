import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-favlist',
  templateUrl: './favlist.component.html',
  styleUrls: ['./favlist.component.css']
})
export class FavlistComponent implements OnInit {

  favs: any = {};

  notice: any = {};
  sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService

  ) { }
  ngOnInit() {
    this.userService.getFavNotices()
    .subscribe(response =>{this.favs = response});
  
}

  }