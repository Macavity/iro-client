import {
  beforeEachProviders,
  describe,
  inject,
  it
} from '@angular/core/testing';
import { Component } from '@angular/core';
import { BaseRequestOptions, Http } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

// Load the implementations that should be tested
import { Title } from './title';
import { AppState } from "../../app.service";
import { HomeComponent } from "./home.component";

describe('Home', () => {
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
    Title,
    HomeComponent
  ]);

  it('should have default data', inject([ HomeComponent ], (home) => {
    expect(home.localState).toEqual({ value: '' });
  }));

  it('should have a title', inject([ HomeComponent ], (home) => {
    expect(!!home.title).toEqual(true);
  }));

  it('should log ngOnInit', inject([ HomeComponent ], (home) => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    home.ngOnInit();
    expect(console.log).toHaveBeenCalled();
  }));

});
