import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import localeZhHant from '@angular/common/locales/zh-Hant'
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ShowCaseComponent } from './showcase/showcase.component';
import { ApiConfigService } from './shared-service/api-config.service';
import { HttpRequestService } from './shared-service/http-request.service';
import { SignupCheckComponent } from './week0-signup-check/signup-check.component';
import { TodoListComponent } from './week1-todo-list/todo-list.component';
import { FilterComponent } from './week2-filter/filter.component';
import { DashboardComponent } from './week3-dashboard/dashboard.component';
import { OverviewComponent } from './week3-dashboard/overview.component';
import { ChartComponent } from './week3-dashboard/chart.component';
import { ValidationComponent } from './week6-validation/validation.component';


registerLocaleData(localeZhHant, 'zh-TW');


@NgModule({
    declarations: [
        AppComponent,
        ShowCaseComponent,
        SignupCheckComponent,
        TodoListComponent,
        FilterComponent,
        DashboardComponent,
        OverviewComponent,
        ChartComponent,
        ValidationComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        ReactiveFormsModule,
        AppRoutingModule,
        ChartsModule
    ],
    providers: [
        ApiConfigService,
        HttpRequestService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
