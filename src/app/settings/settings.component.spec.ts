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
import { SettingsComponent } from './settings.component';

describe('Component: Settings', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [SettingsComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([SettingsComponent],
      (component: SettingsComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(<Type>TestSettingsComponent)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(SettingsComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'page-test',
  template: `
    <app-settings></app-settings>
  `,
  directives: [SettingsComponent]
})
class TestSettingsComponent {
}

