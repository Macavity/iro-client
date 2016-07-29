
import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt/angular2-jwt';
import IAuth0Options = auth0.angular.IAuth0Options;
import { Router } from '@angular/router';

declare var Auth0: any;

@Injectable()
export class AuthService {
    //lock = new Auth0Lock('C3LkYw6zq4AAFR0XxpWAPM010ti5sWyh', 'iro.eu.auth0.com', {});

    private auth0;

    constructor(private router: Router) {
        this.auth0 = new Auth0( <IAuth0Options> {
            domain: 'iro.eu.auth0.com',
            clientID: 'C3LkYw6zq4AAFR0XxpWAPM010ti5sWyh',
            callbackOnLocationHash: true,
            callbackURL: `http://localhost/cockpit`,
        });

        var result = this.auth0.parseHash(window.location.hash);

        if (result && result.idToken) {
            localStorage.setItem('id_token', result.idToken);
            this.router.navigate(['/Home']);
        } else if (result && result.error) {
            alert('error: ' + result.error);
        }

        /*this.lock.on('authenticated', (authResult) => {
            localStorage.setItem('id_token', authResult.idToken)
        });*/
    }

    public login(username, password) {
        this.auth0.login({
            connection: 'Username-Password-Authentication',
            responseType: 'token',
            email: username,
            password: password,
        }, function(err) {
            if (err) alert("something went wrong: " + err.message);
        });
    }

    public logout() {
        localStorage.removeItem('id_token');
    }

    public authenticated() {
        return tokenNotExpired();
    }
}
