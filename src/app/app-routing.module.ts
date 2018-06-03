import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowCaseComponent } from './showcase/showcase.component';
import { SignupCheckComponent } from './week0-signup-check/signup-check.component';

const routes: Routes = [
    { path: '', redirectTo: 'showcase', pathMatch: 'full' },
    { path: 'showcase', component: ShowCaseComponent, data: {title: 'Showcase'} },
    { path: 'signup_check', component:SignupCheckComponent, data: {title: 'Week 0: 檢查報名狀態'} }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
