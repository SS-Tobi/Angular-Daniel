import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview/overview.component';
import { SettingComponent } from './setting/setting.component';
import {NgxEchartsModule} from "ngx-echarts";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedComponentsModule} from "../../shared/components/shared-components.module";
import {CustomFormsModule} from "ng2-validation";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {ColorPickerModule} from "ngx-color-picker";
import {ReviewRoutingModule} from "./review-routing.module";

@NgModule({
  imports: [
    CommonModule,
    NgxEchartsModule,
    FormsModule,
    ReactiveFormsModule,
    SharedComponentsModule,
    CustomFormsModule,
    NgbModule,
    ColorPickerModule,
    ReviewRoutingModule
  ],
  declarations: [OverviewComponent, SettingComponent]
})
export class ReviewModule { }
