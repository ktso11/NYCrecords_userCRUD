import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-useredit',
  templateUrl: './useredit.component.html',
  styleUrls: ['./useredit.component.css']
})
export class UsereditComponent implements OnInit {
  user: any = {};
  sub: Subscription;
  noticehidden= false;
  id: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      this.userService.get(id)
      .subscribe(response =>{this.user = response})
      // console.log(`Grabbed user ID: '${id}'`);

    });
  }
displaynotice(){
  this.noticehidden = !this.noticehidden;
}

  remove(){
    this.userService.remove(this.user.id).subscribe(respond=>
      { this.router.navigate(['/users'])})
  }

  save(){
    this.userService.save(this.user).subscribe(respond=>
      { this.router.navigate(['/users'])})
  }

}
