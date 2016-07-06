import { Component, OnInit } from '@angular/core';
import { AppState } from '../../app.service';
import { UserService } from '../../modules/user/user.service';

@Component({
    moduleId: module.id,
    selector: 'page-login',
    styles: [
        '.login-form { width: 320px; margin: 0 auto 20px auto; }'
    ],
    template: require('./login.component.html')
})
export class LoginComponent implements OnInit {

    hasEmailError = false;
    hasGenericError = false;
    errorMessage = "";

    constructor(public appState: AppState, private userService: UserService) {
        this.appState.set('hideSidebar', true);
    }

    ngOnInit() {
    }

    login(event, email, password) {
        event.preventDefault();

        this.userService.authenticate(email, password)
            .catch(
                error => {
                    console.warn("error logging in!");

                    const errorType = error.json().error || "default";

                    if (errorType == "invalid_credentials") {
                        this.hasEmailError = true;
                    } else {
                        this.hasGenericError = true;
                        this.errorMessage = error.json().message;
                    }
                }
            );
    }

}
