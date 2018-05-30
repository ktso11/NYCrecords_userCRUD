import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from './types/user';
import {environment} from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  getAllUsers() {
    return this.httpClient.get<User[]>('/api/users');
    // return this.httpClient.get<User[]>(`${environment.apiHost}/api/users`);
  }

  get(id: string) {
    return this.httpClient.get<User>(`/api/users/${id}`);
  }

  add(user: User){
    return this.httpClient.post<User>(
      '/api/users', user
    );
  }
  remove(id: string){
    return this.httpClient.delete(`/api/users/${id}`);
  }

  save(updateduser) {
    return this.httpClient.patch(`/api/users/` + updateduser.id,
    updateduser
    );
  }

  getNotices(){
    return this.httpClient.get('https://data.cityofnewyork.us/resource/buex-bi6w.json?TypeOfNoticeDescription=Solicitation&$limit=10');
  }
  getOneNotice(id: string) {
    return this.httpClient.get(`/api/notices/${id}`);
  }

  addNotices(fav){
    return this.httpClient.post('/api/notices',fav);
  }
}
