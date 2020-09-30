import { Injectable } from "@angular/core";

export interface User {
  id: number;
  name: string;
  userName: string;
  password: string;
  email: string;
  profilePic?: string;
}

@Injectable({
  providedIn: "root",
})
export class UserService {
  users: User[] = [
    {
      id: 1,
      name: "harry",
      userName: "boy-who-lived",
      password: "lilyJames",
      email: "harry@hogwarts.com",
    },
  ];
  registerUser(user: User): boolean {
    this.users.push(user);
    return true;
  }
  getUsers(): User[] {
    return this.users;
  }
  constructor() {}
}
