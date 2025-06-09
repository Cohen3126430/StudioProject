import { Injectable } from '@angular/core';
import { userList } from './users'

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  getUsers() {
    return userList;
  }

  constructor() { }
}
