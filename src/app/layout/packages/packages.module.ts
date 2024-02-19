import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  NgbCarouselModule,
  NgbAlertModule
} from '@ng-bootstrap/ng-bootstrap';
//import { NgxMyDatePickerModule } from 'ngx-mydatepicker';
import { PackagesRoutingModule} from './packages-routing.module';
import { SharedModule, ButtonModule } from "primeng/primeng";
import { DataTableModule } from 'angular-2-data-table';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageHeaderModule } from '../../shared';
import { ModalModule} from 'ngx-bootstrap/modal';
import { LoadingModule } from 'ngx-loading';
import { PackagesService } from './services/packages.service';
import { PackagesComponent } from './components/packages/packages.component';
import { CreatePackageComponent } from './components/create-package/create-package.component';
import { UpdatePackageComponent } from './components/update-package/update-package.component';

@NgModule({
  imports: [
    CommonModule,
    NgbCarouselModule.forRoot(),
    NgbAlertModule.forRoot(),
    PackagesRoutingModule,
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
  declarations: [PackagesComponent, CreatePackageComponent, UpdatePackageComponent],
  providers: [PackagesService]
})
export class PackagesModule { }
