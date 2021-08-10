import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VerifyComponent} from "./verify/verify.component";
import {ResetPasswordComponent} from "./reset-password/reset-password.component";

const routes: Routes = [
    {
        path: 'verify/:action/:code',
        component: VerifyComponent,
    },
    {
        path: 'reset-password/:code',
        component: ResetPasswordComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SiteRoutingModule { }
