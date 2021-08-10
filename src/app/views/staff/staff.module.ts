import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import {ReactiveFormsModule} from "@angular/forms";
import {SharedComponentsModule} from "../../shared/components/shared-components.module";
import {StaffRoutingModule} from "./staff-routing.module";

@NgModule({
    imports: [
        CommonModule,
        StaffRoutingModule,
        NgxDatatableModule,
        NgxEchartsModule,
        NgbCarouselModule,
        ReactiveFormsModule,
        SharedComponentsModule
    ],
  declarations: [DashboardComponent, UsersComponent, DomainsComponent, HostingsComponent, CompetitorsComponent, TicketsComponent, UserDetailsComponent]
})
export class StaffModule { }
