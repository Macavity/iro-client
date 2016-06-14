import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { Observable } from '../../../../node_modules/rxjs/Observable.d';
import 'rxjs';
import '../../../../node_modules/rxjs/add/operator/toPromise.d';

import { contentHeaders } from "../../shared/headers";

@Injectable()
export class ApiService
{
    jwt: string;

    endpoint: string = '/api/';

    constructor(private http: Http)
    {
        this.jwt = localStorage.getItem('jwt');
    }

    get(action: string)
    {
        return this.http.get(this.endpoint + action);
    }

    secureGet(action: string): Promise<any>
    {
        //headers.append('Authorization', `Bearer ${this.jwt}`);

        //noinspection TypeScriptUnresolvedFunction
        return this.http.get(this.endpoint + action + "?token=" + this.jwt, {headers: contentHeaders})
            .toPromise()
            .then((response: Response) => response.json().data)
            .catch(this.handleError);
    }

    post(action: string, data: Object): Promise<any>
    {
        //noinspection TypeScriptUnresolvedFunction
        return this.http.post(this.endpoint + action, JSON.stringify(data), {headers: contentHeaders})
            .toPromise()
            .then()
            .catch(this.handleError);
    }

    secureGet(action: string, data: Object): Promise<any>
    {
        //noinspection TypeScriptUnresolvedFunction
        return this.http.post(this.endpoint + action + "?token=" + this.jwt, JSON.stringify(data), contentHeaders)
            .toPromise()
            .then()
            .catch(this.handleError);
    }

    securePut(action: string, data: Object)
    {
        //noinspection TypeScriptUnresolvedFunction
        return this.http.put(this.endpoint + action + "?token=" + this.jwt, JSON.stringify(data), contentHeaders)
            .toPromise()
            .then()
            .catch(this.handleError);
    }

    secureDelete(action: string)
    {
        //noinspection TypeScriptUnresolvedFunction
        return this.http.delete(this.endpoint + action + "?token=" + this.jwt, contentHeaders)
            .toPromise()
            .then()
            .catch(this.handleError);
    }

    handleError(error)
    {
        const errorType = error.json().error;

        if (errorType == "token_expired") {
            localStorage.removeItem(('jwt'));
            window.location.href = "/login";
        }

        console.error(error);
        return Promise.reject(error.message || error);
    }
}