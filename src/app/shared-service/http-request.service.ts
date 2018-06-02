import { Injectable, Inject } from "@angular/core";
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

@Injectable()
export class HttpRequestService {

    constructor(@Inject(Http)private http: Http) { }

    public httpGet(url: string): Observable<any> {
        return this.http.get(url, this.getRequestOptions())
                        .map(this.toJson)
                        .catch(this.handleError);
    }

    public httpPost(url: string, data: any) {
        return this.http.post(url, JSON.stringify(data), this.getRequestOptions())
                        .map(this.toJson)
                        .catch(this.handleError);       
    }

    private getRequestOptions(): RequestOptions {
        let header = new Headers({ 'Content-Type': 'application/json' }); 
        let options = new RequestOptions({headers: header});

        return options;
    }

    private toJson(response: Response) {
        return response.json();
    }

    private handleError(response: any) {
        return Observable.throw(response.json() || "Something went worng");
    }
}