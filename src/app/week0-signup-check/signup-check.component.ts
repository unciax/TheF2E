import { Component, Inject, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { HttpRequestService } from '../shared-service/http-request.service';
import { ApiConfigService } from '../shared-service/api-config.service';
import { SignUpStatusModel } from './signup-status-model';
import * as moment from 'moment';
import 'moment/locale/zh-tw';


@Component({
  selector: 'signup-check',
   templateUrl: './signup-check.component.html',
   styleUrls: ['./signup-check.component.css']
})
export class SignupCheckComponent {

    constructor(@Inject(HttpRequestService) private httpService: HttpRequestService,
                @Inject(ApiConfigService) private apiConfig: ApiConfigService,
                @Inject(Renderer2) private renderer: Renderer2) { }

    @ViewChild("pLoader") pageLoader: ElementRef;

    @ViewChild("checkBtn") checkButton: ElementRef; 

    public signupCount: number = 0;
    
    public email: string = "";

    public status: SignUpStatusModel;

    public RemainingTime: string;

    ngAfterViewInit() {
        this.getSignupCountFromApi(this);
        this.calcuateRemainingTime();
        setInterval(() => {this.getSignupCountFromApi(this);}, 1000 * 60 * 10);
        if (this.isGameStart()) {
            this.RemainingTime = "已經開賽囉~~~";
        } else {
            setInterval(() => {this.RemainingTime = this.calcuateRemainingTime();}, 1000);
        }
    }

    public checkStatusFromApi() {

        this.status = null;

        if (this.email != null && this.email.length != 0) {

            this.renderer.addClass(this.checkButton.nativeElement, "loading");

            var data = { email: this.email };

            this.httpService.httpPost(this.apiConfig.checkSignUpStatus, data).subscribe(
                result => {
                    this.status = result;
                },
                error => {
                    console.log(error);
                },
                () => {
                    this.renderer.removeClass(this.checkButton.nativeElement, "loading");
                }
            )
        }
    }

    public getSignupCountFromApi(ref: any) {
        ref.showDimmer();
        ref.httpService.httpGet(ref.apiConfig.signUpCount).subscribe(
            result => {
                ref.signupCount = result.total;
            },
            error => {
                console.log(error);
            },
            () => {
                ref.hideDimmer();
            }
        )
    }

    private showDimmer() {
        this.renderer.addClass(this.pageLoader.nativeElement, "active");
    }

    private hideDimmer() { 
        this.renderer.removeClass(this.pageLoader.nativeElement, "active");
    }

    private isGameStart() {
        let now = moment();
        let gameStartDate = moment('2018-06-04 12:00:00');
        if (now > gameStartDate) {
            return true;
        }
        return false;
    }

    private calcuateRemainingTime() {
        let now = moment();
        let gameStartDate = moment('2018-06-04 12:00:00');
        let diff = moment.duration(gameStartDate.diff(now));
        let outputString = "距離開賽還有";
        if (diff.days() > 0) {
            outputString += (" " + diff.days() + " 天"); 
        }
        if (diff.hours() > 0) {
            outputString += (" " + diff.hours() + " 小時"); 
        }
        if (diff.minutes() > 0) {
            outputString += (" " + diff.minutes() + " 分"); 
        }
        if (diff.seconds() > 0) {
            outputString += (" " + diff.seconds() + " 秒"); 
        }
        return outputString;
    }

}
