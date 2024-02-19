import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  NgbCarouselModule,
  NgbAlertModule
} from '@ng-bootstrap/ng-bootstrap';
//import { NgxMyDatePickerModule } from 'ngx-mydatepicker';
import { UserManagementRoutingModule} from './user-management-routing.module';
import { SharedModule, ButtonModule } from "primeng/primeng";
import { DataTableModule } from 'angular-2-data-table';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageHeaderModule } from '../../shared';
import { ModalModule} from 'ngx-bootstrap/modal';
import { LoadingModule } from 'ngx-loading';
import { UserManagementService } from './services/user-management.service';
import { BranchesService } from '../branches/services/branches.service';
import { UsersComponent } from './components/users/users.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';

@NgModule({
  imports: [
    CommonModule,
    NgbCarouselModule.forRoot(),
    NgbAlertModule.forRoot(),
    UserManagementRoutingModule,
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
  declarations: [UsersComponent, CreateUserComponent, UpdateUserComponent],
  providers: [UserManagementService, BranchesService]
})
export class UserManagementModule { }
