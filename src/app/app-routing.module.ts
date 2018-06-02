import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowCaseComponent } from './showcase/showcase.component';

const routes: Routes = [
    { path: '', redirectTo: 'showcase', pathMatch: 'full' },
    { path: 'showcase', component: ShowCaseComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
