import { Component, OnInit } from '@angular/core';
import { NgForm }    from '@angular/forms';

import { AppState } from '../../app.service';
import { UserService } from '../../modules/user/user.service';

@Component({
    moduleId: module.id,
    selector: 'page-login',
    styles: [
        '.login-form { width: 320px; margin: 0 auto 20px auto; }'
    ],
    template: require('./login.html')
})
export class LoginComponent implements OnInit {

    public submitted: boolean = false;

    public email: string = "";
    public password: string = "";

    public hasLoginError = false;
    public hasGenericError = false;
    public errorMessage = "";

    constructor(private userService: UserService) {
    }

    ngOnInit() {
    }

    login(event, email, password) {
        event.preventDefault();

        console.log("email",email);
        console.log("pw",password);

        this.submitted = true;

        let body = JSON.stringify({ email: email, password: password });

        this.userService
            .authenticate(email, password)
            .catch(
                error => {
                    console.warn("error logging in!");

                    const errorType = error.json().error || "default";

                    if (errorType == "invalid_credentials") {
                        this.hasLoginError = true;
                    } else {
                        this.hasGenericError = true;
                        this.errorMessage = error.json().message;
                    }
                }
            );

    }

}
