import { PhoneDetailComponent } from './phone-detail.component';
import { Module } from "../panaya-decorators/panaya-decorators";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';

@Module({
  declarations : [PhoneDetailComponent],
  imports: [FormsModule, BrowserModule, CoreModule]
})
export class PhoneDetailModule {

}