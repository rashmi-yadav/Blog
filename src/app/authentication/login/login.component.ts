import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  hide = true;
  error = false;
  forgot = false;
  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      uname: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }
  onLogin() {
    if (!this.loginForm.valid) {
      return;
    }
    var uname = this.loginForm.get("uname").value;
    var password = this.loginForm.get("password").value;
    var result = this.userService.userAuthentication(uname, password);
    console.log("Inside Login.component.ts" + result);
    if (!result) {
      this.error = true;
    }
  }
}
