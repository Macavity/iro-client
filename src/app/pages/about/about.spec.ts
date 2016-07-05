import { TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  beforeEachProviders,
  describe,
  inject,
  it
} from '@angular/core/testing';

// Load the implementations that should be tested
import { AboutComponent } from './about.component';

describe('About', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEachProviders(() => [
      {
        provide: ActivatedRoute,
          useValue: {
              data: {
                  subscribe: (fn) => fn({data: "yolo"})
              }
          }
      },
      AboutComponent
  ]);

  it('should log ngOnInit', inject([ AboutComponent ], (about) => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    about.ngOnInit();
    expect(console.log).toHaveBeenCalled();
  }));

});
