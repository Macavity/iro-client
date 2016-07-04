import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component, Type } from '@angular/core';
import { By } from '@angular/platform-browser';
import { LoginComponent } from './login.component';

describe('Component: Login', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [LoginComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([LoginComponent],
      (component: LoginComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(<Type>LoginComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(<Type>LoginComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component(<any>{
  selector: 'test',
  template: `
    <app-login></app-login>
  `,
  directives: [LoginComponent]
})
class LoginComponentTestController {
}

