import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiSwitchModule } from 'ngx-ui-switch';
import {
  NgbCarouselModule,
  NgbAlertModule
} from '@ng-bootstrap/ng-bootstrap';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
import { PromosRoutingModule} from './promos-routing.module';
import { SharedModule, ButtonModule } from "primeng/primeng";
import { DataTableModule } from 'angular-2-data-table';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageHeaderModule } from '../../shared';
import { ModalModule} from 'ngx-bootstrap/modal';
import { LoadingModule } from 'ngx-loading';
import { PromosService } from './services/promos.service';
import { PromosComponent } from './components/promos/promos.component';
import { CreatePromoComponent } from './components/create-promo/create-promo.component';
import { UpdatePromoComponent } from './components/update-promo/update-promo.component';

@NgModule({
  imports: [
    CommonModule,
    NgbCarouselModule.forRoot(),
    NgbAlertModule.forRoot(),
    PromosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTableModule,
    SharedModule,
    NgbModule.forRoot(),
    PageHeaderModule,
    ModalModule.forRoot(),
    ButtonModule,
    LoadingModule,
    AngularDateTimePickerModule,
    UiSwitchModule
  ],
  declarations: [PromosComponent, CreatePromoComponent, UpdatePromoComponent],
  providers: [PromosService]
})
export class PromosModule { }
