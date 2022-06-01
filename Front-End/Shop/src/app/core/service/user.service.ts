import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string = 'http://localhost:3000/user';
  constructor(
    private http: HttpClient
  ) { }

  registerNewUser(user: IUser): Observable<string> {
    return this.http.post<string>(`${this.url}/register`, user);
  }
  
   userLogin(login: ILogingIn): Observable<string> {
    console.log(login)
    return this.http.post<string>(`${this.url}/login`, login);
  }

  registerClientDiscountRequest(email: string): Observable<any> {
    return this.http.post<any>(`${this.url}/order/discount-request`, {email: email});
  }
  
   getClientById(id: string): Observable<any> {
    return this.http.get<any>(`${this.url}/${id}`);
  }
}
