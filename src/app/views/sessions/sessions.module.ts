import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SessionsRoutingModule } from './sessions-routing.module';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { ForgotComponent } from './forgot/forgot.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import {PasswordStrengthMeterModule} from "angular-password-strength-meter";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedComponentsModule,
        SessionsRoutingModule,
        PasswordStrengthMeterModule
    ],
  declarations: [SignupComponent, SigninComponent, ForgotComponent]
})
export class SessionsModule { }
