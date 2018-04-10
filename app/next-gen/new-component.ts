import { NewService } from './new-service';
import { Input, Component } from "../panaya-decorators/panaya-decorators";

@Component({
    selector: 'new-component',
    template: '<div>{{newMember}} - my input is: {{myInput}}</div>'
})
export class NewComponent {
    @Input() myInput;
    newMember : string;

    constructor(newService : NewService) {
        this.newMember = newService.returnHelloWorld();
    }

}