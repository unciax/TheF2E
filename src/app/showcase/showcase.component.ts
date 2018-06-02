import { Component } from '@angular/core';
import { ShowCaseModel } from './showcase-model';

@Component({
  selector: 'showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.css']
})
export class ShowCaseComponent {
    
    public caseModels: ShowCaseModel[] = [];

    ngOnInit() {
        this.caseModels = [{
            week: 0,
            subject: "報名狀態檢查",
            code: "signup_check"
        }];
    }

    public open(code: string) {
        console.log(code);
    }
}
