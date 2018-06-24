import { Component } from "@angular/core";

declare var ts: any;

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent {

    ngAfterViewInit() {
        ts('.ts.dropdown:not(.basic)').dropdown();
    }

}