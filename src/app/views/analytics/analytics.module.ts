import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview/overview.component';
import {AnalyticsRoutingModule} from "./analytics-routing.module";
import {SharedComponentsModule} from "../../shared/components/shared-components.module";

@NgModule({
  imports: [
      CommonModule,
      AnalyticsRoutingModule,
      SharedComponentsModule
  ],
  declarations: [OverviewComponent]
})
export class AnalyticsModule { }
