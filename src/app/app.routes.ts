import { Type } from '@angular/core';
import { WebpackAsyncRoute } from '@angularclass/webpack-toolkit';
import { RouterConfig } from '@angular/router';
import { LoginComponent } from './pages/login';
import { HomeComponent } from './pages/home';
import { NoContentComponent } from './pages/no-content/no-content';
import { DataResolver } from './app.resolver';

export const routes: RouterConfig = [
    { path: '', component: <Type> HomeComponent },
    { path: 'home', component: <Type> HomeComponent },
    { path: 'login', component: <Type> LoginComponent },
    { path: 'about', component: 'AboutComponent',
        resolve: {
            'data': DataResolver
        }
    },
    // async components with children routes must use WebpackAsyncRoute
    { path: 'detail', component: 'DetailComponent',
        canActivate: [WebpackAsyncRoute],
        children: [
            { path: '', component: 'DetailIndexComponent'}
        ]
    },
    // Fallback Path
    { path: '**', component: <Type> NoContentComponent },
];

// Async load a component using Webpack's require with es6-promise-loader and webpack `require`
// asyncRoutes is needed for our @angularclass/webpack-toolkit that will allow us to resolve
// the component correctly

export const asyncRoutes: AsyncRoutes = {
    // we have to use the alternative syntax for es6-promise-loader to grab the routes
    'AboutComponent': require('es6-promise-loader!./pages/about'),
    'DetailComponent': require('es6-promise-loader!./pages/detail'),
    'DetailIndexComponent': require('es6-promise-loader!./pages/detail'), 
};


// Optimizations for initial loads
// An array of callbacks to be invoked after bootstrap to prefetch async routes
export const prefetchRouteCallbacks: Array<IdleCallbacks> = [
    asyncRoutes['AboutComponent'],
    asyncRoutes['DetailComponent'],
    // es6-promise-loader returns a function
];


// Es6PromiseLoader and AsyncRoutes interfaces are defined in custom-typings
