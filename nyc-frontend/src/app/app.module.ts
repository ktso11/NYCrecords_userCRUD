import { UserService } from './user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UserlistComponent } from './userlist/userlist.component';
import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { UseraddComponent } from './useradd/useradd.component';
import { UsereditComponent } from './useredit/useredit.component';

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
    UsereditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
