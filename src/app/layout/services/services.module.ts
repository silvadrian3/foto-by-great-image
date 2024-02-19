import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgbCarouselModule,NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { UiSwitchModule } from 'ngx-ui-switch';
import { ServicesRoutingModule} from './services-routing.module';
import { SharedModule, ButtonModule } from "primeng/primeng";
import { DataTableModule } from 'angular-2-data-table';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageHeaderModule } from '../../shared';
import { ModalModule} from 'ngx-bootstrap/modal';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoadingModule } from 'ngx-loading';
import { TabsModule } from 'ngx-bootstrap/tabs';
import {SelectModule} from "ng2-select";
import { AddonsService } from '../addons/services/addons.service';
import { PackagesService } from '../packages/services/packages.service';
import { ServicesComponent } from './components/services/services.component';
import { CreateServiceComponent } from './components/create-service/create-service.component';
import { UpdateServiceComponent } from './components/update-service/update-service.component';
import { ServicesService } from './services/services.service';
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  imports: [
    CommonModule,
    NgbCarouselModule.forRoot(),
    NgbAlertModule.forRoot(),
    ServicesRoutingModule,
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
    SelectModule,
    NgxSpinnerModule,
    UiSwitchModule
  ],
  declarations: [
    ServicesComponent, 
    CreateServiceComponent, 
    UpdateServiceComponent
  ],
  providers: [ServicesService, AddonsService, PackagesService]
})
export class ServicesModule { }