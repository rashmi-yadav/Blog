import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { UserService, User } from "src/app/services/user.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  hide = true;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {}
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: [null, [Validators.required]],
      uname: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
      cpassword: [null, [Validators.required]],
    });
  }
  register() {
    if (!this.registerForm.valid) {
      return;
    }
    console.log(this.registerForm.value);
    var users: User = {
      id: 2,
      name: this.registerForm.get("name").value,
      userName: this.registerForm.get("uname").value,
      password: this.registerForm.get("password").value,
      email: this.registerForm.get("email").value,
    };
    var result = this.userService.registerUser(users);
  }

  getUsers() {
    console.log(this.userService.getUsers());
  }
}
