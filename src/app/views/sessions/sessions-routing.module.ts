import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { ForgotComponent } from './forgot/forgot.component';
import {AuthGaurd} from '../../shared/services/auth.gaurd';
import {IsGuestGuard} from '../../shared/services/is-guest.guard';

const routes: Routes = [
  {
    path: 'signup',
    component: SignupComponent,
    // canActivate: [AuthGaurd]
  },
  {
    path: 'signin',
    component: SigninComponent,
    // canActivate: [IsGuestGuard]
  },
  {
    path: 'forgot',
    component: ForgotComponent,
    // canActivate: [AuthGaurd]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SessionsRoutingModule { }
