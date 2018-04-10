import { PhoneDetailModule } from './phone-detail/phone-detail.module';
import { PhoneListModule } from './phone-list/phone-list.module';
import { SortByPipe } from './core/sort/sort';
import { FilterPipe } from './core/filter/filter';
import { NewService } from './next-gen/new-service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhoneService } from './core/phone/phone.service';
import { PhoneListComponent } from './phone-list/phone-list.component';
import { PhoneDetailComponent } from './phone-detail/phone-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { Module } from './panaya-decorators/panaya-decorators';
import { CoreModule } from './core/core.module';

@Module({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule,
        PhoneDetailModule,
        PhoneListModule
    ],
    declarations: [
        AppComponent,
    ],
    entryComponents: [
        AppComponent
    ],
    providers: [
     ],
    bootstrap: [AppComponent]
})
export class AppModule {

}