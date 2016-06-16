import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs';
import 'rxjs/add/operator/toPromise';
import { ApiService } from '../api/api.service';
import { Language } from './language.model';

@Injectable()
export class LanguageService {

    endpoint: string = '/api/language';

    private _languages: Language[];

    constructor(private http: Http, private api: ApiService) {
        this._languages.push(new Language('en', 'English', '/images/flags/gb.png'));
        this._languages.push(new Language('de', 'Deutsch', '/images/flags/de.png'));

    }

    get languages(): Language[] {
        return this._languages;
    }
}
