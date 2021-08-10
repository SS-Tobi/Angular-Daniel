import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview/overview.component';
import {SocialRoutingModule} from "./social-routing.module";
import {NgxEchartsModule} from "ngx-echarts";
import { SettingComponent } from './setting/setting.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedComponentsModule} from "../../shared/components/shared-components.module";
import {CustomFormsModule} from "ng2-validation";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {ColorPickerModule} from "ngx-color-picker";

@NgModule({
    imports: [
        CommonModule,
        SocialRoutingModule,
        NgxEchartsModule,
        FormsModule,
        ReactiveFormsModule,
        SharedComponentsModule,
        CustomFormsModule,
        NgbModule,
        ColorPickerModule
    ],
  declarations: [OverviewComponent, SettingComponent]
})
export class SocialModule { }
