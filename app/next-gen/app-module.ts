import { Module } from "../panaya-decorators/panaya-decorators";
import { NewComponent } from "./new-component";
import { NewService } from "./new-service";

@Module({
    declarations: [NewComponent],
    providers: [NewService],
    imports: []
})
export class AppModule {

}
