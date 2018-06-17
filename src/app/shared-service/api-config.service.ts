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



    public get cbikeStationStatus() {
        return "https://data.kcg.gov.tw/dataset/public-bike-rental/resource/1440e8fb-a87c-4eef-bdc7-9f5bc6a0481a/proxy";
    }

}