import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  NgbCarouselModule,
  NgbAlertModule
} from '@ng-bootstrap/ng-bootstrap';
//import { NgxMyDatePickerModule } from 'ngx-mydatepicker';
import { ProfileRoutingModule} from './profile-routing.module';
import { DataTableModule, SharedModule, ButtonModule } from "primeng/primeng";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageHeaderModule } from '../../shared';
import { ModalModule} from 'ngx-bootstrap/modal';
import { LoadingModule } from 'ngx-loading';
import { ProfileService } from './services/profile.service';
import { ProfileComponent } from './components/profile/profile.component';


@NgModule({
  imports: [
    CommonModule,
    NgbCarouselModule.forRoot(),
    NgbAlertModule.forRoot(),
    ProfileRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTableModule,
    SharedModule,
    NgbModule.forRoot(),
    PageHeaderModule,
    ModalModule.forRoot(),
    ButtonModule,
    LoadingModule
  ],
  declarations: [ProfileComponent],
  providers: [ProfileService]
})
export class ProfileModule { }
