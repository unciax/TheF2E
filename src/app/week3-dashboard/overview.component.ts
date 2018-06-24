import { Component } from "@angular/core";
import { TransactionWebModel } from "./transaction-web-model";

@Component({
    selector: 'overview',
    templateUrl: './overview.component.html',
    styleUrls: ['./overview.component.css']
})
export class OverviewComponent {

    public sites: TransactionWebModel[] = [];

    ngOnInit() {
        this.sites = [
            {
                siteName: "Facebook",
                siteIconCode: "facebook square",
                siteValue: 45836,
                diffValue: 899
            },
            {
                siteName: "Google",
                siteIconCode: "google",
                siteValue: 23582,
                diffValue: 1234
            },
            {
                siteName: "YouTube",
                siteIconCode: "youtube",
                siteValue: 2489,
                diffValue: -10
            },
            {
                siteName: "Spotify",
                siteIconCode: "spotify",
                siteValue: 1057,
                diffValue: -5
            }
        ]
    }

}