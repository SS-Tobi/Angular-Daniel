import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview/overview.component';
import { NgxEchartsModule } from 'ngx-echarts';
import {WebRoutingModule} from "./web-routing.module";
import { DomainsComponent } from './domains/domains.component';
import {NgxPaginationModule} from "ngx-pagination";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { HostingComponent } from './hosting/hosting.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedComponentsModule} from '../../shared/components/shared-components.module';
import { DomainEditComponent } from './domain-edit/domain-edit.component';
import {SettingComponent} from './setting/setting.component';

@NgModule({
  imports: [
      CommonModule,
      WebRoutingModule,
      NgxEchartsModule,
      NgxPaginationModule,
      NgxDatatableModule,
      NgbModule,
      FormsModule,
      ReactiveFormsModule,
      SharedComponentsModule,

  ],
  declarations: [OverviewComponent,
      DomainsComponent, HostingComponent, DomainEditComponent,SettingComponent]
})
export class WebModule { }
