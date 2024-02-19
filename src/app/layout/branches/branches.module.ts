import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  NgbCarouselModule,
  NgbAlertModule
} from '@ng-bootstrap/ng-bootstrap';
//import { NgxMyDatePickerModule } from 'ngx-mydatepicker';
import { BranchesRoutingModule} from './branches-routing.module';
import { SharedModule, ButtonModule } from "primeng/primeng";
import { DataTableModule } from 'angular-2-data-table';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageHeaderModule } from '../../shared';
import { ModalModule} from 'ngx-bootstrap/modal';
import { LoadingModule } from 'ngx-loading';
import { BranchesService } from './services/branches.service';
import { BranchesComponent } from './components/branches/branches.component';
import { CreateBranchComponent } from './components/create-branch/create-branch.component';
import { UpdateBranchComponent } from './components/update-branch/update-branch.component';


@NgModule({
  imports: [
    CommonModule,
    NgbCarouselModule.forRoot(),
    NgbAlertModule.forRoot(),
    BranchesRoutingModule,
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
  declarations: [BranchesComponent, CreateBranchComponent, UpdateBranchComponent],
  providers: [BranchesService]
})
export class BranchesModule { }
