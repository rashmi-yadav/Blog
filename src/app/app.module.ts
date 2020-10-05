import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AuthenticationModule } from "./authentication/authentication.module";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MaterialModule } from "./material/material.module";
import { SharedModulesModule } from "./shared-modules/shared-modules.module";
import { PostsComponent } from './posts/posts.component';

@NgModule({
  declarations: [AppComponent, LandingPageComponent, PostsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthenticationModule,
    FlexLayoutModule,
    MaterialModule,
    SharedModulesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
