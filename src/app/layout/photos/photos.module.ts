import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {
  NgbCarouselModule,
  NgbAlertModule
} from '@ng-bootstrap/ng-bootstrap';
//import { NgxMyDatePickerModule } from 'ngx-mydatepicker';
import { PhotosRoutingModule} from './photos-routing.module';
import { DataTableModule, SharedModule, ButtonModule } from "primeng/primeng";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageHeaderModule } from '../../shared';
import { ModalModule} from 'ngx-bootstrap/modal';
import { LoadingModule } from 'ngx-loading';
import { ActiveBookingsService } from '../active-bookings/services/active-bookings.service';
import { PhotosService } from './services/photos.service';
import { PhotosComponent } from './components/photos/photos.component';
// import { CreateUserComponent } from './components/create-user/create-user.component';
// import { UpdateUserComponent } from './components/update-user/update-user.component';

import { ExpansionPanelsModule } from 'ng2-expansion-panels';

@NgModule({
  imports: [
    CommonModule,
    NgbCarouselModule.forRoot(),
    NgbAlertModule.forRoot(),
    PhotosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTableModule,
    SharedModule,
    NgbModule.forRoot(),
    PageHeaderModule,
    ModalModule.forRoot(),
    ButtonModule,
    LoadingModule,
    HttpClientModule,
    ExpansionPanelsModule
  ],
  declarations: [PhotosComponent],
  providers: [PhotosService, ActiveBookingsService]
})
export class PhotosModule { }
