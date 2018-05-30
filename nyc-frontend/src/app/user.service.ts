import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from './types/user';
import {environment} from './../environments/environment';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private httpClient: HttpClient,
    private http: Http
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

  getAPI(){
    return this.httpClient.get('https://data.cityofnewyork.us/resource/buex-bi6w.json?TypeOfNoticeDescription=Solicitation&$limit=10');
  }
  // getOneAPI(id: string) {
  //   return this.httpClient.get(`https://data.cityofnewyork.us/resource/buex-bi6w.json?request_id=${id}`);
  // }
  getOneAPI(id: string) {
    return this.http.get('https://data.cityofnewyork.us/resource/buex-bi6w.json?request_id='+ id);
  }

  getOneNotice(id: string) {
    return this.httpClient.get(`/api/notices/${id}`);
  }

  addNotices(fav){
    return this.httpClient.post('/api/notices',fav);
  }

  getFavNotices(){
    return this.httpClient.get(`/api/notices/`)
  }
  sortNotice(noticeid: string) {
    return this.httpClient.get(`/api/notices/?noticeid=${noticeid}`);
  }

  //create a method to get one single API
}
