import { Injectable, Inject } from "../../panaya-decorators/panaya-decorators";


@Injectable()
export class PhoneService {

  constructor(@Inject("$resource") private $resource) {

  }


  getData(phoneId) {
    return this.$resource('phones/'+phoneId+'.json', {}, {
      query: {
        method: 'GET',
        isArray: true
      }
    });
  }


}