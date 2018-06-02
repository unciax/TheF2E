import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ShowCaseComponent } from './showcase/showcase.component';
import { ApiConfigService } from './shared-service/api-config.service';
import { HttpRequestService } from './shared-service/http-request.service';



@NgModule({
  declarations: [
    AppComponent,
    ShowCaseComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    ApiConfigService,
    HttpRequestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
