import {
  beforeEachProviders,
  inject,
  injectAsync,
  it
} from '@angular/core/testing';

// Load the implementations that should be tested
import { AppComponent } from './app.component';
import { AppState } from './app.service';

describe('App', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEachProviders(() => [
      AppState,
      AppComponent
  ]);

  it('should contain iRO headline in header', inject([ AppComponent ], (app) => {
    expect(app.url).toEqual('https://twitter.com/AngularClass');
  }));

});
