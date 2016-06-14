import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { IroClientAppComponent } from '../app/iro-client.component';

beforeEachProviders(() => [IroClientAppComponent]);

describe('App: IroClient', () => {
  it('should create the app',
      inject([IroClientAppComponent], (app: IroClientAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'iro-client works!\'',
      inject([IroClientAppComponent], (app: IroClientAppComponent) => {
    expect(app.title).toEqual('iro-client works!');
  }));
});
