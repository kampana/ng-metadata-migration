import { NewService } from './../next-gen/new-service';
import { PhoneListComponent } from './phone-list.component';
import { Module } from "../panaya-decorators/panaya-decorators";
import { FormsModule } from '@angular/forms';
import { NewComponent } from '../next-gen/new-component';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from '../core/core.module';
import { CorePhoneModule } from '../core/phone/phone.module';


@Module({
    imports: [FormsModule, BrowserModule, CoreModule, CorePhoneModule],
    providers: [NewService],
    declarations: [PhoneListComponent, NewComponent]
})
export class PhoneListModule {
    
}