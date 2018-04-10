import { Injectable, Inject } from "../../panaya-decorators/panaya-decorators";
import { HttpClient } from '@angular/common/http';


@Injectable()
export class PhoneService {

  constructor(private httpClient : HttpClient) {

  }


  getData(phoneId) {
    return this.httpClient.get('phones/'+phoneId+'.json');
  }


}