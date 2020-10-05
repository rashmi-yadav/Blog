import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./authentication/login/login.component";
import { RegisterComponent } from "./authentication/register/register.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { PostsComponent } from "./posts/posts.component";

const routes: Routes = [
  { path: "", component: LandingPageComponent },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "posts", component: PostsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
