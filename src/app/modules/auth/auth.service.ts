
import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt/angular2-jwt';


declare var Auth0Lock: any;

@Injectable()
export class Auth {
    lock = new Auth0Lock('C3LkYw6zq4AAFR0XxpWAPM010ti5sWyh', 'iro.eu.auth0.com', {});

    constructor() {
        this.lock.on('authenticated', (authResult) => {
            localStorage.setItem('id_token', authResult.idToken)
        });
    }

    public login() {
        this.lock.show();
    }

    public logout() {
        localStorage.removeItem('id_token');
    }

    public authenticated() {
        return tokenNotExpired();
    }
}
