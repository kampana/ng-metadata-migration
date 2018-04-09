import { Module } from "../panaya-decorators/panaya-decorators";
import { CheckMarkFilter } from "./checkmark/checkmark.filter";
import { CorePhoneModule } from "./phone/phone.module";

@Module({
    providers: [CheckMarkFilter],
    imports: [CorePhoneModule] 
})
export class CoreModule {
}
