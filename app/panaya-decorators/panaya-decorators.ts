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
} from 'ng-metadata/core'; // replace with @angular/core



//https://github.com/ngParty/ng-metadata/blob/master/docs/api/core/decorator.md
//https://hotell.gitbooks.io/ng-metadata/content/docs/api/core/decorator.html
export function Module(obj) {
    return ngModule(obj);
}

export function Injectable(id) {
    return ngInjectable(id); // Remove "id" as it doesn't exist in @angular
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

export function ViewChild(selector: string) {
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
