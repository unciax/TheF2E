import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ShowCaseComponent } from './showcase/showcase.component';
import { ApiConfigService } from './shared-service/api-config.service';
import { HttpRequestService } from './shared-service/http-request.service';
import { SignupCheckComponent } from './week0-signup-check/signup-check.component';



@NgModule({
  declarations: [
    AppComponent,
    ShowCaseComponent,
    SignupCheckComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    ApiConfigService,
    HttpRequestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
