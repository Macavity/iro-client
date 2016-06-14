import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { ApiService } from './api.service.ts';

describe('Api Service', () => {
  beforeEachProviders(() => [ApiService]);

  it('should ...',
      inject([ApiService], (service: ApiService) => {
    expect(service).toBeTruthy();
  }));
});
