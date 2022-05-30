import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url: string = 'http://localhost:3000/records';
  products: IProduct[] = [];
  constructor(private http: HttpClient) { }

  getProductsByRegisration() : Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.url);
  }

  getProductById(id: string) : Observable<IProduct> {
    return this.http.get<IProduct>(`${this.url}/${id}/details`)
  }
}
