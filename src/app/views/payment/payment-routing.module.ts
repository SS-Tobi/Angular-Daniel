import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PlansComponent} from "./plans/plans.component";
import {PlansResolver} from "../../shared/services/plans/plans.resolver";
import {FailedComponent} from "./failed/failed.component";
import {SuccessComponent} from "./success/success.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/plans',
    pathMatch: 'full',
  },
  {
    path: 'plans',
    component: PlansComponent,
    resolve: {
      plans: PlansResolver,
    }
  },
  {
    path: 'failed',
    component: FailedComponent,
  },
  {
    path: 'success',
    component: SuccessComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule { }
