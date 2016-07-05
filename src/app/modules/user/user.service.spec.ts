import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { UserService } from './user.service.ts';
import { Http, BaseRequestOptions } from "@angular/http";
import { MockBackend } from "@angular/http/testing";
import { ApiService } from "../api/api.service";

describe('User Service', () => {
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
      UserService,
      ApiService
  ]);

    it('should ...',
        inject([UserService], (service: UserService) => {
            expect(service).toBeTruthy();
        }));
});
