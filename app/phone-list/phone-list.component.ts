import { NewService } from './../next-gen/new-service';
import { PhoneService } from './../core/phone/phone.service';
import { Component } from "../panaya-decorators/panaya-decorators";

@Component({
  selector: 'phone-list',
  templateUrl: './phone-list.template.html'
})
export class PhoneListComponent {
  searchText: string;
  orderProp: string;
  phones: any;

  constructor(phoneService : PhoneService, newservice : NewService) {
    this.phones = phoneService.getData('phones').query();
    this.orderProp = 'age';
    this.searchText = newservice.returnSearchText();
  }
}