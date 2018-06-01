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
    // return this.httpClient.get<User[]>('/api/users');
    return this.httpClient.get<User[]>(`${environment.apiHost}/api/users`);
  }

  get(id: string) {
    // return this.httpClient.get<User>(`/api/users/${id}`);
    return this.httpClient.get<User>(`${environment.apiHost}/api/users/${id}`);
  }

  add(user: User){
    // return this.httpClient.post<User>('/api/users', user
    return this.httpClient.post<User>(`${environment.apiHost}/api/users/`, user);
  }
  remove(id: string){
    // return this.httpClient.delete(`/api/users/${id}`);
    return this.httpClient.delete(`${environment.apiHost}/api/users/${id}`);
  }

  save(updateduser) {
    // return this.httpClient.patch(`/api/users/` + updateduser.id,
    return this.httpClient.patch(`${environment.apiHost}/api/users/` + updateduser.id,
    updateduser
    );
  }

  getAPI(){
    return this.httpClient.get('https://data.cityofnewyork.us/resource/buex-bi6w.json?TypeOfNoticeDescription=Solicitation&$limit=10');
  }
  getOneAPI(id: string) {
    return this.httpClient.get(`https://data.cityofnewyork.us/resource/buex-bi6w.json?request_id=${id}`);
  }

  getOneNotice(id: string) {
    // return this.httpClient.get(`/api/notices/${id}`);
    return this.httpClient.get(`${environment.apiHost}/api/notices/${id}`);
  }

  addNotices(fav){
    return this.httpClient.post(`${environment.apiHost}/api/notices`,fav);
    // return this.httpClient.post('/api/notices',fav);
  }

  getFavNotices(){
    // return this.httpClient.get(`/api/notices/`)
    return this.httpClient.get(`${environment.apiHost}/api/notices/`)
  }


}
