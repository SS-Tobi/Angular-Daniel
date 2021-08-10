import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedComponentsModule} from "../../shared/components/shared-components.module";
import {ReactiveFormsModule} from "@angular/forms";
import {PaymentRoutingModule} from "./payment-routing.module";
import {PlansComponent} from "./plans/plans.component";
import { FailedComponent } from './failed/failed.component';
import { SuccessComponent } from './success/success.component';

@NgModule({
    imports: [
        CommonModule,
        PaymentRoutingModule,
        SharedComponentsModule,
        ReactiveFormsModule,
    ],
  declarations: [PlansComponent, FailedComponent, SuccessComponent],
})
export class PaymentModule { }
