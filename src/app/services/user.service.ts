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
  userAuthentication(username: string, password: string): boolean {
    var index = this.users.findIndex((u) => u.userName === username);
    console.log("index", index);
    if (index >= 0) {
      if (this.users[index].password === password) return true;
      else return false;
    }
    return false;
  }
  recover(email: string) {
    var index = this.users.findIndex((u) => u.email === email);
    return index >= 0 ? true : false;
  }
  constructor() {}
}
