import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UserlistComponent } from './userlist/userlist.component';
import { FormsModule} from '@angular/forms';
import { UseraddComponent } from './useradd/useradd.component';
import { UsereditComponent } from './useredit/useredit.component'
@NgModule({
  declarations: [
    AppComponent,
    UserlistComponent,
    UseraddComponent,
    UsereditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
