import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: Http) { }

  getAllUsers() {
    return this.http.get('/api/users');
  }

  get(id: string) {
    return this.http.get('/api/users/' + id);
  }

  add(user){
    return this.http.post('/api/users',{
      "username": user.username,
      "firstname": user.firstname,
      "lastname": user.lastname,
      "email": user.email
    });
  }

  remove(id: string){
    return this.http.delete('/api/users/'+ id);
  }

  save(user) {
    return this.http.patch('/api/users/' + user.id,{
      "firstname": user.firstname,
      "lastname": user.lastname,
      "email": user.email
    });
  }

}
