import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  ROOT_URL:String="http://localhost:9002/users";
  constructor(private http: HttpClient){
    // private apiServeUrl=environment.apiBaseUrl;
}
public addUser(user:User):Observable<User>{
  return this.http.post<User>(`${this.ROOT_URL}/`,user);
}
}
