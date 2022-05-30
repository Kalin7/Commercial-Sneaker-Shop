import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string = 'http://localhost:3000/user/order';
  constructor(
    private http: HttpClient
  ) { }

  registerClientDiscountRequest(email: string): Observable<any> {
    console.log(email)
    return this.http.post<any>(`${this.url}/discount-request`, {email: email});
  }
}
