import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SocialMediaComponent} from "./social-media/social-media.component";
import {SocialProfileResolver} from "../../shared/services/social/social-profile.resolver";
import {BasicInfoComponent} from "./basic-info/basic-info.component";
import {ConfigAnalyticsComponent} from "./config-analytics/config-analytics.component";
import {SettingsResolverService} from "../../shared/services/web/settings.resolver.service";
import {WebsiteInfoComponent} from "./website-info/website-info.component";
import {WebSettingsResolverService} from "../../shared/services/web/web-settings.resolver.service";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/basic-info',
    pathMatch: 'full',
  },
  {
    path: 'basic-info',
    component: BasicInfoComponent,
  },
  {
    path: 'social-media',
    component: SocialMediaComponent,
    resolve: {
      profiles: SocialProfileResolver
    }
  },
  {
    path: 'config-analytics',
    component: ConfigAnalyticsComponent,
    resolve: {
      setting: WebSettingsResolverService
    },
  },
  {
    path: 'website-info',
    component: WebsiteInfoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnBoardingRoutingModule { }
