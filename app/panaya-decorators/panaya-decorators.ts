import 'reflect-metadata';
import {
    NgModule as ngModule,
    Injectable as ngInjectable,
    Inject as ngInject,
    Pipe as ngPipe,
    Component as ngComponent,
    Directive as ngDirective,
    OnChanges as ngChanges,
    PipeTransform as ngPipeTransform,
    Input as ngInput,
    Output as ngOutput,
    OnInit as ngOnInit,
    AfterViewInit as ngAfterViewInit,
    ViewChild as ngViewChild,
    bundle as ngBundle
} from 'ng-metadata/core';
import { Type } from 'ng-metadata/src/facade/type';
import { NgModuleMetadataType } from 'ng-metadata/src/core/directives';


//https://github.com/ngParty/ng-metadata/blob/master/docs/api/core/decorator.md
//https://hotell.gitbooks.io/ng-metadata/content/docs/api/core/decorator.html
export function Module(obj?: NgModuleMetadataType) {
    return ngModule(obj);
}

export function Injectable(id?) {
    return ngInjectable(id);
}

export function Inject(token) {
    return ngInject(token);
}

export function Component(options) {
    return ngComponent(options);
}

export function Directive(options) {
    return ngDirective(options);
}

export function Input(bindingPropertyName?) {
    return ngInput(bindingPropertyName);
}

export function Pipe(options?) {
    return ngPipe(options);
}

export function Output(bindingPropertyName?) {
    return ngOutput(bindingPropertyName);
}

export function ViewChild(selector: Type | string) {
    return ngViewChild(selector);
}

export interface OnInit extends ngOnInit {
}

export interface AfterViewInit extends ngAfterViewInit {

}

export interface OnChanges extends ngChanges {

}

export interface PipeTransform extends ngPipeTransform {

}

export function bundle(NgModuleClass: Type, otherProviders?: any[], existingAngular1Module?: ng.IModule): ng.IModule {
    return ngBundle(NgModuleClass, otherProviders, existingAngular1Module);
}
