// App
export * from './app.component';
export * from './app.service';
export * from './app.routes';

import { Auth } from './modules/auth/auth.service';
import { AppState } from './app.service';
import { ApiService } from './modules/api/api.service';
import { LanguageService } from './modules/language/language.service';
import { UserService } from './modules/user/user.service';
import { NavigationService } from './modules/navigation/navigation.service';

// Application wide providers
export const APP_PROVIDERS = [
    AppState,
    Auth,
    ApiService,
    LanguageService,
    UserService,
    NavigationService
];
