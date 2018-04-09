import { Module } from "../../panaya-decorators/panaya-decorators";
import { PhoneService } from "./phone.service";

@Module({
    providers: [PhoneService]
})
export class CorePhoneModule {

}
