import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-forgot-password",
  templateUrl: "./forgot-password.component.html",
  styleUrls: ["./forgot-password.component.css"],
})
export class ForgotPasswordComponent implements OnInit {
  forgotForm: FormGroup;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.forgotForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
    });
  }
  recover() {
    if (!this.forgotForm.valid) {
      return;
    }
    var result = this.userService.recover(this.forgotForm.get("email").value);
    if (result) {
      alert("Email Sent");
    } else {
      alert("Email Invalid - there is no such email registered");
    }
  }
}
