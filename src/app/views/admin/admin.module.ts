import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminRoutingModule} from "./admin-routing.module";
import {DashboardComponent} from "./dashboard/dashboard.component";
import { UsersComponent } from './users/users.component';
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import { DomainsComponent } from './domains/domains.component';
import { HostingsComponent } from './hostings/hostings.component';
import { CompetitorsComponent } from './competitors/competitors.component';
import { TicketsComponent } from './tickets/tickets.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import {NgxEchartsModule} from "ngx-echarts";
import {NgbCarouselModule} from "@ng-bootstrap/ng-bootstrap";
import { StaffComponent } from './staff/staff.component';
import { StaffFormComponent } from './staff-form/staff-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {SharedComponentsModule} from "../../shared/components/shared-components.module";

@NgModule({
    imports: [
        CommonModule,
        AdminRoutingModule,
        NgxDatatableModule,
        NgxEchartsModule,
        NgbCarouselModule,
        ReactiveFormsModule,
        SharedComponentsModule
    ],
  declarations: [DashboardComponent, UsersComponent, DomainsComponent, HostingsComponent, CompetitorsComponent, TicketsComponent, UserDetailsComponent, StaffComponent, StaffFormComponent]
})
export class AdminModule { }
