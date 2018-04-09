import { NewService } from './new-service';
import { Component } from "../panaya-decorators/panaya-decorators";
import { Input } from 'ng-metadata/src/core/directives';

@Component({
    selector: 'new-component',
    template: '<div>{{$ctrl.newMember}} - my input is: {{$ctrl.myInput}}</div>'
})
export class NewComponent {
    @Input() myInput;
    newMember : string;

    constructor(newService : NewService) {
        this.newMember = newService.returnHelloWorld();
    }

}