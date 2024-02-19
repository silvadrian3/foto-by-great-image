import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgbCarouselModule,NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
import { ActiveBookingsRoutingModule} from './active-bookings-routing.module';
import { SharedModule, ButtonModule } from "primeng/primeng";
import { DataTableModule } from 'angular-2-data-table';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageHeaderModule } from '../../shared';
import { ModalModule} from 'ngx-bootstrap/modal';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoadingModule } from 'ngx-loading';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ActiveBookingsComponent } from './components/active-bookings/active-bookings.component';
import { CreateBookingComponent } from './components/create-booking/create-booking.component';
import { ActiveBookingsService } from './services/active-bookings.service';
import { PhotosService } from '../photos/services/photos.service';
import { ServicesService } from '../services/services/services.service';
import { BranchesService } from '../branches/services/branches.service';
import { AgmCoreModule } from '@agm/core';
import { NgxSpinnerModule } from "ngx-spinner";


@NgModule({
  imports: [
    CommonModule,
    NgbCarouselModule.forRoot(),
    NgbAlertModule.forRoot(),
    ActiveBookingsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTableModule,
    SharedModule,
    NgbModule.forRoot(),
    PageHeaderModule,
    ModalModule.forRoot(),
    TabsModule.forRoot(),
    ButtonModule,
    LoadingModule,
    HttpClientModule,
    AngularDateTimePickerModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD5FmG7JvFG5HBYD-MpHZeKV4kXxyuvwjg'
    }),
    NgxSpinnerModule
  ],
  declarations: [
    ActiveBookingsComponent,
    CreateBookingComponent
  ],
  providers: [ActiveBookingsService, ServicesService, PhotosService, BranchesService, NgbModal]
})
export class ActiveBookingsModule { }