import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfileComponent} from "./profile/profile.component";
import {AuthGaurd} from '../../shared/services/auth.gaurd';
import {BillingComponent} from "./billing/billing.component";

const routes: Routes = [
    {
        path: '',
        redirectTo: 'me',
        pathMatch: 'full'
    },
    {
        path: 'me',
        component: ProfileComponent,
        canActivate:[AuthGaurd]
    },
    {
        path: 'billing',
        component: BillingComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProfileRoutingModule { }
