import { Injectable } from "@angular/core";

@Injectable()
export class ApiConfigService {

    readonly apiBaseUrl = "https://www.thef2e.com/api/";

    public get signUpCount() {
        return this.apiBaseUrl + "signUpTotal";
    }

    public get checkSignUpStatus() {
        return this.apiBaseUrl + "isSignUp";
    }

}