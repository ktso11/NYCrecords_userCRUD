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
  }
];
@NgModule({
  declarations: [
    AppComponent,
    UserlistComponent,
    UseraddComponent,
    UsereditComponent,
    NoticelistComponent
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
