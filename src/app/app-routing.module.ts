import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RegisterComponent } from "./authentication/register/register.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";

const routes: Routes = [{ path: "", component: LandingPageComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
