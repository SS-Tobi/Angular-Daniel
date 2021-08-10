import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SiteRoutingModule} from "./site-routing.module";
import {VerifyComponent} from "./verify/verify.component";
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import {ReactiveFormsModule} from "@angular/forms";
import {PasswordStrengthMeterModule} from "angular-password-strength-meter";
import {SharedComponentsModule} from "../../shared/components/shared-components.module";

@NgModule({
    imports: [
        CommonModule,
        SiteRoutingModule,
        ReactiveFormsModule,
        PasswordStrengthMeterModule,
        SharedComponentsModule
    ],
    declarations: [VerifyComponent, ResetPasswordComponent]
})
export class SiteModule { }
