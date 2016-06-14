import { Component, Type, OnInit, Inject } from '@angular/core';
import { RouteConfig, RouterLink, Router, RouteDefinition } from '@angular/router-deprecated';

import { LoggedInRouterOutlet } from './logged-in-router-outlet.directive';

// Modules
import { CockpitComponent } from "./modules/cockpit/cockpit.component";
import { LoginComponent } from "./modules/login/login.component";
import { SettingsComponent } from "./settings/settings.component";

// Services
import { ApiService } from "./modules/api/api.service";
import { UserService } from "./modules/user/user.service";

@RouteConfig([
    <RouteDefinition> {
        path: '/',
        as: 'Home',
        redirectTo: ['/Dashboard']
    },
    <RouteDefinition> {
        path: '/login',
        as: 'Login',
        component: LoginComponent
    },
    <RouteDefinition> {
        path: '/dashboard',
        as: 'Dashboard',
        component: CockpitComponent
    },
    <RouteDefinition> {
        path: '/settings',
        as: 'Settings',
        component: SettingsComponent
    }
])
@Component({
    moduleId: module.id,
    selector: 'iro-client-app',

    templateUrl: 'iro-client.component.html',
    styleUrls: ['iro-client.component.css'],

    directives: <any> [
        LoggedInRouterOutlet
    ],
    providers: [
        ApiService,
        UserService
    ]
})
export class IroClientAppComponent implements OnInit
{

    public isLoggedIn = false;

    constructor(@Inject(UserService) private userService: UserService, @Inject(Router) private router: Router)
    {
        //
    }

    ngOnInit()
    {
        this.userService.isLoggedIn.subscribe(this.onLoginStatusChange);
    }

    onLoginStatusChange = (response) =>
    {
        this.isLoggedIn = response;
        if (this.isLoggedIn) {
            this.router.navigate(['/Dashboard']);
        } else {
            this.router.navigate(['/Login']);
        }
    };
}