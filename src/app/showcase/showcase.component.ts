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
        },{
            week: 1,
            subject: "待辦清單",
            code: "todo_list"
        },{
            week: 2,
            subject: "篩選器",
            code: "filter"
        },{
            week: 3,
            subject: "訂單管理系統",
            code: "dashboard"
        },{
            week: 6,
            subject: "驗證",
            code: "validation"
        }];
    }

    public open(code: string) {
        this.router.navigate(['/' + code]);
    }
}
