import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { ApiService } from './api.service.ts';
import { Http, BaseRequestOptions } from "@angular/http";
import { MockBackend } from "@angular/http/testing";

describe('Api Service', () => {
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
      ApiService,
  ]);

  it('should ...',
      inject([ApiService], (service: ApiService) => {
    expect(service).toBeTruthy();
  }));
});
