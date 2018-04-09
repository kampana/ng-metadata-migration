import { PhoneService } from './../core/phone/phone.service';
import { Component, Inject } from "../panaya-decorators/panaya-decorators";

@Component({
  selector: 'phone-detail',
  templateUrl: "./phone-detail.template.html"
})
export class PhoneDetailComponent {
  mainImageUrl: any;
  phone : any;

  constructor(@Inject("$routeParams") $routeParams, phoneService : PhoneService) {
    phoneService.getData($routeParams.phoneId).get((phone) => {
      this.phone = phone;
      this.setImage(phone.images[0]);
    });
  }

  setImage(imageUrl) {
    this.mainImageUrl = imageUrl;
  }
}
