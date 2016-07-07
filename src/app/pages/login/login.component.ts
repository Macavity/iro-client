import { Component, OnInit } from '@angular/core';
import {
    FORM_DIRECTIVES,
    FormBuilder,
    ControlGroup,
    Validators,
    AbstractControl
} from '@angular/common';

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

    public loginForm: ControlGroup;
    public email: AbstractControl;
    public password: AbstractControl;
    public submitted: boolean = false;

    public hasLoginError = false;
    public hasGenericError = false;
    public errorMessage = "";

    constructor(private formBuilder: FormBuilder, private userService: UserService) {
        this.loginForm = formBuilder.group({
            'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
            'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
        });

        this.email = this.loginForm.controls['email'];
        this.password = this.loginForm.controls['password'];
    }

    ngOnInit() {
    }

    login(event, email, password) {
        this.submitted = true;

        if(this.loginForm.valid) {
            this.userService.authenticate(email, password)
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

}
