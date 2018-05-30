import { UserService } from './user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UserlistComponent } from './userlist/userlist.component';
import { FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { UseraddComponent } from './useradd/useradd.component';
import { UsereditComponent } from './useredit/useredit.component';
import { NoticelistComponent } from './noticelist/noticelist.component';
import { NoticeComponent } from './notice/notice.component';
import { FavComponent } from './fav/fav.component';
import { FavlistComponent } from './favlist/favlist.component';

const appRoutes: Routes = [

  {
    path: 'users/:id',
    component: UsereditComponent
  },
  {
    path: 'users',
    component: UserlistComponent
  },
  {
    path: 'adduser',
    component: UseraddComponent
  },
  {
    path: 'noticelist',
    component: NoticelistComponent
  },
  {
    path: 'noticelist/:id',
    component: NoticeComponent
  }
  ,{
    path: 'favlist',
    component: FavlistComponent
  }
  ,{
    path: 'notice/:id',
    component: NoticeComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    UserlistComponent,
    UseraddComponent,
    UsereditComponent,
    NoticelistComponent,
    NoticeComponent,
    FavComponent,
    FavlistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
