import {
  beforeEachProviders,
  inject,
  it
} from '@angular/core/testing';
import { Component } from '@angular/core';
import { Http, BaseRequestOptions } from "@angular/http";
import { MockBackend } from "@angular/http/testing";

// Load the implementations that should be tested
import { AppComponent } from './app.component';
import { AppState } from './app.service';
import { UserService } from "./modules/user/user.service";
import { ApiService } from "./modules/api/api.service";

describe('App', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEachProviders(() => [
      BaseRequestOptions,
      MockBackend,
      {
          provide: Http,
          useFactory: function(backend, defaultOptions) {
              return new Http(backend, defaultOptions);
          },
          deps: [MockBackend, BaseRequestOptions]
      },
      AppState,
      UserService,
      ApiService,
      AppComponent
  ]);

  it('should not throw an error', inject([ AppComponent ], (app) => {
    expect(app).toBeTruthy();
  }));

});
