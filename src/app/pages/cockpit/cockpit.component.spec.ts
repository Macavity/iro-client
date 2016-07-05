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
import { CockpitComponent } from './cockpit.component.ts';
import { AppState } from "../../app.service";

describe('Component: Cockpit', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [
      AppState,
      CockpitComponent
  ]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([CockpitComponent],
      (component: CockpitComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(<Type>TestCockpitComponent)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(<Type>CockpitComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component(<any> {
  selector: 'test',
  template: `
    <app-cockpit></app-cockpit>
  `,
  directives: [CockpitComponent]
})
class TestCockpitComponent {
}

