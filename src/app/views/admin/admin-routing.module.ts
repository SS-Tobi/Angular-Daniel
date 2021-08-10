import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {UsersComponent} from "./users/users.component";
import {DomainsComponent} from "./domains/domains.component";
import {HostingsComponent} from "./hostings/hostings.component";
import {CompetitorsComponent} from "./competitors/competitors.component";
import {TicketsComponent} from "./tickets/tickets.component";
import {UserDetailsComponent} from "./user-details/user-details.component";
import {UserResolver} from "../../shared/resolvers/admin/user.resolver";
import {StaffComponent} from "./staff/staff.component";
import {StaffFormComponent} from "./staff-form/staff-form.component";

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'users',
    component: UsersComponent,
  },
  {
    path: 'staff',
    component: StaffComponent,
  },
  {
    path: 'staff-form',
    component: StaffFormComponent,
  },
  {
    path: 'user-details/:id',
    component: UserDetailsComponent,
    resolve:{
      user: UserResolver
    }
  },
  {
    path: 'domains',
    component: DomainsComponent,
  },
  {
    path: 'hosting',
    component: HostingsComponent,
  },
  {
    path: 'competitors',
    component: CompetitorsComponent,
  },
  {
    path: 'tickets',
    component: TicketsComponent,
  },
  {
    path: 'plans',
    loadChildren: './plans/plans.module#PlansModule',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
