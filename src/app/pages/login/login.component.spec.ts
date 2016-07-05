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
import { AppState } from "../../app.service";

describe('Component: Login', () => {
    let builder:TestComponentBuilder;

    beforeEachProviders(() => [
        LoginComponent,
        AppState
    ]);
    beforeEach(inject([TestComponentBuilder], function (tcb:TestComponentBuilder) {
        builder = tcb;
    }));

    it('should inject the component', inject([LoginComponent],
        (component:LoginComponent) => {
            expect(component).toBeTruthy();
        }));

    it('should create the component', inject([], () => {
        return builder.createAsync(<Type>TestLoginComponent)
            .then((fixture:ComponentFixture<any>) => {
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
class TestLoginComponent {
}

