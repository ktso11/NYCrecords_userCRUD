import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from './types/user';
// import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private httpClient: HttpClient,
    // private http: Http
  ) { }

  getAllUsers() {
    return this.httpClient.get<User[]>('/api/users');
    // return this.http.get('/api/users');
  }

  get(id: string) {
    // return this.http.get('/api/users/' + id);
    return this.httpClient.get<User>(`/api/users/${id}`);
  }

  add(user: User){
    return this.httpClient.post<User>(
      '/api/users', user
    // return this.http.post('/api/users',{
      // "username": user.username,
      // "firstname": user.firstname,
      // "lastname": user.lastname,
      // "email": user.email
    // }
    );
  }

  remove(id: string){
    // return this.http.delete('/api/users/'+ id);
    return this.httpClient.delete(`/api/users/${id}`);
  }

  save(updateduser) {
    return this.httpClient.patch(`/api/users/` + updateduser.id,
    updateduser
    );
    // return this.http.patch('/api/users/' + user.id,{
    //   "firstname": user.firstname,
    //   "lastname": user.lastname,
    //   "email": user.email
    // });
    }
}
