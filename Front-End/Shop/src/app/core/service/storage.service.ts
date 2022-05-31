import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  setStorage(token: string) {
    return sessionStorage.setItem('token', token);
  }

  getStorage() {
    return sessionStorage.getItem('token');
  }

  getUserData() {
    const token = this.getStorage();
    const payload = token!.split('.')[1];
    const userId =  JSON.parse(atob(payload)).id;
    return userId;
  }
}
