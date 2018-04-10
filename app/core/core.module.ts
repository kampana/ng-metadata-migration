import { SortByPipe } from './sort/sort';
import { FilterPipe } from './filter/filter';
import { Module } from "../panaya-decorators/panaya-decorators";
import { CheckMarkFilter } from "./checkmark/checkmark.filter";
import { CorePhoneModule } from "./phone/phone.module";

@Module({
    imports: [],
    declarations: [CheckMarkFilter, SortByPipe, FilterPipe],
    exports: [CheckMarkFilter, SortByPipe, FilterPipe]
})
export class CoreModule {
}
