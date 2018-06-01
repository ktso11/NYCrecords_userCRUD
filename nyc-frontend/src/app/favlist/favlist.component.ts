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

  favs: any;
  notice: any;
  sub: Subscription;
  searchText: string;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService

  ) { }
  ngOnInit() {
    this.getNotices();
  
}

getNotices(){
  this.userService.getFavNotices()
    .subscribe(response =>{
      this.favs = response;
    });
}

findUsers(){
  if(this.searchText){
    
  this.favs = this.favs.filter(abc => {
    abc.noticeid.includes(this.searchText);
  });
  }
  else
    this.getNotices();

}

  }