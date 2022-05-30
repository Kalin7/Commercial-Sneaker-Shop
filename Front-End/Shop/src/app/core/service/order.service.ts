import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  url: string = 'http://localhost:3000/user/order';
  constructor(private http: HttpClient) { }

  sendClientOrder(order: any): Observable<any> {
    return this.http.post<any>(this.url, order);
  }

}
