import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

import { IroClientAppComponent } from './app/iro-client.component';
import { environment } from "./app/environment";


if (environment.production) {
    enableProdMode();
}

bootstrap(IroClientAppComponent);

