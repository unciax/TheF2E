import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowCaseComponent } from './showcase/showcase.component';
import { SignupCheckComponent } from './week0-signup-check/signup-check.component';
import { TodoListComponent } from './week1-todo-list/todo-list.component';
import { FilterComponent } from './week2-filter/filter.component';
import { DashboardComponent } from './week3-dashboard/dashboard.component';

const routes: Routes = [
    { path: '', redirectTo: 'showcase', pathMatch: 'full' },
    { path: 'showcase', component: ShowCaseComponent, data: {title: 'Showcase'} },
    { path: 'signup_check', component:SignupCheckComponent, data: {title: 'Week 0: 檢查報名狀態'} },
    { path: 'todo_list', component:TodoListComponent, data: {title: 'Week 1: 待辦清單'} },
    { path: 'filter', component:FilterComponent, data: {title: 'Week 2: 篩選器'}},
    { path: 'dashboard', component:DashboardComponent, data: {title: 'Week 3: 訂單管理系統'}}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
