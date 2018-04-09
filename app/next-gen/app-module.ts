import { PhoneListModule } from './../phone-list/phone-list.module';
import { Module } from "../panaya-decorators/panaya-decorators";
import { NewComponent } from "./new-component";
import { NewService } from "./new-service";
import { CoreModule } from "../core/core.module";
import { PhoneDetailModule } from "../phone-detail/phone-detail.module";

@Module({
    declarations: [NewComponent],
    providers: [NewService],
    imports: [CoreModule, PhoneDetailModule, PhoneListModule]
})
export class AppModule {

}
