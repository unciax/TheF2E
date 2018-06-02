import { Component, Inject } from '@angular/core';
import { ShowCaseModel } from './showcase-model';
import { Router } from '@angular/router';

@Component({
  selector: 'showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.css']
})
export class ShowCaseComponent {

    constructor(@Inject(Router) private router: Router) { }
    
    public caseModels: ShowCaseModel[] = [];

    ngOnInit() {
        this.caseModels = [{
            week: 0,
            subject: "報名狀態檢查",
            code: "signup_check"
        }];
    }

    public open(code: string) {
        this.router.navigate(['/' + code]);
    }
}
