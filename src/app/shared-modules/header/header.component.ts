import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated: boolean;
  private authListenerSubs: Subscription;
  constructor(private userService: UserService) {}

  logout() {
    this.userService.logout();
  }
  ngOnInit() {
    this.isAuthenticated = this.userService.getIsAuthenticated();
    console.log(this.isAuthenticated);
    this.authListenerSubs = this.userService
      .getAuthStatusListner()
      .subscribe((isAuthenticated) => {
        this.isAuthenticated = isAuthenticated;
        console.log(this.isAuthenticated);
      });
  }
  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();
  }
}
