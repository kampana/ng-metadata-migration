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
  query: string;
  phones: any;
  $ctrl = this;

  constructor(phoneService : PhoneService, newservice : NewService) {
    phoneService.getData('phones').subscribe( result => { 
      this.phones = result;
    });
    this.orderProp = 'age';
    this.searchText = newservice.returnSearchText();
  }
}