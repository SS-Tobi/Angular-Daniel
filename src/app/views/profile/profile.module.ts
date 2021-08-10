import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import {ProfileRoutingModule} from "./profile-routing.module";
import {NgxPaginationModule} from "ngx-pagination";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedComponentsModule} from "../../shared/components/shared-components.module";
import {CustomFormsModule} from "ng2-validation";
import {PasswordStrengthMeterModule} from "angular-password-strength-meter";
import { BillingComponent } from './billing/billing.component';

@NgModule({
    imports: [
        CommonModule,
        ProfileRoutingModule,
        NgxPaginationModule,
        NgxDatatableModule,
        NgbModule,
        FormsModule,
        SharedComponentsModule,
        CustomFormsModule,
        ReactiveFormsModule,
        PasswordStrengthMeterModule,
    ],
  declarations: [ProfileComponent, BillingComponent]
})
export class ProfileModule { }
