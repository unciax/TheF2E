import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import localeZhHant from '@angular/common/locales/zh-Hant'

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ShowCaseComponent } from './showcase/showcase.component';
import { ApiConfigService } from './shared-service/api-config.service';
import { HttpRequestService } from './shared-service/http-request.service';
import { SignupCheckComponent } from './week0-signup-check/signup-check.component';
import { TodoListComponent } from './week1-todo-list/todo-list.component';


registerLocaleData(localeZhHant, 'zh-TW');


@NgModule({
    declarations: [
        AppComponent,
        ShowCaseComponent,
        SignupCheckComponent,
        TodoListComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        ReactiveFormsModule,
        AppRoutingModule
    ],
    providers: [
        ApiConfigService,
        HttpRequestService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
