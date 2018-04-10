import { PhoneService } from './../core/phone/phone.service';
import { ActivatedRoute } from '@angular/router';
import { Phone } from '../core/phone';
import { Component } from '../panaya-decorators/panaya-decorators';

@Component({
  selector: 'phone-detail',
  template: require("./phone-detail.template.html")
})
export class PhoneDetailComponent {
  mainImageUrl: any;
  phone : Phone = new Phone();

  constructor(activatedRoute: ActivatedRoute, phoneService : PhoneService) {
    activatedRoute.params.subscribe(params => {
      phoneService.getData(params.phoneId).subscribe((phone : Phone) => {
        this.phone = phone;
        this.setImage(phone.images[0]);
      });
     });
  }

  setImage(imageUrl) {
    this.mainImageUrl = imageUrl;
  }
}
