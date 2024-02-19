import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  NgbCarouselModule,
  NgbAlertModule
} from '@ng-bootstrap/ng-bootstrap';
//import { NgxMyDatePickerModule } from 'ngx-mydatepicker';
import { AddonsRoutingModule} from './addons-routing.module';
import { SharedModule, ButtonModule } from "primeng/primeng";
import { DataTableModule } from 'angular-2-data-table';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageHeaderModule } from '../../shared';
import { ModalModule} from 'ngx-bootstrap/modal';
import { LoadingModule } from 'ngx-loading';
import { AddonsService } from './services/addons.service';
import { AddonsComponent } from './components/addons/addons.component';
import { CreateAddonsComponent } from './components/create-addons/create-addons.component';
import { UpdateAddonsComponent } from './components/update-addons/update-addons.component';

@NgModule({
  imports: [
    CommonModule,
    NgbCarouselModule.forRoot(),
    NgbAlertModule.forRoot(),
    AddonsRoutingModule,
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
  declarations: [AddonsComponent, CreateAddonsComponent, UpdateAddonsComponent],
  providers: [AddonsService]
})
export class AddonsModule {}
