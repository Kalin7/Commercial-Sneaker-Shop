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

  registerClientDiscountRequest(email: string): Observable<any> {
    return this.http.post<any>(`${this.url}/order/discount-request`, {email: email});
  }
}
