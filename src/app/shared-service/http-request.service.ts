import { Injectable, Inject } from "@angular/core";
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/throw';

@Injectable()
export class HttpRequestService {

    constructor(@Inject(Http)private http: Http) { }

    public httpGetJson(url: string): Observable<any> {
        return this.http.get(url, this.getRequestOptions("application/json"))
                        .map(this.toJson)
                        .catch(this.handleError);
    }

    public httpGetXml(url: string): Observable<any> {
        return this.http.get(url, this.getRequestOptions("text/xml"))
                        .catch(this.handleError);
    }

    public httpPost(url: string, data: any) {
        return this.http.post(url, JSON.stringify(data), this.getRequestOptions("application/json"))
                        .map(this.toJson)
                        .catch(this.handleError);       
    }

    private getRequestOptions(type: string): RequestOptions {
        let header = new Headers({ 'Content-Type': type }); 
        let options = new RequestOptions({headers: header});

        return options;
    }

    private toJson(response: Response) {
        return response.json();
    }

    private handleError(response: any) {
        console.log(response);
        return Observable.throw(response);
    }
}