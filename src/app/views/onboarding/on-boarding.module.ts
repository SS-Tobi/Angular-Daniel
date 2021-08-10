import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialMediaComponent } from './social-media/social-media.component';
import {OnBoardingRoutingModule} from "./on-boarding-routing.module";
import {SharedComponentsModule} from "../../shared/components/shared-components.module";
import {ReactiveFormsModule} from "@angular/forms";
import { BasicInfoComponent } from './basic-info/basic-info.component';
import { ConfigAnalyticsComponent } from './config-analytics/config-analytics.component';
import { WebsiteInfoComponent } from './website-info/website-info.component';

@NgModule({
    imports: [
        CommonModule,
        OnBoardingRoutingModule,
        SharedComponentsModule,
        ReactiveFormsModule,
    ],
  declarations: [SocialMediaComponent, BasicInfoComponent, ConfigAnalyticsComponent, WebsiteInfoComponent],
})
export class OnBoardingModule { }
