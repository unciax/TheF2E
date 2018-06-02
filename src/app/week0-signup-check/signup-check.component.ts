import { Component, Inject, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { HttpRequestService } from '../shared-service/http-request.service';
import { ApiConfigService } from '../shared-service/api-config.service';
import { SignUpStatusModel } from './signup-status-model';

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

    public signupCount: number = 0;
    
    public email: string = "";

    public status: SignUpStatusModel;

    ngOnInit() {
        this.getSignupCountFromApi();
    }

    public checkStatusFromApi() {

        if (this.email != null && this.email.length != 0) {

            this.showDimmer();

            var data = { email: this.email };

            this.httpService.httpPost(this.apiConfig.checkSignUpStatus, data).subscribe(
                result => {
                    this.status = result;
                },
                error => {
                    console.log(error);
                },
                () => {
                    this.hideDimmer();
                }
            )
        }
    }

    public getSignupCountFromApi() {
        this.showDimmer();
        this.httpService.httpGet(this.apiConfig.signUpCount).subscribe(
            result => {
                this.signupCount = result.total;
            },
            error => {
                console.log(error);
            },
            () => {
                this.hideDimmer();
            }
        )
    }

    private showDimmer() {
        this.renderer.addClass(this.pageLoader.nativeElement, "active");
    }

    private hideDimmer() { 
        this.renderer.removeClass(this.pageLoader.nativeElement, "active");
     }

}
