import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { ForgotpasswordRoutingModule } from './forgotpassword-routing.module';
import { ForgotpasswordComponent } from './forgotpassword.component';

@NgModule({
    imports: [
        CommonModule,
        ForgotpasswordRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [ForgotpasswordComponent]
})
export class ForgotPasswordModule {
}
