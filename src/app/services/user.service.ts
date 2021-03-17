import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: string
  constructor() {
    this.user = "Gal"
  }
  getUser() {
    return this.user
  }
  setUser(user: string) {
    return this.user = user;
  }
}
